import validate from 'validate.js'

export function getColorFromError(error) {
  return !!error ? 'danger' : 'default'
}

export function isEmpty(object) {
  return Object.keys(object).length === 0
}

const constraints = {
  exampleEmail: {
    presence: true,
    email: true,
  },
  examplePassword: {
    presence: true,
    length: {minimum: 12},
  },
  exampleURL: {
    url: true,
  },
}


export function validateForm(formData) {
  let formConstraints = {};
  Object.keys(formData).forEach((key) => {
    formConstraints[key] = constraints[key];
  })
  return validate(formData, formConstraints)
}

