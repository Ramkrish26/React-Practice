import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialCounterState = {counter : 0};
const counterReducer = createSlice(
    {
        name : 'counter',
        initialState:initialCounterState,
        reducers : {            
            increaseBy(state, action){
                state.counter = state.counter + action.payload;
            }
        }
    }
)

const counterStore = configureStore({
    reducer : counterReducer.reducer
});

export const counterActions =  counterReducer.actions;

export default counterStore;
