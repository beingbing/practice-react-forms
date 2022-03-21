import {useState, useRef} from 'react';

const SimpleInput = (props) => {

  const inputRef = useRef();

  const [enteredName, setEnteredName] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const [isNameTouched, setIsNameTouched] = useState(false);

  const inputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setIsNameTouched(true);

    if (enteredName === '') {
      setIsNameValid(false);
      return;
    }

    setIsNameValid(true);

    console.log(enteredName);
    console.log(inputRef.current.value);
    setEnteredName('');
  }

  const notValidInput = !isNameValid && isNameTouched;

  const inputClasses = notValidInput ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={inputRef} type='text' id='name' value={enteredName} onChange={inputChangeHandler}/>
        {notValidInput && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
