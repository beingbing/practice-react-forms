import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [isNameTouched, setIsNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const validEnteredName = enteredName.trim() !== "";
  const notValidInput = !validEnteredName && isNameTouched;

  const validEnteredEmail = enteredEmail.trim().includes("@");
  const notValidEmail = !validEnteredEmail && isEmailTouched;

  let formIsValid = false;

    if (validEnteredName && validEnteredEmail) {
      formIsValid = true;
    }


  const inputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setIsNameTouched(true);
    setIsEmailTouched(true);

    if (!validEnteredName || !validEnteredEmail) return;

    console.log(enteredName);
    console.log(enteredEmail);
    setEnteredName("");
    setIsNameTouched(false);
    setEnteredEmail("");
    setIsEmailTouched(false);
  };

  const inputBlurHandler = (event) => {
    setIsNameTouched(true);
  }

  const emailBlurHandler = (event) => {
    setIsEmailTouched(true);
  }

  const inputClasses = notValidInput ? "form-control invalid" : "form-control";
  const emailClasses = notValidEmail ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
        />
        {notValidInput && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailInputHandler}
          onBlur={emailBlurHandler}
        />
        {notValidEmail && <p className="error-text">Enter a valid Email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
