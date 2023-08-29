import React, { useState } from 'react'
import "../StyleFolder/style.css"

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission or other actions here
    };
    return (
        <>
            <div className="dflex">
                <div className="dLeft" style={{ borderRadius: 30 }}>
                    <div className="logo wow fadeInDown" style={{ visibility: 'visible', animationName: 'fadeInDown' }}><img src="https://hammertradex.com/public/front/assets/img/htx-logo.png" style={{ width: 200 }} alt="Logo" /></div>
                    <div className="loginForm">
                       
                        <h4 style={{ color: 'white', textAlign: 'center' }}>Admin Panel</h4>
                        <form onSubmit={handleSubmit} method="post">
                            <input type="hidden" name="_token" defaultValue="b66aFctTonKhd73PjlzMG7wu4Oj0Wd3BFxkyEZXS" />
                            <div className="field-group wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Enter Email"
                                    id="identity"
                                    className="form-control"
                                    required="username"
                                    value={email}
                                    onChange={handleEmailChange}
                                    style={{ borderRadius: 15, paddingLeft: 15, fontWeight: 'bold' }} />
                            </div>
                            <style dangerouslySetInnerHTML={{ __html: "\n                                  button:focus{\n                                      outline: 0px auto -webkit-focus-ring-color;\n                      }\n                              " }} />
                            <button type="button" style={{ border: 'none', float: 'right', background: 'no-repeat', color: '#fff' }} id="pass" className="hide" onclick="passwordclick()">Show</button>
                            <div style={{ clear: 'both' }} />
                            <div className="field-group wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                <input type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter Password"
                                    required="password"
                                    className="form-control"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    style={{ borderRadius: 15, paddingLeft: 15, fontWeight: 'bold' }} />
                            </div>
                            <div className="loginAction wow flipInX" style={{ visibility: 'visible', animationName: 'flipInX' }}>
                                <input type="submit" name="submit" defaultValue="Sign in" id className="btn-default btn-block" />

                            </div>
                        </form>
                    </div>
                </div>
            </div>

          
        </>
    )
}

export default LoginPage