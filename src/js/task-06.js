const input = document.querySelector("#validation-input");

input.addEventListener("blur", (e) => {
  input.classList.add("invalid");

  if (e.currentTarget.value.length === Number(input.dataset.length)) {
    input.classList.replace("invalid", "valid");
    return;
  }
});
