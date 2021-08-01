import React from 'react'
import {Link} from 'react-router-dom'
import "./error.scss"

function Error() {
    return (       
        <section>           
           <h1 className='hotels2'>Error...This page is not exist!</h1>
           <h2><Link to="/">Back to Homepage</Link></h2>          
        </section>
       
        
    )
}

export default Error