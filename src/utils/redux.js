export const success = (actionType) => `${actionType}_SUCCESS`
export const failure = (actionType) => `${actionType}_FAIL`

export const createSuccessAction = (type, payload) => ({
  type: success(type),
  payload
})

export const createFailureAction = (type, error) => ({
  type: failure(type),
  error
})

export const status = {
  PRISTINE: 'PRISTINE',
  FETCHING: 'FETCHING',
  LOADED: 'LOADED',
  ERROR: 'ERROR',
  REFRESHING: 'REFRESHING'
}
