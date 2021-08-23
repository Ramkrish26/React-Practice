import React,{useState} from 'react'
import { counterActions } from './CounterStore';
import { useSelector, useDispatch } from 'react-redux'

function CounterUsingReduxToolkit() {

    const [incValue, setIncValue] = useState(1);

    const count = useSelector((state) => state.counter)

    const dispatch = useDispatch();

    const incrementCounter = () => {
        dispatch(counterActions.increaseBy(parseInt(incValue)));
    }

    return (
        <div>
            <h1>Counter {count}</h1>
            <label>Set increment value : </label>
            <input onChange={(e) => {setIncValue(e.target.value)}}></input><br/>
            <button onClick={incrementCounter}>Increment</button>
        </div>
    )
}

export default CounterUsingReduxToolkit
