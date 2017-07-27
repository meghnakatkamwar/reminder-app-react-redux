import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form-v6';
import Reducer_Reminder_List from './Reducer_Reminder_List';
import {ON_CREATE_REMINDER} from '../actions'


const rootReducer = combineReducers({
   reminderList: Reducer_Reminder_List,
  form:formReducer.plugin({
      setNewReminderForm: (state, action) => {
          switch(action.type) {
              case ON_CREATE_REMINDER:
                  return undefined;       // <--- blow away form data
              default:
                  return state;
          }
      }
  })
});

export default rootReducer;
