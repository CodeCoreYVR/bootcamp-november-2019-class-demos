const knex = require('./db/client');

knex.insert({
  title: 'first post',
  content: 'heres the first post',
}).into('posts').then((amount) => {
  console.log('inserted: ' + amount)
  knex.destroy();
})

knex.insert([
  {
    title: 'a',
    content: 'heres the first post',
  },
  {
    title: 'b',
    content: 'heres the first post',
  },{
    title: 'c',
    content: 'heres the first post',
  }
]).into('posts').then((records) => {
  console.log(records);
  knex.destroy();
})