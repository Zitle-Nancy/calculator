import Button from './components/Button';
import Functions from './components/Functions'
import MathOperation from './components/MathOperation'
import Numbers from './components/Numbers';
import Result from './components/Result'
import './App.css'

const numbers = () => {
    console.log('test')
}

const App = () => {
    return (
    <main className='react-calculator'>
        <div className="result">
            <Result value="0"/>
        </div>
        <Numbers onClickNumber={(number) => console.log('number', number)}/>
        <Functions
            onContentClear={(operation) => console.log('clear', operation)}
            onDelete={(operation => console.log('delete', operation))}
        />
        <MathOperation
            onClickOperation={(operation) => console.log('operation', operation)}
            onClickEqual={(equal) => console.log('equal', equal)}
        />        
    </main>)
}

export default App

