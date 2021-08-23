import { GET_LIST_BUY_FAIL, GET_LIST_BUY_REQUEST, GET_LIST_BUY_SUCCESS, OPTION_BUY_FAIL, OPTION_BUY_REQUEST, OPTION_BUY_SUCCESS } from '../constants/actionTypes';
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


export const createBuy = (item) => async (dispatch) => {
  try {
    dispatch({ type: OPTION_BUY_REQUEST });
    const { data } = await api.createBuy(item);
    const {success,detail} = data
    if(success){
      dispatch({ type: OPTION_BUY_SUCCESS ,payload : detail});
      dispatch(getListBuy())
      showNotification({type: 'success', message: "Tạo thành công!", title: "Success"})
    }
  } catch (error) {
      dispatch({ type: OPTION_BUY_FAIL });
      showNotification({type: 'error', message: error.message, title: "Error"})
  }
};

export const editBuy = (id,item) => async (dispatch) => {
  try {
    dispatch({ type: OPTION_BUY_REQUEST });
    const { data } = await api.editBuy(id ,item);
    const {success,detail} = data
    if(success){
      dispatch({ type: OPTION_BUY_SUCCESS ,payload : detail});
      dispatch(getListBuy())
      showNotification({type: 'success', message: "Cập nhật thành công!", title: "Success"})
    }
  } catch (error) {
      dispatch({ type: OPTION_BUY_FAIL });
      showNotification({type: 'error', message: error.message, title: "Error"})
  }
};


export const deleteBuy = (id) => async (dispatch) => {
  try {
    dispatch({ type: OPTION_BUY_REQUEST });
    const { data } = await api.deleteBuy(id);
    const {success,detail} = data
    if(success){
      dispatch({ type: OPTION_BUY_SUCCESS ,payload : detail});
      dispatch(getListBuy())
      showNotification({type: 'success', message: "Xoá thành công!", title: "Success"})
    }
  } catch (error) {
      dispatch({ type: OPTION_BUY_FAIL });
      showNotification({type: 'error', message: error.message, title: "Error"})
  }
};
