import { GET_LIST_BUY_FAIL, GET_LIST_BUY_REQUEST, GET_LIST_BUY_SUCCESS, OPTION_BUY_FAIL, OPTION_BUY_REQUEST, OPTION_BUY_SUCCESS } from "../constants/actionTypes";

const initial = {
  listBuy : [],
  success :false ,
  error :false
}
export default ( state = initial, action) => {
  switch (action.type) {
    case GET_LIST_BUY_REQUEST:
      return { ...state , listBuy : [] , success : false , error : false};
    case GET_LIST_BUY_SUCCESS:
      return { ...state , listBuy : action.payload , success : true , error : false};
    case GET_LIST_BUY_FAIL:
      return { ...state , listBuy : [] , success : false , error : true};
    case OPTION_BUY_REQUEST:
      return {  ...state , 
                success : false , 
                error : false};
    case OPTION_BUY_SUCCESS:
      return {  ...state , 
                success : true , 
                error : false};
    case OPTION_BUY_FAIL:
      return {  ...state , 
                success : false , 
                error : false};
    default:
      return state;
  }
};

