import { combineReducers } from 'redux';
import modal from './modal_reducer';
import billInfo from './billInfo_reducer';


export default combineReducers({
  modal,
  billInfo
});
