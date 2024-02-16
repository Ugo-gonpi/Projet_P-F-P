import React from 'react';
import './Partie.css'
import choixPap from './../../assets/icon-paper.svg'
import choixSci from './../../assets/icon-scissors.svg'
import choixPier from './../../assets/icon-rock.svg'

const Partie = () => {

    let choixMaison = ["pierre", "feuille", "scisseaux"]

    let house = choixMaison[Math.floor(Math.random() * choixMaison.length)]

    

    return (
        <div className='partie'>

            <div className='yourChoice'>

                <p>YOU PICKED</p>

                <div className='choixJouerPapier'>

                    <img src={choixPap} alt="" />

                </div>

            </div>

            <div className='loseWin'>

                <p>YOU WIN</p>
                
                <button>PLAY AGAIN</button>

            </div>

            <div className='houseChoice'>

                <p>THE HOUSE PICKED</p>

                <div className={`${house == "pierre" ? `choixPierre`: ``} ${house == "feuille" ? `choixPapier`: ``} ${house == "scisseaux" ? `choixScisseaux` : ``}`}>
                    
                    {
                        house == "pierre" ? <img src={choixPier} /> : ""
                    }

                    {
                        house == "feuille" ? <img src={choixPap} /> : ""
                    }

                    {
                        house == "scisseaux" ? <img src={choixSci} /> : ""
                    }
                </div>

            </div>

        </div>
    );
}

export default Partie;
