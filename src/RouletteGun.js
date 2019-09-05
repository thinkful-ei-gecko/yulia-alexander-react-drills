import React from 'react';

export default class RouletteGun extends React.Component {
    state = {
        chamber: null,
        spinningTheChamber: false,
    }

    static defaultProps = {
        bulletInChamber: 8,
    }
    
    
    handleClick = () => {
        
    this.setState({
        spinningTheChamber: true,
    })
    this.timeout = setTimeout(() => {
        let randomNumber = Math.ceil(Math.random() * 8);
        this.setState({
            chamber: randomNumber,
            spinningTheChamber: false,
        })
    }, 2000)
    }


    componentWillUnmount() {
        clearTimeout(this.timeout)
    }
   
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Pull the trigger!</button>
                {this.state.chamber === null ? <p></p> :
                    this.state.spinningTheChamber ? <p>spinning the chamber and pulling the trigger! ...</p>
                 : this.state.chamber===this.props.bulletInChamber ? <p>BANG!!!!</p> : <p>you're safe!</p>
                }
            </div>
        )
    }
}