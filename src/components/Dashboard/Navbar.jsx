import React from 'react';
import Styles from '@/Styles/dashboard/navbar.module.scss'

const Navbar=()=>{
    return(
        <>
        <div className={Styles.mainContainer}>
            <div className={Styles.navbar}>
                <h1>DisasterEdu</h1>
                <p>From Awareness to Action</p>

                <p>English</p>
                
            </div>
        </div>
        </>
    )
}

export default Navbar;