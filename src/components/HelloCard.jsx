import React from "react";
function HelloCard({name}) {
    return (
        <section>
            <div className="izquierdo"> 
                Me llamo {name}


            </div>
            <div className='derecho'> 
                <p>y soy desarrollador web</p>


            </div>
        </section>
    )
}