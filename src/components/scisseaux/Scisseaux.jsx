import React from 'react';
import './Scisseaux.css'
import imageSci from './../../assets/icon-scissors.svg'

const Scisseaux = (props) => {
    return (
        <div className='mainScis'>
            <div className='scisseaux' onClick={() => props.newGame("scisseaux")}>

                <img src={imageSci} alt="" />

            </div>
        </div>
    );
}

export default Scisseaux;
