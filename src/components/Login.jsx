import React from 'react';
import Styles from '@/Styles/login/login.module.scss'

const Login = () => {
    return (
        <>
            <div className={Styles.mainContainer}>
                <div className={Styles.navbar}>
                    <div className={Styles.logoSection}>
                        <p>Logo</p>
                        <div>
                            <h1>Disaster Education</h1>
                            <p>From Awareness to Action</p>
                        </div>
                    </div>
                    <p>English</p>
                </div>
                <div className={Styles.mainSection}>
                    <div className={Styles.leftSection}>
                        <h1>From Awareness <br /> <span>to Action</span></h1>
                        <p>Digital Disaster Education Platform praparing students, teachers, and administrators through interactice modules, virtual drills, and real-time analytics.</p>
                        <div className={Styles.practices}>
                            <div className={Styles.practiceBox1}>
                                <div className={Styles.practiceBox1Content1}>
                                    <h3>Interactive Learning</h3>
                                    <p>Modules & Quizzes</p>
                                </div>
                                <div className={Styles.practiceBox1Content2}>
                                    <h3>Virtual Drills</h3>
                                    <p>Practice Scenarios</p>
                                </div>
                            </div>
                            <div className={Styles.practiceBox2}>
                                <div className={Styles.practiceBox2Content1}>
                                    <h3>Real-time Analytics</h3>
                                    <p>Track Progress</p>
                                </div>
                                <div className={Styles.practiceBox2Content2}>
                                    <h3>SOS Alerts</h3>
                                    <p>Emergency Response</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form>
                        <h1>Welcome Back</h1>
                        <p>Choose your role and sign in to continue</p>
                        <div>
                            <div className={Styles.student}><p>Student</p></div>
                            <div className={Styles.teacher}><p>Teacher/Admin</p></div>
                        </div>
                        <label>Student ID</label>
                        <input type="text" placeholder='Enter your Student ID' />

                        <label>Password</label>
                        <input type="text" placeholder='Enter your Password' />

                        <button>Login</button>

                        <p>Forgot your Password ?</p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;