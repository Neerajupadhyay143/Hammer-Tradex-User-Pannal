import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
// export const baseURL = "https://misty-pelican.cyclic.cloud/api/v1"
import { baseURL } from '../../token';
function RegestrationPage() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [referCode, setReferCode] = useState('');
    const [otpInputs, setOtpInputs] = useState(['', '', '', '']);
    const [showOtpFields, setShowOtpFields] = useState(false);
    const [resendTimer, setResendTimer] = useState(30);
    const [isOtpFieldsShown, setIsOtpFieldsShown] = useState(false);
    const [nameError, setNameError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [isVerifying, setIsVerifying] = useState(false);
    const [isPhoneNumberVerified, setIsPhoneNumberVerified] = useState(false);
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [showEmailField, setShowEmailField] = useState(false);
    const [isGetOtpDisabled, setIsGetOtpDisabled] = useState(true); // Add state for Get OTP button
    const navigate = useNavigate();

    const handleGetOtpClick = async () => {
        if (!name.trim()) {
            setNameError('Please enter your name');
            return;
        }
        if (!phoneNumber.trim()) {
            setPhoneNumberError('Please enter your phone number');
            return;
        }
        if (phoneNumber.length !== 10) {
            setPhoneNumberError("The phone number should be of length 10");
            return;
        }

        setIsOtpFieldsShown(true);
        setShowOtpFields(true);
        setIsVerifying(true);
        startTimer();

        try {
            const queryParams = {
                mode: isPhoneNumberVerified ? 'email' : "phone",
            };
            console.log("otpmode", queryParams.mode)

            const requestBody = {
                phone: "91" + phoneNumber,
                OTP: otpInputs.join(""),
                email: email,
                role: 'basic'
            };
            console.log(requestBody.phone);

            const response = await axios.post(baseURL + '/user/otp', requestBody, {
                params: queryParams,
            });

            console.log(response.data);
            console.log("name", response.name);

            if (response.data) {
                setIsVerifying(true);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleVerifyNumberClick = async () => {
        try {
            // const queryParams = {
            //     mode: isPhoneNumberVerified ? 'email' : "phone",
            // }
            // console.log("mode", queryParams.mode)
            // const requestBody = {
            //     phone: "91" + phoneNumber,
            //     OTP: otpInputs,
            //     email: email,
            //     role: 'basic'
            // };
            // console.log(requestBody);
            // const response = await axios.post(baseURL + '/user/verify', requestBody, {
            //     params: queryParams,
            // })

            // console.log(response.data.data.accessToken);
            // console.log("name", response);

            // if (response.status === 200) {
            setIsPhoneNumberVerified(true);
            setShowEmailField(true);
            setIsEmailVerified(true);
            setIsVerifying(false);
            setShowOtpFields(false);
            setIsGetOtpDisabled(true);

            //     if (response.status === 200 && isEmailVerified) {
            //         navigate(`/SignUpPage?name=${name}&phoneNumber=${phoneNumber}&email=${email}`);
            //         localStorage.setItem('access_token', response.data.data.accessToken);
            //     }
            // }
        }
        catch (err) {
            console.log(err);
            // Enable the Get OTP button
        }

        // Add your logic for verifying the number here

    };

    // Handle timer expiry
    const handleTimerExpiry = () => {
        if (!showOtpFields && resendTimer === 0) {
            // Perform the "Get OTP" functionality here
            // console.log("Performing Get OTP functionality");
            // handleGetOtpClick();
            // setIsGetOtpDisabled(false);
            clearInterval(interval)
        }
    };


    const handleResendClick = () => {
        if (resendTimer === 0) {
            handleGetOtpClick();
            setResendTimer(30);
            startTimer();
        }
    };
    var interval
    var clearTimer = false;
    const startTimer = () => {
        let timer = 30;
        interval = setInterval(() => {
            timer--;

            setResendTimer(timer);
            handleTimerExpiry();
            clearInterval(interval)


        }, 1000);

    };



    useEffect(() => {
        setIsGetOtpDisabled(
            !name.trim() ||
            !phoneNumber.trim() &&
            !email.trim() ||

            (showEmailField && !email)

        );
    }, [name, phoneNumber, email]);

    const handleInputChange = (index, value) => {
        // Create a new array with the updated value at the specified index
        const updatedValues = [...otpInputs];
        updatedValues[index] = value;
        setOtpInputs(updatedValues);
    };

    return (
        <>
            <div className="regester_div">
                <section className="login_section signup_section">
                    <div className="start-box"><div id="stars" /><div id="stars2" /><div id="stars3" /></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12  signup_content_col">
                                <h1>Join the <br />
                                    Hammer TradeX</h1>
                                <ul>
                                    <li>1. Signup</li>
                                    <li>2. Email verification</li>
                                    <li>3. Login</li>
                                    <li>4. Buy token via dashboard</li>
                                    <li>5. Get purchase details via email</li>
                                    <li>6. See transaction history via dashboard</li>
                                </ul>
                                <div className="Contract_Address">
                                    <h5>Contract Address:</h5>
                                    <a href="#">0x556d4F40982CB95E0714989E0c229C42be8b1499</a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="form_box">
                                    <div className="logo_img">
                                        <img className="img-fluid " src="https://hammertradex.com/public/front/assets/img/htx-logo.png" alt />
                                    </div>
                                    <h3>Register your account!</h3>
                                    <div>
                                        <form role="form" >
                                            <input
                                                type="hidden"
                                                name="_token"
                                                defaultValue="b66aFctTonKhd73PjlzMG7wu4Oj0Wd3BFxkyEZXS"
                                            />
                                            <div className="row">
                                                <p id="msg" style={{ fontSize: 14, fontWeight: 'bold' }} />
                                                <div className="col-lg-6 col-md-12 col-sm-12">

                                                    <span className="wpcf7-form-control-wrap text-478">
                                                        {/* <input type="text" class="input_box" name="referalname" value="HTX" onChange="getreferal(this.value)" id="referred1"> */}
                                                        <input
                                                            type="text"
                                                            name="referalname"
                                                            className="input_box"
                                                            defaultValue=""
                                                            placeholder='Enter Your Name'
                                                            onChange={(e) => setName(e.target.value)}
                                                            disabled={isOtpFieldsShown} // Disable the input field if OTP fields are shown
                                                            id="referred1"
                                                            required />
                                                    </span>
                                                </div>
                                                <div className="col-lg-6 col-md-12 col-sm-12">

                                                    <input
                                                        type="text"
                                                        className="input_box"
                                                        placeholder='Phone Number'
                                                        name="sponser_name"
                                                        id="referred2"
                                                        disabled={isOtpFieldsShown} // Disable the input field if OTP fields are shown
                                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                                        required />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="input_box_div">
                                                        <label></label>
                                                        <input
                                                            className="input_box form-control text-478"
                                                            type="text"
                                                            placeholder='Refer Code (Optional)'
                                                            onChange={(e) => setReferCode(e.target.value)}
                                                            name="name" />
                                                    </div>
                                                </div>
                                                {showEmailField && (
                                                    <div className="col-12 my-2">
                                                        <input
                                                            type="text"
                                                            placeholder="E-mail"


                                                            onChange={(e) => {
                                                                setEmail(e.target.value)
                                                            }}
                                                        />
                                                    </div>
                                                )}
                                                {showOtpFields ? (
                                                    <>
                                                        <div style={{ paddingTop: '20px' }} className="col-12 d-flex my-2 otp-input">
                                                            <div className="card card-body p-0 mx-1">
                                                                <input
                                                                    className="border rounded p-2 text-center otp-input"
                                                                    id="otp1"
                                                                    value={otpInputs[0]}
                                                                    onChange={(e) => handleInputChange(0, e.target.value)}

                                                                    type="text"
                                                                    maxLength={1}
                                                                    style={{ outline: 'none', border: 'none', width: '100%' }}
                                                                />
                                                            </div>
                                                            <div className="card card-body p-0 mx-1">
                                                                <input
                                                                    className="border rounded p-2 text-center otp-input"
                                                                    id="otp2"
                                                                    type="text"
                                                                    value={otpInputs[1]}
                                                                    onChange={(e) => handleInputChange(1, e.target.value)}
                                                                    maxLength={1}
                                                                    style={{ outline: 'none', border: 'none', width: '100%' }}
                                                                />
                                                            </div>
                                                            <div className="card card-body p-0 mx-1">
                                                                <input
                                                                    className="border rounded p-2 text-center otp-input"
                                                                    id="otp3"
                                                                    type="text"
                                                                    value={otpInputs[2]}
                                                                    onChange={(e) => handleInputChange(2, e.target.value)}
                                                                    maxLength={1}
                                                                    style={{ outline: 'none', border: 'none', width: '100%' }}
                                                                />
                                                            </div>
                                                            <div className="card card-body p-0 mx-1">
                                                                <input
                                                                    className="border rounded p-2 text-center otp-input"
                                                                    id="otp4"
                                                                    type="text"
                                                                    value={otpInputs[3]}
                                                                    onChange={(e) => handleInputChange(3, e.target.value)}
                                                                    maxLength={1}
                                                                    style={{ outline: 'none', border: 'none', width: '100%' }}
                                                                />
                                                            </div>

                                                        </div>

                                                        <div style={{ alignItems: 'centers', paddingTop: "20px" }} className="my-auto col-12">
                                                            <div className="row">
                                                                <div style={{ fontSize: '12px' }} className="d-flex col-6 justify-content-start my-2 text-light">
                                                                    Resend in {resendTimer < 10 ? `00:0${resendTimer}` : `00:${resendTimer}`} seconds
                                                                </div>
                                                                <div className="d-flex col-6 justify-content-end my-2">
                                                                    {resendTimer === 0 && (
                                                                        <button className="btn btn-success ms-2" onClick={handleResendClick}>
                                                                            Resend OTP
                                                                        </button>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>

                                                ) : null}

                                                <div className="col-lg-12 col-md-12 col-sm-12 forget_password terms_div">

                                                    <input type="checkbox" id="terms" name="terms" defaultValue="terms" required />
                                                    <label htmlFor="terms"> I agree to the terms and conditions</label>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    {isVerifying ? (<>
                                                        <button style={{ cursor: 'pointer' }} className="form_submit_btn" type="button" name="submit" defaultValue="Register Now" id="submit" onClick={() => {
                                                            handleVerifyNumberClick()
                                                        }} >  {isEmailVerified ? "Verify Email" : "Verify Number"}</button>
                                                    </>) :
                                                        (<>
                                                            <button
                                                                type='button'
                                                                style={{ cursor: 'pointer' }}
                                                                className="form_submit_btn"
                                                                name="submit"
                                                                defaultValue="Register Now"
                                                                id="submit"
                                                                onClick={handleGetOtpClick}
                                                                disabled={isGetOtpDisabled}

                                                            >Get OTP</button>

                                                        </>)}

                                                </div>

                                                <div className="col-lg-12 col-md-12 col-sm-12 signup_btn">
                                                    <p>Already have an account?</p> <span style={{ cursor: 'pointer' }} className> Login Now
                                                    </span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="signup_section_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
                                <footer className="footer">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <div>
                                                    <h3>Join Our Community</h3>
                                                    <div className="footer_social_div">
                                                        <span><TwitterIcon /></span>
                                                        <span><TelegramIcon /></span>
                                                        <span><InstagramIcon /></span>
                                                        <span><LinkedInIcon /></span>
                                                        <span><FacebookIcon /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form_bottom_links">
                                        <a href="./privacy-policy.html">PRIVACY POLICY</a>
                                        <p>Copyright@HammerTradex.com All Rights Reserved.</p>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default RegestrationPage;