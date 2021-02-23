import * as TutorialActions from '../actions/login.action';
import { LoginDetails } from '../../model/logindetails.model';

export function reducer(state: LoginDetails[] = [], action: TutorialActions.Actions) {
    switch(action.type) {
        case TutorialActions.ADD_LOGIN:
            return [...state, action.payload];
        case TutorialActions.REMOVE_LOGIN:
            console.log('STATE: ', state);
            console.log('ACTION PAYLOAD: ', action.payload);

            for(let i = 0; i < state.length; i++) {
                if(state[i]['username'] == action.payload) {
                    state = [];
                }
            }

            return state;
        default:
            return state;
    }
}
