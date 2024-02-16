import React from 'react';
import './Header.css'
import title from './../../assets/logo.svg'

const Header = () => {

    return (
        <div className='head'>

            <div className='presentation'>
            
                <div className='title'>

                    <img src={title} alt="" />

                </div>

                <div className='score'>

                    <div className='square'>

                        <p className='scoreTitle'>SCORE</p>

                        <p>0</p>
                        
                    </div>

                </div>

            </div>
            
        </div>
    );
}

export default Header;
