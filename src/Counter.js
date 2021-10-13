import './App.css';
// Or import all of React and use React.Component

function Counter({count, decrease, increase}){
    return (
        <div className="MyGrid">
            <button onClick={increase} className="MyButton" style={{gridRowStart: "1"}}>+</button>
            <p style={{textAlign: "center", gridRowStart: "2"}}>{count}</p>
            <button onClick={decrease} className="MyButton">-</button>
        </div>
    );
}

export default Counter;
