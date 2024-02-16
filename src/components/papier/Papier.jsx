import React from 'react';
import './Papier.css'
import imagePap from './../../assets/icon-paper.svg'

const Papier = (props) => {
    return (
        <div className='mainPapier'>

            <div className='papier' onClick={() => props.newGame("papier")}>

                <img src={imagePap} alt="" />

            </div>
            
        </div>
    );
}

export default Papier;
