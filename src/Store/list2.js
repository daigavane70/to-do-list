import {INSERT2} from './actions';
import defList from './defaultState';

const reducer = ( state = defList, action ) => {
    
    switch( action.type ){

        case INSERT2: {
            return state.concat(action.task)
        }
        
        default: {
            return state
        }
  
    }

}

export default reducer;