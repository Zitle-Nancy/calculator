/* eslint no-eval: 0 */
import { useState } from 'react';
import Functions from './components/Functions'
import MathOperation from './components/MathOperation'
import Numbers from './components/Numbers';
import Result from './components/Result'
import './App.css'

const App = () => {
    const [stack, setStack] = useState("");

    const onDelete = (value) => {
        const length = value.length;
        if(length > 0) {
            const newValue = value.substring(0, length - 1);
            setStack(newValue)
        }
    }

    return (
        <main className='react-calculator'>
            <div className="result">
                <Result value={stack}/>
            </div>
            <Numbers onClickNumber={(number) => setStack(`${stack}${number}`)}/>
            <Functions
                onContentClear={(operation) => console.log(operation)}
                onDelete={( ) => onDelete(stack)}
            />
            <MathOperation
                onClickOperation={(operation) => setStack(`${stack}${operation}`)}
                onClickEqual={(equal) => setStack(eval(stack) + '')}
            />        
        </main>
    )
}

export default App

