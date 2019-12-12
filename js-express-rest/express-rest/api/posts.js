// api/posts route

const express = require("express");
const router = express.Router();

const queries = require("../db/queries");

const isValidId = (req, res, next) => {
  // check if the id is a valid number
  if (!isNaN(req.params.id)) return next();
  res.status(400);
  next(new Error("Invalid Id"));
};

const validPost = post => {
  const hasTitle = typeof post.title === "string" && post.title.trim() !== "";
  const hasImageUrl =
    typeof post.imageUrl === "string" && post.imageUrl.trim() !== "";

  return hasTitle && hasImageUrl;
};

router.get("/", (req, res) => {
  queries.getAll().then(posts => {
    res.json(posts);
  });
});

router.get("/:id", isValidId, (req, res, next) => {
  const { id } = req.params;
  queries.getOne(id).then(post => {
    if (post) {
      res.json(post);
    } else {
      res.status(404);
      next(new Error("Record Not Found"));
    }
  });
});

router.post("/", (req, res, next) => {
  if (validPost(req.body)) {
    queries.create(req.body).then(posts => {
      res.json(posts[0]);
    });
  } else {
    res.status(400);
    next(new Error("Invalid Post"));
  }
});

router.put("/:id", (req, res, next) => {
  if (validPost(req.body)) {
    queries.update(req.params.id, req.body).then(() => {
      res.json({
        message: "Successfully Updated Post"
      });
    });
  } else {
    res.status(400);
    next(new Error("Invalid Post"));
  }
});

router.delete("/:id", isValidId, (req, res) => {
  queries.delete(req.params.id).then(() => {
    res.json({
      message: "Successfully Deleted Post"
    });
  });
});

module.exports = router;
