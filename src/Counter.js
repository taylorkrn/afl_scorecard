import './App.css';
// Or import all of React and use React.Component

function Counter({count, decrease, increase}){
    return (
        <div className="App">
            <p style={{verticalAlign: "middle"}}>{count}</p>
            <button onClick={decrease} className="MyButton">-</button>
            <button onClick={increase} className="MyButton">+</button>
        </div>
    );
}

export default Counter;
