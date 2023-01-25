import React from 'react';
import Answer from './Answer';

export default function Question (){ 
    return(
        <div className='question-wrapper'>
            <p className='question'>Question 1.</p>
            <p className='question'>
            In the game Pok&eacute;mon Conquest, which warlord is able to bond with Zekrom and a shiny Rayquazza?
            </p>
            <div className='answers'>
                <Answer answer={'Nobunaga'}/>
                <Answer answer={'The Player'}/>
                <Answer answer={'Oichi'}/>
                <Answer answer={'Hamedoshi'}/>
            </div>
        </div>
    )
}