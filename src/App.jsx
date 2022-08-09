import Result from './components/Result'
import Button from './components/Button';
import './App.css'
import MathOperation from './components/MathOperation'

const numbers = () => {
    console.log('test')
}

const App = () => {
    return (
    <main className='react-calculator'>
        <div className="result">
            <Result value="0"/>
        </div>
        <div className="numbers">
            <Button text="1" buttonType="test" clickHandler={numbers}/>
        </div>
        <div className="functions">
            <button>
                clear
            </button>
            <button>
                r
            </button>   
        </div>
        <MathOperation
            onClickOperation={(operation) => console.log('operation', operation)}
            onClickEqual={(equal) => console.log('equal', equal)}
        />        
    </main>)
}

export default App

