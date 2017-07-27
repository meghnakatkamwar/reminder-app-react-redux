import React from 'react';
import {ON_CREATE_REMINDER,FETCH_REMINDER_LIST} from '../actions';

export default function(state=[],action){
    console.log('print action',action)
    switch (action.type){
        case FETCH_REMINDER_LIST:
            return action.payload;
            
        case ON_CREATE_REMINDER:
            return action.payload;
            
        default:
            return state;
    }
}
