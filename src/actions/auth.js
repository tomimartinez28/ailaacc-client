import axios from 'axios'
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL
} from '../actions/types'

export const loadUser = () => async dispatch => {
  if (window.localStorage.getItem('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${window.localStorage.getItem('access')}`,
        Accept: 'application/json'
      }
    }
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/users/me/`, config)

      dispatch({
        type: USER_LOADED_SUCCESS,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: USER_LOADED_FAIL
      })
    }
  } else {
    dispatch({
      type: USER_LOADED_FAIL
    })
  }
}

export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ email, password })

  try {
    const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/jwt/create/`, body, config)

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })

    dispatch(loadUser())
  } catch (err) {
    console.log(err)
    dispatch({
      type: LOGIN_FAIL
    })
  }
}
