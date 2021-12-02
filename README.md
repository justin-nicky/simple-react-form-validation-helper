# simple-react-form-validation-helper

**---- How to use it? ----**

- clone this repository to your react app
- Import validator in your component
- Use the validation functions in your component on onChange and onBlur events of your input fields
- Feel free to modify the validation functions to your needs
- example:
  **_validating an email field:_**

          
            // import validator
            import validator from '../Simple React Form Validation/validationHelpers'

            // use states to store the input value and error message
            const [email, setEmail] = useState('')
            const [emailError, setEmailError] = useState('')

            // inside your form
            <label>Email address</label>
            <input
                type='email'
                value={email}

                onChange={(e) => {
                setEmail(e.target.value)
                validator.emailInputChangeHandler(e.target.value, setEmailError)
                }}

                onBlur={(e) => {
                validator.emailInputBlurHandler(e.target.value, setEmailError)
                }}
            />

            // Your error message goes here
            <span className='text-danger fs-6'>
                {emailError}
            </span>
            

**---- Found a bug? ----**

Feel free to open an issue on github.

**---- Want to contribute? ----**

Great! fork this repository and make a pull request😊.
