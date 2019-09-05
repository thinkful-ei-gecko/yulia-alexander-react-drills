import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    console.log('props in constructor', props)
    super(props) 
    this.state = {
    who: 'world'
    }
  }

  handleButtonClick = newState => {
    console.log('props in handleButtonClick', this.props)
    console.log('state in handleButtonClick', this.state)
    this.setState({who: newState})
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={ () => this.handleButtonClick('world') }>World</button>
        <button onClick={ () => this.handleButtonClick('friend') }>Friend</button>
        <button onClick={ () => this.handleButtonClick('react') }>React</button>
      </div>
    )
  }
}

export default HelloWorld