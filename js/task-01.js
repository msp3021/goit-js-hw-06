
const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElem = category.querySelectorAll("li");
  console.log(`\nCategory: ${categoryName}`);
  console.log(`Elements: ${categoryElem.length}`);
});

