import React from 'react';
// import {useState} from 'react';
import Styles from '@/Styles/dashboard/dashboard.module.scss'

const Dashboard=()=>{
    return(
        <>
        <div className={Styles.mainContainer}>
            <div className={Styles.progressSection}>
                <div className={Styles.progress}>
                    <h1>Welcome Back, Soumya!</h1>
                    <p>Ready to enhance your disaster preparedness skills ?</p>
                    <p className={Styles.progressPara}>Overall Progress</p>
                    <div>
                        <div className={Styles.progressBar}></div>
                    </div>
                    <div className={Styles.progressDetails}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height={20} width={20}><path d="M320 205.3L320 514.6L320.5 514.4C375.1 491.7 433.7 480 492.8 480L512 480L512 160L492.8 160C450.6 160 408.7 168.4 369.7 184.6C352.9 191.6 336.3 198.5 320 205.3zM294.9 125.5L320 136L345.1 125.5C391.9 106 442.1 96 492.8 96L528 96C554.5 96 576 117.5 576 144L576 496C576 522.5 554.5 544 528 544L492.8 544C442.1 544 391.9 554 345.1 573.5L332.3 578.8C324.4 582.1 315.6 582.1 307.7 578.8L294.9 573.5C248.1 554 197.9 544 147.2 544L112 544C85.5 544 64 522.5 64 496L64 144C64 117.5 85.5 96 112 96L147.2 96C197.9 96 248.1 106 294.9 125.5z"/></svg>
                        <p>35 of 60 lessons completed</p>
                    </div>
                </div>
                <div className={Styles.score}>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height={20} width={20}><path d="M320 205.3L320 514.6L320.5 514.4C375.1 491.7 433.7 480 492.8 480L512 480L512 160L492.8 160C450.6 160 408.7 168.4 369.7 184.6C352.9 191.6 336.3 198.5 320 205.3zM294.9 125.5L320 136L345.1 125.5C391.9 106 442.1 96 492.8 96L528 96C554.5 96 576 117.5 576 144L576 496C576 522.5 554.5 544 528 544L492.8 544C442.1 544 391.9 554 345.1 573.5L332.3 578.8C324.4 582.1 315.6 582.1 307.7 578.8L294.9 573.5C248.1 554 197.9 544 147.2 544L112 544C85.5 544 64 522.5 64 496L64 144C64 117.5 85.5 96 112 96L147.2 96C197.9 96 248.1 106 294.9 125.5z"/></svg>
                    <p>35 of 60 lessons completed</p> */}
                </div>
            </div>

            <h1>Learning Modules</h1>
            <div className={Styles.modulesSection1}>
                <div className={Styles.earthquakeModule}>
                    <div className={Styles.moduleHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height={25} width={25}><path fill="#e82717" d="M256.5 37.6C265.8 29.8 279.5 30.1 288.4 38.5C300.7 50.1 311.7 62.9 322.3 75.9C335.8 92.4 352 114.2 367.6 140.1C372.8 133.3 377.6 127.3 381.8 122.2C382.9 120.9 384 119.5 385.1 118.1C393 108.3 402.8 96 415.9 96C429.3 96 438.7 107.9 446.7 118.1C448 119.8 449.3 121.4 450.6 122.9C460.9 135.3 474.6 153.2 488.3 175.3C515.5 219.2 543.9 281.7 543.9 351.9C543.9 475.6 443.6 575.9 319.9 575.9C196.2 575.9 96 475.7 96 352C96 260.9 137.1 182 176.5 127C196.4 99.3 216.2 77.1 231.1 61.9C239.3 53.5 247.6 45.2 256.6 37.7zM321.7 480C347 480 369.4 473 390.5 459C432.6 429.6 443.9 370.8 418.6 324.6C414.1 315.6 402.6 315 396.1 322.6L370.9 351.9C364.3 359.5 352.4 359.3 346.2 351.4C328.9 329.3 297.1 289 280.9 268.4C275.5 261.5 265.7 260.4 259.4 266.5C241.1 284.3 207.9 323.3 207.9 370.8C207.9 439.4 258.5 480 321.6 480z"/></svg>
                        <div>
                            <p>3</p>
                        </div>
                    </div>
                    <h1>Earthquake Safety</h1>
                    <p>Learn drop, cover , and hold techniques</p>

                    <p className={Styles.progress}>Progress</p>
                    <div>
                        <div className={Styles.progressBar}></div>
                    </div>
                    <p>67%</p>
                </div>
                <div className={Styles.fireLabSafetyModule}>
                    <div className={Styles.moduleHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height={25} width={25}><path fill="#e82717" d="M256.5 37.6C265.8 29.8 279.5 30.1 288.4 38.5C300.7 50.1 311.7 62.9 322.3 75.9C335.8 92.4 352 114.2 367.6 140.1C372.8 133.3 377.6 127.3 381.8 122.2C382.9 120.9 384 119.5 385.1 118.1C393 108.3 402.8 96 415.9 96C429.3 96 438.7 107.9 446.7 118.1C448 119.8 449.3 121.4 450.6 122.9C460.9 135.3 474.6 153.2 488.3 175.3C515.5 219.2 543.9 281.7 543.9 351.9C543.9 475.6 443.6 575.9 319.9 575.9C196.2 575.9 96 475.7 96 352C96 260.9 137.1 182 176.5 127C196.4 99.3 216.2 77.1 231.1 61.9C239.3 53.5 247.6 45.2 256.6 37.7zM321.7 480C347 480 369.4 473 390.5 459C432.6 429.6 443.9 370.8 418.6 324.6C414.1 315.6 402.6 315 396.1 322.6L370.9 351.9C364.3 359.5 352.4 359.3 346.2 351.4C328.9 329.3 297.1 289 280.9 268.4C275.5 261.5 265.7 260.4 259.4 266.5C241.1 284.3 207.9 323.3 207.9 370.8C207.9 439.4 258.5 480 321.6 480z"/></svg>
                        <div>
                            <p>2</p>
                        </div>
                    </div>
                    <h1>Fire and Lab Safety</h1>
                    <p>Fire evacution and lab safety protocols</p>

                    <p className={Styles.progress}>Progress</p>
                    <div>
                        <div className={Styles.progressBar}></div>
                    </div>
                    <p>67%</p>
                </div>
                <div className={Styles.floodPreparednessModule}>
                    <div className={Styles.moduleHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height={25} width={25}><path fill="#e82717" d="M256.5 37.6C265.8 29.8 279.5 30.1 288.4 38.5C300.7 50.1 311.7 62.9 322.3 75.9C335.8 92.4 352 114.2 367.6 140.1C372.8 133.3 377.6 127.3 381.8 122.2C382.9 120.9 384 119.5 385.1 118.1C393 108.3 402.8 96 415.9 96C429.3 96 438.7 107.9 446.7 118.1C448 119.8 449.3 121.4 450.6 122.9C460.9 135.3 474.6 153.2 488.3 175.3C515.5 219.2 543.9 281.7 543.9 351.9C543.9 475.6 443.6 575.9 319.9 575.9C196.2 575.9 96 475.7 96 352C96 260.9 137.1 182 176.5 127C196.4 99.3 216.2 77.1 231.1 61.9C239.3 53.5 247.6 45.2 256.6 37.7zM321.7 480C347 480 369.4 473 390.5 459C432.6 429.6 443.9 370.8 418.6 324.6C414.1 315.6 402.6 315 396.1 322.6L370.9 351.9C364.3 359.5 352.4 359.3 346.2 351.4C328.9 329.3 297.1 289 280.9 268.4C275.5 261.5 265.7 260.4 259.4 266.5C241.1 284.3 207.9 323.3 207.9 370.8C207.9 439.4 258.5 480 321.6 480z"/></svg>
                        <div>
                            <p>1</p>
                        </div>
                    </div>
                    <h1>Flood Preparedness</h1>
                    <p>Flood Safety and evacution procedures</p>

                    <p className={Styles.progress}>Progress</p>
                    <div>
                        <div className={Styles.progressBar}></div>
                    </div>
                    <p>67%</p>
                </div>

            </div>

            <div className={Styles.modulesSection2}>

            </div>
        </div>
        </>
    )
}

export default Dashboard;