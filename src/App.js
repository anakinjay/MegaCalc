import React, { Component } from 'react';
import Button from 'antd/es/button';
import {Row, Col, Icon} from 'antd'
import {add,divide,multiply,subtract} from './math-lib-master/src/index'
import './App.css';

const buttonStyle = {'width':"100%"};
const lcdStyle = {
  'border':'1px solid black',
  'borderRadius':'10px',
  'padding':'10px',
  'fontSize':'25px',
  'width':'200px',
  'height':'50px',
  'overflow':'hidden'
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      operations:[],
      lastNumb:'0',
      display:'0',

    };
  }

  
  addOperation(val, op) {
    console.log(val);
    console.log("op");
    this.setState({...this.state, display:parseFloat(val), lastNumb:'', operations:[...this.state.operations,[val, op] ]});
    console.log(
      this.state
    );
  }

  clearOperations() {
      this.setState({
        operations:[],
        lastNumb:'0',
        display:'0',

      });
  }

  calculateValue() {
    console.log("Calculating Value!");

    let val = 0;
    let lastOp = false;
    this.state.operations.map(operation=>{
 console.log(operation);

      if (!lastOp) {
         lastOp = "+";
       } 


        console.log("LAST: "+lastOp);

        switch (lastOp) {
          case '+':
            val = add(parseFloat(val), parseFloat(operation[0]));
            break;
          case '-':
            console.log("subtracting "+operation[0]+" from "+val);
              val = subtract(parseFloat(val), parseFloat(operation[0]));
            break;
          case '/':
              val = divide(parseFloat(val), parseFloat(operation[0]));
              break;
          case '*':
              val = multiply(parseFloat(val), parseFloat(operation[0]));
              break;
 
        }
      
        lastOp = operation[1];
      

        
      

      
     
    });

    switch (lastOp) {
      case '+':
       val = add(parseFloat(val), parseFloat(this.state.lastNumb));
        break;
      case '-':
          val = subtract(parseFloat(val), parseFloat(this.state.lastNumb));
        break;
      case '/':
          val = divide(parseFloat(val), parseFloat(this.state.lastNumb));
          break;
      case '*':
          val = multiply(parseFloat(val), parseFloat(this.state.lastNumb));
          break;

    }

    this.setState({...this.state, display:parseFloat(val), lastNumb:val, operations:[]});

    }
  
  

  render() {

    return (<div>
     <Row><Col span={8}>
   <Row><Col span={2}></Col><Col span={5}> <h2>MEGA-CALC</h2></Col></Row>
<table><tr><td>
          <table>
            <tr>
              <td colSpan={4}>
              <div style={lcdStyle}>
        {this.state.display}
        </div>
              </td>
            </tr>
            <tr>
              <td><Button style={buttonStyle} onClick={()=>this.setState({...this.state, display:parseFloat(this.state.lastNumb+'7'), lastNumb:this.state.lastNumb+'7'})}  type="primary">7</Button></td>
              <td><Button style={buttonStyle} onClick={()=>this.setState({...this.state, display:parseFloat(this.state.lastNumb+'8'),  lastNumb:this.state.lastNumb+'8'})}   type="primary">8</Button></td>
              <td><Button style={buttonStyle} onClick={()=>this.setState({...this.state, display:parseFloat(this.state.lastNumb+'9'),  lastNumb:this.state.lastNumb+'9'})}   type="primary">9</Button></td>
              <td><Button style={buttonStyle}  onClick={()=>this.addOperation(this.state.lastNumb,"/")}   type="primary">/</Button></td>
              
              </tr>

              <tr>
              <td> <Button style={buttonStyle} onClick={()=>this.setState({...this.state,  display:parseFloat(this.state.lastNumb+'4'), lastNumb:this.state.lastNumb+'4'})}   type="primary">4</Button></td>
              <td><Button style={buttonStyle}  onClick={()=>this.setState({...this.state, display:parseFloat(this.state.lastNumb+'5'),  lastNumb:this.state.lastNumb+'5'})}  type="primary">5</Button></td>
              <td><Button style={buttonStyle}  onClick={()=>this.setState({...this.state,  display:parseFloat(this.state.lastNumb+'6'), lastNumb:this.state.lastNumb+'6'})}  type="primary">6</Button></td>
              <td><Button style={buttonStyle} onClick={()=>this.addOperation(this.state.lastNumb,"+")}  type="primary">+</Button></td>
              
              </tr>


              <tr>
              <td> <Button style={buttonStyle}  onClick={()=>this.setState({...this.state, display:parseFloat(this.state.lastNumb+'1'),  lastNumb:this.state.lastNumb+'1'})}  type="primary">1</Button></td>
              <td><Button style={buttonStyle} onClick={()=>this.setState({...this.state, display:parseFloat(this.state.lastNumb+'2'),  lastNumb:this.state.lastNumb+'2'})}   type="primary">2</Button></td>
              <td><Button style={buttonStyle}  onClick={()=>this.setState({...this.state,  display:parseFloat(this.state.lastNumb+'3'), lastNumb:this.state.lastNumb+'3'})}  type="primary">3</Button></td>
              <td><Button style={buttonStyle} onClick={()=>this.addOperation(this.state.lastNumb,"-")}   type="primary">-</Button></td>
              
              </tr>
              <tr>
              <td colSpan={3}> <Button style={buttonStyle}   onClick={()=>this.setState({...this.state, display:this.state.lastNumb+'0',  lastNumb:this.state.lastNumb+'0'})}   type="primary">0</Button></td>
              <td><Button style={buttonStyle} onClick={()=>this.addOperation(this.state.lastNumb,"*")}  type="primary">*</Button></td>
              
              </tr>
              <tr>
              <td colSpan={2}><Button style={buttonStyle}  onClick={()=>this.clearOperations()}  type="primary">C</Button></td>
              <td colSpan={2}><Button style={buttonStyle} onClick={()=>this.calculateValue()}  type="primary">=</Button></td>
              
              
              </tr>


          </table>
          </td><td>
          <img style={{'width':'100px'}} src='https://vignette.wikia.nocookie.net/megaman/images/3/30/MM11-MegaMan.png/revision/latest/scale-to-width-down/2000?cb=20190127075055'></img>

          </td>
          </tr></table>
          </Col>

          </Row>
      
    </div>
    );
  }
}

export default App;