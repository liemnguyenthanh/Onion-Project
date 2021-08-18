import { GET_LIST_BUY_FAIL, GET_LIST_BUY_REQUEST, GET_LIST_BUY_SUCCESS } from "../constants/actionTypes";

const initial = {
  listBuy : null,
  success :false ,
  error :false
}
export default ( state = initial, action) => {
  switch (action.type) {
    case GET_LIST_BUY_REQUEST:
      return { ...state , listBuy : [] , success : false , error : false};
    case GET_LIST_BUY_SUCCESS:
      return { ...state , listBuy : action.paload , success : true , error : false};
    case GET_LIST_BUY_FAIL:
      return { ...state , listBuy : [] , success : false , error : true};
    default:
      return state;
  }
};

