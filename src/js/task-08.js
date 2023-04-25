const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (e) => {
  const { email, password } = formEl.elements;
  e.preventDefault();
  if (email.value === "" || password.value === "") {
    alert("Не всі поля заповнені");
  } else {
    const result = {
      email: email.value,
      password: password.value,
    };
    console.log("email: ", result.email);
    console.log("password: ", result.password);
  }
  e.target.reset();
});
