class Validation {
  constructor(myform, submitbt) {
    this.form = document.getElementById(myform);
    this.submitBtn = document.getElementById(submitbt);
  }

  init() {
    this.submitform();
  }

  submitform() {
    this.submitBtn.addEventListener("click", this.validateinput.bind(this));
  }

  validateinput(event) {
    event.preventDefault();

    const inputs = this.form.getElementsByTagName("input");

    for (const input of inputs) {
      console.log("vghj");
      if (input.value === "") {
        alert(`${input.name} is empty`);
        return;
      }

      if (input.name == "email") {
        console.log("vghj");
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(input.value)) {
          input.style.borderColor = "red";
          alert("Please enter a valid email, not an email address.");
          return;
        }
      }

      if (input.name == "homepage") {
        console.log("tyuij");
        var urlPattern =
          /^(https?:\/\/)?([\w.-]+)\.([a-zA-Z]{2,6})(\/[\w.-]*)*\/?$/;

        if (!urlPattern.test(input.value)) {
          alert("Please enter a valid Url, not an url.");
          input.style.borderColor = "red";
          return;
        }
      }
    }
    this.form.submit();
    alert("form submitted");
  }
}

const formValidator = new Validation("myform", "submitbt");

formValidator.init();
