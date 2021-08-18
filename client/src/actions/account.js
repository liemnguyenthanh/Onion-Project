import {  LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from '../constants/actionTypes';
import * as api from '../api/index.js';
import { showNotification } from '../helper';

export const loginAccount = (user) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await api.login(user);
    const {success , message  ,detail} = data
    if(success){
      dispatch({ type: LOGIN_SUCCESS , payload : message ,payload : detail});
      localStorage.setItem('user', detail)
      showNotification({type: 'success', message: message, title: "Login"})
      window.location.reload();

    }
  } catch (error) {
      dispatch({ type: LOGIN_FAIL });
      showNotification({type: 'error', message: "Login Failed", title: "Error"})
  }
};
