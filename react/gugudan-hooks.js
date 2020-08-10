import React from 'react';
import ReactDOM from 'react-dom';

const GivenExample = () => {
  const [number, setNumber] = React.useState([Math.ceil(Math.random()*9), Math.ceil(Math.random()*9)]);
  const [value, setValue] = React.useState('');
  const [result, setResult] = React.useState('');
  const onRefInput = React.useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if(number[0] * number[1] === parseInt(value)) {
      setResult('정답!');
      setNumber([Math.ceil(Math.random()*9), Math.ceil(Math.random()*9)]);
      setValue('');
      onRefInput.current.focus();
    } else {
      setResult('오답');
      setValue('');
      onRefInput.current.focus();
    }
  }

  const onChange = (e) => {
    setValue(e.target.value);
  }

  
  return (
    <React.Fragment>
      <div>
        <p>{number[0]}곱하기 {number[1]}는?</p>
        <form onSubmit={onSubmit}>
          <input ref={onRefInput} type='number' value={value} onChange={onChange}/>
          <button type='submit'>입력</button>
        </form>
        <p>{result}</p>
      </div>
    </React.Fragment>
  )
}  
  

ReactDOM.render(
  <GivenExample />,
  document.getElementById('root')
);