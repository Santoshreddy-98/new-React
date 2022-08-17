import React from 'react'
class Eventhandling extends React.Component {
    constructor(props) {
        super(props);
        console.log()
    }
    message = "Hello"
    changeMessageHandler = () => {
        // console.log(this.message)
        this.message = "Hello,Santosh"
        // console.log(this.message)
        this.forceUpdate()
    }
    render() {
        return <div>
            <h1>Message Component</h1>
            <h3>Wish Message: {this.message}</h3>
            <button onClick={this.changeMessageHandler}>Change Buddy</button>
        </div>
    }
}
export default Eventhandling