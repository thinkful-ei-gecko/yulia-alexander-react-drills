import React from 'react';

class Accordion extends React.Component {

  constructor(props) {
    super(props)
     this.state = {
       collapsed: true,
     }
  }

  static defaultProps = {
    sections: [
      {title: ''},
      {content: ''}
    ],
}

handleClick = () => {
  this.setState({
    collapsed: false,
  })
}


  render() {
    console.log(this.props.children.props)
    return (
      <ul>
        {this.props.children.props.map((item, i) => {
        <li key={i}>
          <button>{item.title}</button>
          {!this.state.collapsed ? <p style={display:none}></p> : <p style={display:block}>{item.content}</p>}
        </li>
        })}
      </ul>
    )
  }
}

export default Accordion