import React, {useState} from 'react';
import './App.css';
import ChartElement from "./Components/Chart";

const wrapper1: any = {
    display: 'flex',
}

const name: any = {
    width: '110px'
}

function App() {
    const [newArray, setNewArray] = useState<any[]>()

    const obj = [{name: "Landing Page", time: 0},
        {name: "Configurator", time: 0},
        {name: "Check-out", time: 0},
        {name: "Deal", time: 0}]

    function generateNewValue() {
        const newArray = obj.map((i) => {
            i.time = +(Math.random() * 501).toFixed(1)
            return i
        })
        setNewArray(newArray);
    }

    setTimeout(function () {
        generateNewValue()
    }, 530);

    if (!newArray) return <h2>loading...</h2>
    return (
        <div>
            <h2>SPENT TIME (SECONDS)</h2>
            {newArray.map((item: any) => {

                return <div style={wrapper1} key={item.time}>
                    <div style={name}>{item.name}</div>
                    <ChartElement props={item}/>
                </div>
            })}
            <button onClick={() => generateNewValue()}>Generate new values</button>
        </div>
    );
}

export default App;
