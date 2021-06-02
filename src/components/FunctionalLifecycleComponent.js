import React, { useState, useEffect } from 'react';

export default (props) => {
    console.log('render called');
    const [count, setCount] = useState(0);


    const _increment = () => setCount(count + 1);

    //componentDidUpdate - Functional style
    useEffect(() => {
        console.log('componentDidUpdate called');
    })

    // Watch a variable and have access to it
    useEffect(() => {
        console.log(`count is now ${count}`)
    }, [count])

    //componentDidMount - Functional style
    useEffect(() => {
        console.log('This should only run once');
    }, [])


    return (
        <>
            <h1>Hello from the Functional Lifecycle Component </h1>
            <button onClick={_increment}>Increment</button>
            <h2>App Count: {count}</h2>
        </>
    );

}