console.log(
  "Number of categories: ",
  document.querySelectorAll("li.item").length
);

const liItem = document.querySelectorAll("li.item");

liItem.forEach((el) => {
  console.log("categori: ", el.children[0].innerText);
  console.log("Elements: ", el.children[1].children.length);
});
