import React, { Component } from 'react'


class Person extends Component {
  state = { counter: 0 };

  

    constructor(){
    super()


    
    this.state={show:false,num: 1,}
  } //setIntervalle, clearIntervalle

  incrementCounter() {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  componentDidMount() {
    const thisBoundedIncrementer = this.incrementCounter.bind(this);
    setInterval(thisBoundedIncrementer, 1000);
  }


  changePerson(){
  this.setState({show:true, num: this.state.num+1,
    fullName:'Slim-Developer',
    bio:'I put computer technology at the service of biology. My job requires a double skill. I am not a biologist with vague computer skills, nor a computer scientist with basic biology. I am a real specialist in both fields. Thanks to his computer calculations, the billions of data produced by the organization of genes can be used, analyzed and compared by biological researchers.',
  profession:'Developer', counter:0,
  imgSrc:<img src="hacker.jpg" alt=""  />     })}

  // setInterval((()=>(couter: this.state.counter + 1 )), 500);
    render() {
        return (<div>
          <h2>Counter: </h2>
        <h2>{this.state.counter}</h2>
          
            <h1>Username:  {this.state.fullName}</h1><br/>
            <button onClick={()=>this.changePerson()}>Show me the profile</button>
            <h3>Proffession: {this.state.profession}</h3><br/>
            <h4> Biography: {this.state.bio}</h4><br/>
            {this.state.imgSrc}
          </div>
        )
    }
}
export default Person