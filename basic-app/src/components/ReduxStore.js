import {createStore} from 'redux'

const reduxReducer = (state = {counter : 0 }, action) => {
    if(action.type === 'increment')
        return({
            counter : state.counter+1
        });
    return state;
}

const reduxStore = createStore(reduxReducer);

export default reduxStore;
