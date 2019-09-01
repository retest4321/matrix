import React, { Component } from 'react';
import Code from './Code';
import './Matrix.css';
import _ from 'lodash';
import FadeText from './AnimateText';
import messages from '../data/messages.json';

// const Message = () => (
//   <div className="MessageWrapper">
//     <div id="MESSAGE" className="Message">
//       {messages[Math.floor(Math.random() * messages.length)]}
//     </div>
//   </div>
// );

const CODE_LINES_COUNT = 100;

export default class Matrix extends Component {
  constructor(props) {
    super(props);

    this.deleteCode = this.deleteCode.bind(this);
  }

  componentWillMount() {
    this.codes = _.times(CODE_LINES_COUNT).map((_, i) => <Code deleteSelf={() => this.deleteCode(i)} key={i} />)
    // console.log('will mount end');
    // this.setState({ codes });
  }

  deleteCode(i) {
    // console.log('del code');
    // const { codes } = this.state;
    const new_i = new Date().getTime();
    this.codes[i] = <Code key={new_i} deleteSelf={() => this.deleteCode(i)} /> 
    // console.log(new_i);
    // console.log(i);
    // this.setState({
    //   codes: codes.map((code, j) => {
    //     if(j === i){
    //       // console.log('asd');
    //     return <Code i={i} key={i} deleteSelf={() => this.deleteCode(i)} /> 
    //     }
    //     return code
    //   }
    //   )
    // });
    console.log('asd');
    this.forceUpdate();
  }

  render() {
    // const { codes } = this.state;
    console.log('a');
    return (
      <div className="Matrix">
        {this.codes}
      </div>
    );
  }
}