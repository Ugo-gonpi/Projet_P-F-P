import React from 'react';
import './Pierre.css'
import imagePier from './../../assets/icon-rock.svg'

const Pierre = (props) => {

    return (
        <div className='mainPierre'>

            <div className='pierre' onClick={() => props.newGame("pierre")}>

                <img src={imagePier} alt="" />

            </div>
            
        </div>
    );
}

export default Pierre;
