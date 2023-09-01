document.addEventListener("DOMContentLoaded", function () {
  let subBtn = document.querySelector("#sub-btn");
  let success = document.querySelector("#success-msg");
  let inputField = document.querySelector("#input-field");
  let dismissBtn = document.querySelector("#dismiss-btn");

  function getVal(event) {
    event.preventDefault();
    console.table(inputField.value);
    inputField.value = "";
    success.style.display = "block";
  }

  subBtn.addEventListener("click", getVal);

  function dismissSuccess() {
    success.style.display = "none";
  }

  dismissBtn.addEventListener("click", dismissSuccess);
});
