import {} from 'react-redux';
import defaultList from './defaultState';
import * as Actions from './actions';

const reducer = ( state = defaultList, action ) => {
    
    switch(action.type){

        case Actions.INSERT1: {
            return state.concat(action.task)
        }

        default: {
            return state;
        }
    
    }
    
}

export default reducer;