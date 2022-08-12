/* eslint no-eval: 0 */
import { useState } from 'react';
import words from 'lodash.words';

import Functions from './components/Functions'
import MathOperation from './components/MathOperation'
import Numbers from './components/Numbers';
import Result from './components/Result'
import './App.css'

const App = () => {
    const [stack, setStack] = useState("");

    const regexGetOnlyNumbers = /[^-^+^*^/]+/g;
    const items = words(stack,regexGetOnlyNumbers);
    const item = items.length ? items[items.length -1] : '0'
    console.log(item, 'item')
    // @TODO revisar como esta funcionando
    // console.log(items, 'itmers')
    // console.log(items[items.length -1], 'quitando menos 1', items)
    const onDelete = (value) => {
        const length = value.length;
        // length > 0 antes estaba
        if(length) {
            const newValue = value.substring(0, length - 1);
            setStack(newValue)
        }
    }

    return (
        <main className='react-calculator'>
            <div className="result">
                <Result value={item}/>
            </div>
            <Numbers onClickNumber={(number) => setStack(`${stack}${number}`)}/>
            <Functions
                onContentClear={() => setStack('')}
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

