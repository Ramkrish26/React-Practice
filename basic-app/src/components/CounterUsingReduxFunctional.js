import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

function CounterUsingReduxFunctional() {

    const [incValue, setIncValue] = useState(1);

    const counter = useSelector(state => state.counter)

    const dispatch = useDispatch();

    const incrementCounter = () => {
        dispatch({type : 'increment', count:parseInt(incValue)});
    }

    return (
        <div>
            <h1>Counter {counter}</h1>
            <label>Set increment value : </label>
            <input onChange={(e) => {setIncValue(e.target.value)}}></input><br/>
            <button onClick={incrementCounter}>Increment</button>
        </div>
    )
}

export default CounterUsingReduxFunctional
