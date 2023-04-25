const formEl = document.querySelector(".login-form");
console.log("formEl :>> ", formEl.elements);
formEl.addEventListener("submit", (e) => {
  const { email, password } = formEl.elements;
  console.log(email, password);
  e.preventDefault();
  if (email.value === "" || password.value === "") {
    alert("Не всі поля заповнені");
  }
  e.target.reset();
});
