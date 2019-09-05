import React from 'react'

class Bomb extends React.Component {
    state = {
        count: 0,
    }
    componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
          console.log('setInterval')
          this.setState({
            count: this.state.count + 1
          })
        }, 1000)
      }
      componentWillUnmount() {
        clearInterval(interval)
      }
    render() {
        return (
            <div>
                {this.state.count>=8 ? <p>BOOM!!!!</p> : this.state.count%2===0 ? <p>tick</p> : <p>tock</p>}
            </div>
        )
    }
}

export default Bomb;