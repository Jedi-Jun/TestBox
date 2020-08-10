import React from 'react';
import ReactDOM from 'react-dom';
// var e = React.createElement;

class GivenExample extends React.Component {
  constructor(props) {
    super(props);
    var ran1 = Math.ceil(Math.random()*9);
    var ran2 = Math.ceil(Math.random()*9);
    this.state = {
      number: [ran1, ran2],
      value: '',
      result: null,
    };
  }

  onSubmit = function(e) {
    e.preventDefault();
    var num1 = this.state.number[0];
    var num2 = this.state.number[1];
      if(num1 * num2 === Number(e.target.text_box.value)) {
        // prevState in setState
        this.setState((prevState) => {
          return {
            number: [Math.ceil(Math.random()*9), Math.ceil(Math.random()*9)],
            result: '정답: ' + prevState.value,
            value: '',
          }
        });
        // this.setState({
        //   number: [Math.ceil(Math.random()*9), Math.ceil(Math.random()*9)],
        //   result: '정답: ' + this.state.value,
        //   value: '',
        // });
        this.input.focus();
      } else {
        this.setState({
          result: '오답',
          value: '',
        });
        this.input.focus();
      }
  }.bind(this);

  onChange = function(e) {
    this.setState({
      value: e.target.value,
    })
    }.bind(this);
  
    onRefInput = (c) => {this.input = c};  

    render() {
    var num1 = this.state.number[0];
    var num2 = this.state.number[1];
    return(
      <React.Fragment>
        <div>
        <p>{num1}곱하기 {num2}은?</p>
        <form onSubmit={this.onSubmit}>
          <input ref={this.onRefInput} type='text' name="text_box" value={this.state.value} onChange={this.onChange} />
          <input type='submit'value="제출!" />
        </form>
        <p>{this.state.result}</p>
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <GivenExample />,
  document.getElementById('root')
);