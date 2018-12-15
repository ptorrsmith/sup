
import request from 'superagent'
import { saveUserToken, authFetch } from '../utils/auth'

function requestLogin() {
  return {
    type: 'LOGIN_REQUEST',
    isFetching: true,
    isAuthenticated: false
  }
}

export function receiveLogin(user, providerId) {
  return {
    type: 'LOGIN_SUCCESS',
    isFetching: false,
    isAuthenticated: true,
    providerId,
    user
  }
}

export function loginError(message) {
  return {
    type: 'LOGIN_FAILURE',
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function loginUser(creds) {
  return dispatch => {
    dispatch(requestLogin(creds))
    return request('post', '/api/v1/auth/login')
      .send(creds)
      // return authFetch('/api/v1/auth/login', {
      //   method: "post",
      //   body: JSON.stringify(creds),
      //   headers: {
      //     "Content-Type": 'application/json'
      //   }
      // })
      .then((response) => {
        // console.log("response from login is ", response.json())
        // const userInfo = saveUserToken(response.json().token)
        const userInfo = saveUserToken(response.body.token)

        let providerId = response.body.providerId

        console.log("Provider id is ", providerId)

        dispatch(receiveLogin(userInfo, providerId))
        if (providerId > 0) {
          document.location = "/#/admin/providers/" + providerId
        }
        else if (providerId < 0) {
          document.location = "/#/admin"
        }
        else {
          document.location = "/#/"
        }
      })
      .catch(err => {
        console.log("err is ", err)
        dispatch(loginError(err.response.body.message))
      })
  }
}
