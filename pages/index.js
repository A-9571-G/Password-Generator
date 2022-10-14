import React, { useState } from 'react';
import { Layout } from '../src/Layout/layout'
import { generatedPass } from '../src/plugin/GeneratedPass'
import { 
    usehandleInputRange,
    usehandleInputChangeLetters,
    usehandleInputChangeLength,
    usehandleInputChangeSymbols
} from '../src/hooks/index'

const Home = ()=>{
    const { state, handleInputRange } = usehandleInputRange();
    const { stateDos, handleInputChangeLetters } = usehandleInputChangeLetters();
    const { stateTres, handleInputChangeLength } = usehandleInputChangeLength();
    const { stateCuatro, handleInputChangeSymbols } = usehandleInputChangeSymbols();
    const [ check , setCheck ] = useState();

    const botonsitos = [
        stateDos,
        stateTres,
        stateCuatro
    ]

      const checking = ()=>{
        setCheck(generatedPass( state.length, botonsitos ));
      }
    return(
        <> 
           <Layout>
                <h1></h1>
                    <from >
                        <p id='password' className='password'>{ check }</p>
                        <div className="option">
                            <input type="range" name="length" id="" min="10" max="60" onChange={handleInputRange} />
                            <p>Define el total de caracteres de tu contraseña</p>
                        </div>
                        <div className="option">
                            <input type="checkbox" checked={ stateDos.letters } onChange={handleInputChangeLetters} name="letters" id="letters" />
                            <p>Incluir letras</p>
                        </div>
                        <div className="option">
                            <input type="checkbox" checked={ stateTres.numbers } onChange={handleInputChangeLength} name="numbers" id="" />
                            <p>Incluir numeros</p>
                        </div>
                        <div className="option">
                            <input type="checkbox" checked={ stateCuatro.symbols } onChange={handleInputChangeSymbols} name="symbols" id="" />
                            <p>Incluir simbolos</p>
                        </div>
                            <div className="option">
                            <button onClick={checking} id="generate-button">Genera tu fuerte contraseña</button>
                        </div>
                    </from>
           </Layout>
        </>
    )
};

export default Home;
