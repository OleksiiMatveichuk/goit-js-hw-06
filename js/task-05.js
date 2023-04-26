const input = document.querySelector("#name-input");
const spanForInput = document.querySelector("#name-output");

input.addEventListener("input", (e) => {
  spanForInput.textContent = e.currentTarget.value || "Anonymous";
});
