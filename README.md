# simple-react-form-validation-helper

**---- How to use it? ----**

- Install validator using npm: `npm i @brocode/simple-react-form-validation-helper`
- Import validator in your component.
- Use the validation functions in your component on `onChange` and `onBlur` events of your input fields.
- example:
  **_validating an email field:_**

```jsx
// import validator
import validator from "@brocode/simple-react-form-validation-helper";

const sampleForm = () => {
  // use states to store the input value and error message
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  return (
    <>
      {/* Inside your form */}
      <label>Email address</label>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          validator.emailInputChangeHandler(e.target.value, setEmailError);
        }}
        onBlur={(e) => {
          validator.emailInputBlurHandler(e.target.value, setEmailError);
        }}
      />

      {/* Your error message goes here */}
      <span className="text-danger fs-6">{emailError}</span>
    </>
  );
};
export default sampleForm;
```

**---- Validator types ----**

- Name
- Phone Number
- Email
- Password
- Address
- Postal-code
- Price
- Percentage

**Note:** _Use input_ `type="text"` _of while validating phone number, postal-code and percentage._

**---- Found a bug? ----**

Feel free to open an issue on github.

**---- Want to contribute? ----**

Great! fork this repository and make a pull request😊.
