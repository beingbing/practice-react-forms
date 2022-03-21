import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const [enteredEmail, setEnteredEmail] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const validEnteredEmail = enteredEmail.trim().includes("@");
  const notValidEmail = !validEnteredEmail && isEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && validEnteredEmail) {
    formIsValid = true;
  }

  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setIsEmailTouched(true);

    if (!enteredNameIsValid || !validEnteredEmail) return;

    console.log(enteredName);
    console.log(enteredEmail);
    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetNameInput();
    setEnteredEmail("");
    setIsEmailTouched(false);
  };

  const emailBlurHandler = (event) => {
    setIsEmailTouched(true);
  }

  const inputClasses = nameInputHasError ? "form-control invalid" : "form-control";
  const emailClasses = notValidEmail ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
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
