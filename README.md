# simple-react-form-validation-helper

**---- How to use it? ----**

- Install validator using npm: `npm i @brocode/simple-react-form-validation-helper`
- Import validator in your component.
- Use the validation functions in your component on `onChange` event of your input fields.
- example:
  **_validating an email field:_**

```jsx
// import validator
import validator from '@brocode/simple-react-form-validation-helper'
function sampleForm() {
  // use states to store the input value and error message
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  return (
    <div className='d-flex justify-content-center'>
      <Form className='m-4 w-25 mt-5'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            value={email}
            placeholder='Enter email'
            required
            onChange={(e) => {
              setEmail(e.target.value)
              validator.email(
                {
                  email: e.target.value,
                },
                setEmailError
              )
            }}
          />
          <Form.Text className='text-muted'>
            <span className='text-danger fs-6'>{emailError}</span>
          </Form.Text>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default sampleForm
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
