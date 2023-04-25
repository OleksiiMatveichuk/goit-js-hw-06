const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");

const result = ingredients.map((el) => {
  const liItem = document.createElement("li");
  liItem.textContent = el;
  liItem.classList.add("item");
  return liItem;
});

ul.append(...result);

// const ul = document.querySelector("#ingredients");

// const listStr = ingredients.map((el) => `<li class="item">${el}</li>`).join("");

// ul.insertAdjacentHTML("beforebegin", listStr);
