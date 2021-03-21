import React from 'react'
import database from '../../../database'
import Headers from "../Headers"
import Body from "../Body"

function Accordion() {
    return (
            <div id="accordion">
                {database && database.map((items, index) => (
                     <div class="card">
                         <Headers id={index}/>
                         <Body id={index}/>
                    </div>
                ))}
            </div>
    )
}

export default Accordion
