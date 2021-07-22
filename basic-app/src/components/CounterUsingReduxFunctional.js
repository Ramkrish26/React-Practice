import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function CounterUsingReduxFunctional() {

    const counter = useSelector(state => state.counter)

    const dispatch = useDispatch();

    const incrementCounter = () => {
        dispatch({type : 'increment'});
    }

    return (
        <div>
            <h1>Counter {counter}</h1>
            <button onClick={incrementCounter}>Increment</button>
        </div>
    )
}

export default CounterUsingReduxFunctional
