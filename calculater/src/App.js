import { useState, usetate } from 'react';

function App() {

const [calculate,setcal]=useState("");
const [result,setres]=useState("");

const ops=['/','*','+','-','.'];

const updatecal = element=>{
  if(ops.includes(element)&&calculate===''||
    ops.includes(element)&&ops.includes(calculate.slice(-1))){
    return;
  }
  setcal(calculate+element);
  if(!ops.includes(element)){
    setres(eval(calculate + element).toString())
  }
}



  const mydigits = () => {
    const number = [];
    for (let i = 1; i < 10; i++) {
      number.push(<button onClick={()=> updatecal(i.toString())} key={i}>{i}</button>)

    }
    return number;
  }
  const calc=() =>{
    setcal(eval(calculate.toString()));
  }
  const dele =()=>{
if(calculate==''){
  return;
}
const element=calculate.slice(0,-1);
setcal(element);
  }


  return (
    <div className="App">

      <div className="calculater">
        <div className="disply">
          {result ? <span>({result})</span>: ''}
          {calculate || "0"}

        </div>

        <div className="operator">
          <button onClick={()=> updatecal('/')}>/</button>
          <button onClick={()=> updatecal('*')}>*</button>
          <button onClick={()=> updatecal('+')}>+</button>
          <button onClick={()=> updatecal('-')}>-</button>
          <button onClick={dele}>Del</button>
        </div>
        
        <div className="Digits">
        {mydigits()}
          <button onClick={()=> updatecal('0')}>0</button>
          <button onClick={()=> updatecal('.')}>.</button>
          <button onClick={calc}>=</button>
        </div>

      </div>
    </div>//app
  );
}

export default App;
