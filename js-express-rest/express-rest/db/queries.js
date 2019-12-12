const knex = require("./client");

// this is a helper module for querying our db
module.exports = {
  // get all posts
  getAll() {
    return knex("posts").select("*");
  },
  // get one post
  getOne(id) {
    return knex("posts")
      .where("id", id)
      .first();
  },
  // create a post
  create(post) {
    return knex("posts").insert(post, "*");
  },
  // update a post
  update(id, post) {
    return knex("posts")
      .where("id", id)
      .update(post, "*");
  },
  // delete a post
  delete(id) {
    return knex("posts")
      .where("id", id)
      .del();
  }
};
