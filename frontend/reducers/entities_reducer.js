import { combineReducers } from "redux";
import users from "./users_reducer";
import friends from "./friends_reducer"
import bills from "./bills_reducer"

const entitiesReducer = combineReducers({
  users,
  friends,
  bills
});

export default entitiesReducer;


