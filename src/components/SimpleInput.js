import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [isNameTouched, setIsNameTouched] = useState(false);

  const validEnteredName = enteredName.trim() !== "";
  const notValidInput = !validEnteredName && isNameTouched;

  let formIsValid = false;

    if (validEnteredName) {
      formIsValid = true;
    }


  const inputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setIsNameTouched(true);

    if (!validEnteredName) return;

    console.log(enteredName);
    setEnteredName("");
    setIsNameTouched(false);
  };

  const inputBlurHandler = (event) => {
    setIsNameTouched(true);
  }

  const inputClasses = notValidInput ? "form-control invalid" : "form-control";

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
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
