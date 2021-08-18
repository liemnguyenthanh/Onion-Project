import { GET_LIST_BUY_FAIL, GET_LIST_BUY_REQUEST, GET_LIST_BUY_SUCCESS } from '../constants/actionTypes';
import * as api from '../api/index.js';
import { showNotification } from '../helper';

export const getListBuy = () => async (dispatch) => {
  try {
    dispatch({ type: GET_LIST_BUY_REQUEST });
    const { data } = await api.listBuy();
    const {success,detail} = data
    if(success){
      dispatch({ type: GET_LIST_BUY_SUCCESS ,payload : detail});
    }
  } catch (error) {
      dispatch({ type: GET_LIST_BUY_FAIL });
      showNotification({type: 'error', message: "Error", title: "Error"})
  }
};
