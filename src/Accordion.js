import React from 'react';

class Accordion extends React.Component {

  constructor(props) {
    super(props)
     this.state = {
       sectionClick: 0,
     }
  }

  static defaultProps = {
    sections: [
      {title: '', content: ''}
    ],
}

handleClick = (i) => {
  this.setState({
    sectionClick: i,
  })
}


  render() {
    console.log(this.props.sections);
    let buttons = this.props.sections.map((item, i) => {
      if (i === this.state.sectionClick) {
        return <li key={i}>
        <button key={i} onClick={() => this.handleClick(i)}>{item.title}</button>
        <p>{item.content}</p>
      </li>
      }
      return <li key={i}>
      <button key={i} onClick={() => this.handleClick(i)}>{item.title}</button>
    </li>
    })
    return (
      <ul>
        {buttons}
      </ul>
    )
  }
}

export default Accordion