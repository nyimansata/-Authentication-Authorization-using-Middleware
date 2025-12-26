const express = require("express");

const router = express.Router();
const articleData = [
  {
    id: 1,
    title: "First Article",
    content:
      "This is the content Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ut enim illo consequuntur, exercitationem ullam repellendus praesentium corrupti assumenda commodi excepturi molestiae modi explicabo quo iusto veritatis consequatur rem. Enim?",
  },
  {
    id: 2,
    title: "Second Article",
    content:
      "This is the content Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ut enim illo consequuntur, exercitationem ullam repellendus praesentium corrupti assumenda commodi excepturi molestiae modi explicabo quo iusto veritatis consequatur rem. Enim?",
  },
  {
    id: 3,
    title: "Third Article",
    content:
      "This is the content Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ut enim illo consequuntur, exercitationem ullam repellendus praesentium corrupti assumenda commodi excepturi molestiae modi explicabo quo iusto veritatis consequatur rem. Enim?",
  },
  {
    id: 4,
    title: "Fourth Article",
    content:
      "This is the content Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ut enim illo consequuntur, exercitationem ullam repellendus praesentium corrupti assumenda commodi excepturi molestiae modi explicabo quo iusto veritatis consequatur rem. Enim?",
  },
];

router.get("/", (req, res) => {
  res.render("article", { articleData });
});

module.exports = router;
