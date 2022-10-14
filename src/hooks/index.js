import React, { useState } from 'react';

export const usehandleInputRange = (  )=>{
    const [state, setState] = useState( { length: '30' } );

    const handleInputRange = ( event )=>{
        const target = event.target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    const name = target.name;

    setState({ [name]: value });
    }

    return{
        handleInputRange,
        state
    }
}
export const usehandleInputChangeLetters = ( ) => {
    const [stateDos, setStateDos] = useState( { letters: false } );

    const handleInputChangeLetters = ( event )=>{
        const target = event.target;
        const value = (target.type === 'checkbox') ? target.checked : target.value;
        const name = target.name;
        setStateDos({ [name]: value });
    }

    return{
        handleInputChangeLetters,
        stateDos
    }
}
export const usehandleInputChangeLength = ( )=>{
    const [stateTres, setStateTres] = useState( { numbers: false } );
    const handleInputChangeLength = ( event )=>{
        const target = event.target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    const name = target.name;

    setStateTres({ [name]: value });
    }

    return{
        handleInputChangeLength,
        stateTres
    }
}
export const usehandleInputChangeSymbols = ( )=>{
    const [stateCuatro, setStateCuatro] = useState( { symbols: false } );
    const handleInputChangeSymbols = ( event )=>{
        const target = event.target;
        const value = (target.type === 'checkbox') ? target.checked : target.value;
        const name = target.name;
    
        setStateCuatro({ [name]: value });
    }
    return{
        handleInputChangeSymbols,
        stateCuatro
    }
}
export const usehandleButtonCheck = ()=>{
    
}
