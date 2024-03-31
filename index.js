class Validation {
  constructor(formId, submitButtonId) {
    this.form = document.getElementById(formId);
    this.submitBtn = document.getElementById(submitButtonId);
  }

  init() {
    this.submitform();
  }

  submitform() {
    this.submitBtn.addEventListener("click", this.validateInput.bind(this));
  }

  validateInput(event) {
    event.preventDefault();

    const inputs = this.form.getElementsByTagName("input");
    for (const input of inputs) {
      const nameAttr = input.getAttribute("name");

      if (input.value === "") {
        alert(`${nameAttr} is empty`);
        return;
      }

      if (nameAttr === "email") {
        if (!this.validateEmail(input.value)) {
          alert("Please enter a valid email.");
          return;
        }
      }

      if (nameAttr === "homepage") {
        if (!this.validateURL(input.value)) {
          alert("Please enter a valid URL.");

          return;
        }
      }
    }
    this.form.submit();
    alert("Form submitted");
  }

  validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  validateURL(url) {
    const urlPattern =
      /^(https?:\/\/)?([\w.-]+)\.([a-zA-Z]{2,6})(\/[\w.-]*)*\/?$/;
    return urlPattern.test(url);
  }
}

const formValidator = new Validation("registrationForm", "submitButton");

formValidator.init();
