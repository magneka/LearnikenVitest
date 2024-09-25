import React, { useState } from 'react';

const UseStateCounter = () => {
    const [count, setCount] = useState(0);

    const increase = () =>{ 
        console.log("increase counter");
        setCount(count + 1);
    }

    return (
        <>
            <div data-testid="count">{count}</div>

            <button onClick={increase} >Increase</button>
        </>
    );
};

export default UseStateCounter;