import validator from './index'

// Language: typescript
// Path: src\index.test.ts

describe('index.ts', () => {
  // #################### Testing Name! ###########################
  test('Validating name method (1/8)', () => {
    validator.name({ name: '' }, (error) => {
      expect(error).toBe('This field cannot be empty!')
    })
  })

  test('Validating name method (2/8)', () => {
    validator.name({ name: ' abc' }, (error) => {
      expect(error).toBe('Should not start with space.')
    })
  })

  test('Validating name method (3/8)', () => {
    validator.name({ name: 'abc  def' }, (error) => {
      expect(error).toBe('Should not contain consecutive spaces.')
    })
  })

  test('Validating name method (4/8)', () => {
    validator.name({ name: 'abc45' }, (error) => {
      expect(error).toBe('Should not contain numbers.')
    })
  })

  test('Validating name method (5/8)', () => {
    validator.name({ name: 'abc@' }, (error) => {
      expect(error).toBe('Invalid charecter!')
    })
  })

  test('Validating name method (6/8)', () => {
    validator.name({ name: 'abc', minLength: 5 }, (error) => {
      expect(error).toBe('This field should have atleast 5 charecters.')
    })
  })

  test('Validating name method (7/8)', () => {
    validator.name({ name: 'abc ' }, (error) => {
      expect(error).toBe('Should not end with space.')
    })
  })

  test('Validating name method (8/8)', () => {
    validator.name({ name: 'abcde', minLength: 5 }, (error) => {
      expect(error).toBe('')
    })
  })

  // #################### Testing Email! ###########################

  test('Validating email method (1/5)', () => {
    validator.email({ email: ' ' }, (error) => {
      expect(error).toBe('This field cannot be empty!')
    })
  })

  test('Validating email method (2/5)', () => {
    validator.email({ email: 'abc' }, (error) => {
      expect(error).toBe('This email id is not valid.')
    })
  })

  test('Validating email method (3/5)', () => {
    validator.email({ email: 'abc@' }, (error) => {
      expect(error).toBe('This email id is not valid.')
    })
  })

  test('Validating email method (4/5)', () => {
    validator.email({ email: 'a b c@' }, (error) => {
      expect(error).toBe('This email id is not valid.')
    })
  })

  test('Validating email method (5/5)', () => {
    validator.email({ email: 'abc@def.com' }, (error) => {
      expect(error).toBe('')
    })
  })

  // #################### Testing Phone! ###########################

  test('Validating phone method (1/7)', () => {
    validator.phone({ phone: '' }, (error) => {
      expect(error).toBe('This field cannot be empty!')
    })
  })

  test('Validating phone method (2/7)', () => {
    validator.phone({ phone: 'abc' }, (error) => {
      expect(error).toBe('Enter numbers only!')
    })
  })

  test('Validating phone method (3/7)', () => {
    validator.phone({ phone: '12345' }, (error) => {
      expect(error).toBe('Phone number does not have 10 digits')
    })
  })

  test('Validating phone method (4/7)', () => {
    validator.phone({ phone: '123456789010' }, (error) => {
      expect(error).toBe('Phone number has more than 10 digits')
    })
  })

  test('Validating phone method (5/7)', () => {
    validator.phone({ phone: '12345678', maxLength: 12 }, (error) => {
      expect(error).toBe('Phone number does not have 12 digits')
    })
  })

  test('Validating phone method (6/7)', () => {
    validator.phone({ phone: '12345556556678', maxLength: 12 }, (error) => {
      expect(error).toBe('Phone number has more than 12 digits')
    })
  })

  test('Validating phone method (7/7)', () => {
    validator.phone({ phone: '1234567890' }, (error) => {
      expect(error).toBe('')
    })
  })

  // #################### Testing Password! ###########################

  test('Validating password method (1/10)', () => {
    validator.password({ password: '' }, (error) => {
      expect(error).toBe('This field cannot be empty!')
    })
  })

  test('Validating password method (2/10)', () => {
    validator.password({ password: 'abc' }, (error) => {
      expect(error).toBe('password should have atleast 8 charecters')
    })
  })

  test('Validating password method (3/10)', () => {
    validator.password({ password: 'abcdefghijklmnopqrstuvwxyz' }, (error) => {
      expect(error).toBe('password should not exceed 14 characters')
    })
  })

  test('Validating password method (4/10)', () => {
    validator.password(
      { password: 'abcde', minLength: 10, isComplex: false },
      (error) => {
        expect(error).toBe('password should have atleast 10 charecters')
      }
    )
  })

  test('Validating password method (5/10)', () => {
    validator.password(
      {
        password: 'abcdefghijklmnopqrstuvwxyz',
        maxLength: 9,
        isComplex: false,
      },
      (error) => {
        expect(error).toBe('password should not exceed 9 characters')
      }
    )
  })

  test('Validating password method (6/10)', () => {
    validator.password({ password: 'asdf1234' }, (error) => {
      expect(error).toBe('')
    })
  })

  test('Validating password method (7/10)', () => {
    validator.password({ password: 'asdf1234', isComplex: true }, (error) => {
      expect(error).toBe(
        'Minimum 8 and maximum 14 characters, at least one uppercase letter, one lowercase letter, one number and one special character'
      )
    })
  })

  test('Validating password method (8/10)', () => {
    validator.password({ password: 'Asee1234', isComplex: true }, (error) => {
      expect(error).toBe(
        'Minimum 8 and maximum 14 characters, at least one uppercase letter, one lowercase letter, one number and one special character'
      )
    })
  })

  test('Validating password method (9/10)', () => {
    validator.password({ password: 'Asee@@@@', isComplex: true }, (error) => {
      expect(error).toBe(
        'Minimum 8 and maximum 14 characters, at least one uppercase letter, one lowercase letter, one number and one special character'
      )
    })
  })

  test('Validating password method (10/10)', () => {
    validator.password({ password: 'Asee@1234', isComplex: true }, (error) => {
      expect(error).toBe('')
    })
  })

  // #################### Testing Address ###########################

  test('Validating address method (1/5)', () => {
    validator.address({ address: '' }, (error) => {
      expect(error).toBe('This field cannot be empty!')
    })
  })

  test('Validating address method (2/5)', () => {
    validator.address({ address: ' abc' }, (error) => {
      expect(error).toBe('Should not start with space.')
    })
  })

  test('Validating address method (3/5)', () => {
    validator.address({ address: 'abc@' }, (error) => {
      expect(error).toBe('This field should have atleast 8 charecters.')
    })
  })

  test('Validating address method (4/5)', () => {
    validator.address({ address: 'abcdefghi ' }, (error) => {
      expect(error).toBe('This field should not end with space.')
    })
  })

  test('Validating address method (5/5)', () => {
    validator.address({ address: 'abcdefghi' }, (error) => {
      expect(error).toBe('')
    })
  })
})
