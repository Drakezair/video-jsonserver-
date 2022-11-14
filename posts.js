const { faker } = require("@faker-js/faker");

function generatePosts() {
  var posts = [];
  for (let id = 0; id < 50; id++) {
    posts.push({
      id,
      title: faker.lorem.word(),
      content: faker.lorem.paragraph,
    });
  }
  return { posts };
}

module.exports = generatePosts;
