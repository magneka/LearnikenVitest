import React, { useState } from 'react';

const InputPage = () => {
    const [firstName, setFirstName] = useState("");

    const firstNameToUpper = () => {
        const val = firstName.toUpperCase();
        setFirstName(val)
    }

    return (
        <>  Fornavn: 
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />

            <button onClick={firstNameToUpper} >Set firstname to uppercase</button>

        </>
    );
};

export default InputPage;