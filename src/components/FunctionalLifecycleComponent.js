import React, { useState } from 'react';

export default (props) => {
    console.log('render called');
    const [setCount, count] = useState(0);
    const [anotherCount, setAnotherCount] = useState(100);


    const _increment = () => setCount(count + 1);

    return (
        <>
            <h1>Hello from the Functional Lifecycle Component </h1>
            <button onClick={_increment}>Increment</button>
            <h2>App Count: {count}</h2>
            <h2>Another Count: {anotherCount}</h2>
        </>
    );

}