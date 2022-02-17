import { Dispatch, SetStateAction } from 'react'

//helper functions for generating error messages for diffrent form inputs.

const validator = {
  // #################### Validating Name! ###########################

  // @desc    handles name input event
  // @params  event object, error state setter
  // @returns nothing
  name(options: any, setError: Dispatch<SetStateAction<string>>) {
    let minLength = 4
    if (options.minLength != null) {
      minLength = options.minLength
    }
    if (options.name.length === 0) {
      setError('This field cannot be empty!')
    } else if (options.name.charAt(0) === ' ') {
      setError('Should not start with space.')
    } else if (options.name.includes('  ')) {
      setError('Should not contain consecutive spaces.')
    } else if (/\d/.test(options.name)) {
      setError('Should not contain numbers.')
    } else if (!options.name.match(/^[a-zA-Z ]+$/)) {
      setError('Invalid charecter!')
    } else if (options.name.length < minLength) {
      setError(`This field should have atleast ${minLength} charecters.`)
    } else if (options.name.slice(-1) === ' ') {
      setError('Should not end with space.')
    } else {
      setError('')
    }
  },

  // #################### Validating Email! ###########################

  // @desc    handles email input event
  // @params  event object, error state setter
  // @returns nothing
  email(options: any, setError: Dispatch<SetStateAction<string>>) {
    if (options.email === ' ') {
      setError('This field cannot be empty!')
    } else if (
      !options.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      setError('This email id is not valid.')
    } else {
      setError('')
    }
  },

  //######################### Validating phone number! ###########################

  phone(options: any, setError: Dispatch<SetStateAction<string>>) {
    let maxLength = 10
    if (options.maxLength != null) {
      maxLength = options.maxLength
    }

    if (options.phone === '') {
      setError('This field cannot be empty!')
    } else if (!options.phone.match(/^[0-9][-\s\./0-9]*$/g)) {
      setError('Enter numbers only!')
    } else if (options.phone.length < maxLength) {
      setError(`Phone number does not have ${maxLength} digits`)
    } else if (options.phone.length > maxLength) {
      setError(`Phone number has more than ${maxLength} digits`)
    } else {
      setError('')
    }
  },

  //######################### Validating Password! ###########################

  // @desc    handles password input event
  // @params  event object, error setter
  // @returns nothing
  password(options: any, setError: Dispatch<SetStateAction<string>>) {
    let minLength = 8
    let maxLength = 14
    let isComplex = false
    if (options.minLength != null && isComplex === false) {
      minLength = options.minLength
    }

    if (options.maxLength != null && isComplex === false) {
      maxLength = options.maxLength
    }

    if (isComplex != null) {
      isComplex = options.isComplex
    }

    if (
      isComplex === true &&
      !options.password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/
      )
    ) {
      setError(
        `Minimum ${minLength} and maximum ${maxLength} characters, at least one uppercase letter, one lowercase letter, one number and one special character`
      )
    } else if (options.password === '') {
      setError('This field cannot be empty!')
    } else if (options.password.length < minLength) {
      setError(`password should have atleast ${minLength} charecters`)
    } else if (options.password.length > maxLength) {
      setError(`password should not exceed ${maxLength} characters`)
    } else {
      setError('')
    }
  },

  // #################### Validating Address or similar stuff! ###########################

  // @desc    handles address input event
  // @params  event object, error state setter
  // @returns no return value
  address(options: any, setError: Dispatch<SetStateAction<string>>) {
    let minLength = 4
    if (options.minLength != null) {
      minLength = options.minLength
    }

    if (options.address === '') {
      setError('This field cannot be empty!')
    } else if (options.address.charAt(0) === ' ') {
      setError('should not start with space.')
    } else if (options.address.length < minLength) {
      setError(`This field should have atleast ${minLength} charecters.`)
    } else if (options.address.slice(-1) === ' ') {
      setError('This field should not end with space.')
    } else {
      setError('')
    }
  },

  //######################### Validating Postal Code! ###########################

  // @desc    handles postal code(or any 6 digit number) input change event
  // @params  event object, error state setter
  // @returns nothing
  postalCode(options: any, setError: Dispatch<SetStateAction<string>>) {
    if (options.postalCode === '') {
      setError('This field cannot be empty!')
    } else if (
      !options.postalCode.match(/^[0-9]*$/g) &&
      options.postalCode !== ''
    ) {
      setError('Enter numbers only!')
    } else if (options.postalCode.length !== 6) {
      setError('Postal Code should have 6 digits')
    } else {
      setError('')
    }
  },

  //######################### Validating Prices! ###########################

  // @desc    handles Price (or similar values) input change event
  // @params  event object, error state setter
  // @returns nothing
  price(options: any, setError: Dispatch<SetStateAction<string>>) {
    if (options.price === '') {
      setError('This field cannot be empty!')
    } else if (!options.price.match(/^\d+(,\d{1,2})?$/)) {
      setError('Enter a valid number!')
    } else if (Number(options.price) < 0) {
      setError('Negative numbers are not allowed')
    } else {
      setError('')
    }
  },

  //######################### Validating Percentages! ###########################

  // @desc    handles Percentages (0-100 without percent symbol) input change event
  // @params  percentage, error state setter
  // @returns nothing
  percentage(options: any, setError: Dispatch<SetStateAction<string>>) {
    if (options.percentage === '') {
      setError('This field cannot be empty!')
    } else if (
      !options.percentage.match(
        /(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/g
      )
    ) {
      setError('Enter a valid percentage!')
    } else if (Number(options.percentage) < 0) {
      setError('Negative numbers are not allowed')
    } else {
      setError('')
    }
  },
}

export default validator
