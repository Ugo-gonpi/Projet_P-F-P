import React, {useRef} from 'react';
import './Jeux.css'
import croix from './../../assets/icon-close.svg'
import regles from './../../assets/image-rules.svg'

const Jeux = () => {

    let rules = useRef(null)

    function addClass() {
        rules.current.classList.toggle("apparition")
    }

    return (
        <div className='choixInit'>

            <div className='triangle'>
                
            </div>

            <div className='rules'>

                <div className='mainRegles' ref={rules}>

                    <div className='rulesBox'>

                        <div className='titleRegles'>

                            <p>RULES</p>
         
                            <img src={croix} alt="" onClick={() => addClass()}/>

                        </div>

                        <div className='regles'>

                            <img src={regles} alt=""/>

                        </div>

                    </div>

                </div>

                <button onClick={() => addClass()}>RULES</button>

            </div>

        </div>
    );
}

export default Jeux;
