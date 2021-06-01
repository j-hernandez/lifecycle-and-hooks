import React from 'react';

class LifecycleComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log('constructor called');
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log(`componentDidMount called`)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount called')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate called')
    }
    
    render() {
        console.log('render called');
        return (
            <div>
            <h1>Hello from LifecycleComponent</h1>
            <button onClick={this._increment}>Increment</button>
            <h2>App Count: {this.state.count}</h2> 
            </div>
        )
    }

    _increment = () => {
        console.log('increment called');
        this.setState({
            // triggers render()
            // triggers componentDidUpdate()
            count: this.state.count +1
        })
    }

}

export default LifecycleComponent