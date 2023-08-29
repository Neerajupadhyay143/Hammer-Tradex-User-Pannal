import React from 'react'

const ProfilePAge = () => {
    return (
        <><div className="content-wrapper" style={{ minHeight: '675.2px' }}>
            {/* Content Header (Page header) */}
            <section className="dasgboard_main_section light_border">
                <h2 className="welcome_heading">Profile </h2>
            </section>
            {/* <div class="content-header">
              <div class="container-fluid">
                  <div class="row mb-2">
                      <div class="col-lg-12 col-sm-12">
                          <h1 class="m-0 text-dark">Edit Profile    </h1>
                      </div>

                  </div>
              </div>
          </div> */}
            {/* Main content */}
            <section className="profile_main_section" style={{ padding: '20px 40px' }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <ul className="nav nav-tabs light_border" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-toggle="tab" data-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Personal data</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-toggle="tab" data-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">settings</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Refereal Details</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="Password-tab" data-toggle="tab" data-target="#Password" type="button" role="tab" aria-controls="Password" aria-selected="false">Password</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    {/* profile */}
                                    <section className>
                                        <div className="row">
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <div className="dasgboard_boxes_main_dark">
                                                    <div className="profile_section_tabs_inner_main">
                                                        <div className="profile_update">
                                                            <p>Please Complete Your Profile</p>
                                                        </div>
                                                        <div className="form_main_div">
                                                            <form role="form" action="https://hammertradex.com/My-Profile-Update" method="post" encType="multipart/form-data">
                                                                <input type="hidden" name="_token" defaultValue="b66aFctTonKhd73PjlzMG7wu4Oj0Wd3BFxkyEZXS" />
                                                                <div className="row gutters">
                                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                        <h6 className="mb-2 text-primary">Personal Details</h6>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                                        <div className="form-group">
                                                                            <label htmlFor="validationCustomUsername">User ID</label>
                                                                            <div className="input-group">
                                                                                <input type="text" className="form-control input_box" defaultValue="htxtradex" id="validationCustomUsername" placeholder="User ID" aria-describedby="inputGroupPrepend" readOnly required />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                                        <div className="form-group">
                                                                            <label htmlFor="validationCustom01">Full Name</label>
                                                                            <input type="text" className="form-control input_box" name="name" defaultValue="htxtradex" id="validationCustom01" placeholder="Name" required />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                                        <div className="form-group">
                                                                            <label htmlFor="validationCustom02">E-Mail Id</label>
                                                                            <input type="email" className="form-control input_box" name="email" defaultValue="bskikoktail@gmail.com" id="validationCustom02" placeholder="E-Mail Id" required />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                                        <div className="form-group">
                                                                            <label htmlFor="validationCustomUsername">Mobile Number</label>
                                                                            <div className="row">
                                                                                <div className="input-group col-md-3">
                                                                                    <select name="number1" className="form-control input_box">
                                                                                        <option value={91}>91</option>

                                                                                    </select>
                                                                                </div>
                                                                                <div className="input-group col-md-9">
                                                                                    <input type="text" className="form-control input_box" name="number" defaultValue={7742783498} id="validationCustomUsername" placeholder="Mobile Number" aria-describedby="inputGroupPrepend" required />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row gutters">
                                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                        <h6 className="mt-3 mb-2 text-primary">Other Info</h6>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                                        <label htmlFor="validationCustomUsername">Address </label>
                                                                        <div className="input-group">
                                                                            <input type="text" className="form-control input_box" id="validationCustomUsername" name="address" defaultValue="dddddddddddd" placeholder="Address" aria-describedby="inputGroupPrepend" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                                        <label htmlFor="exampleInputFile">Profile Image</label>
                                                                        <div className="input-group">
                                                                            <div className="custom-file">
                                                                                <input type="file" name="img" onchange="changeimg1(this);" className="custom-file-input input_box" id="exampleInputFile" />
                                                                                <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                          <label for="validationCustomUsername">Enter OTP <span id="otpmessage" style='color:green; font-weight: 700;font-size: 13px; letter-spacing: .5px;'></span> </label>
                                                                          <div class="input-group">
                                                                              <input type="text" maxlength="6" style="float:left; width: 70%;" class="form-control input_box" id="validationCustomUsername" name="otp" placeholder="please enter OTP" aria-describedby="inputGroupPrepend" required="">
                                                                                  <button class="btn btn-danger" id="otp" type="button" onclick="otpsend()" style="float:left; ">send otp</button>
                                                                          </div>
                                                                      </div> */}
                                                                    {/*<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">*/}
                                                                    {/*	<div class="form-group">*/}
                                                                    {/*		<label for="zIp">Zip Code</label>*/}
                                                                    {/*		<input type="text" class="form-control" id="zIp" placeholder="Zip Code">*/}
                                                                    {/*	</div>*/}
                                                                    {/*</div>*/}
                                                                </div>
                                                                <div className="row gutters" style={{ marginTop: 20 }}>
                                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                                        <div className="text-right">
                                                                            <a href="https://hammertradex.com/User-Dashboard" className="btn btn-secondary">Cancel</a>
                                                                            <button className="btn btn-primary text-center" type="submit">Update</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                                <div className="card h-100 dasgboard_boxes_main_dark">
                                                    <div className="card-body" style={{ background: '#161616 !important' }} >
                                                        <div className="account-settings">
                                                            <div className="user-profile">
                                                                <center>
                                                                    <div className="user-avatar">
                                                                        <img className="img-circle elevation-2" src="https://hammertradex.com/uploads/User/62041677233658.PNG" id="blah1" height={100} width={100} alt="User image" />
                                                                    </div>
                                                                    <h5 className="user-name" style={{ fontSize: '1rem', marginTop: 11, color: '#fff' }}>htxtradex <span style={{ fontWeight: 'bold', color: '#fff' }} > ( htxtradex ) </span></h5>
                                                                    <h6 className="user-email" style={{ fontSize: 15, color: '#fff' }}>bskikoktail@gmail.com</h6>
                                                                </center>
                                                            </div>
                                                            <div className="about">
                                                                <h5 style={{ color: '#fff' }}>About</h5>
                                                                <p style={{ color: '#fff' }}>My Sponsor   : ---- <span style={{ fontWeight: 'bold' }}> ( ---- ) </span></p>
                                                                <p style={{ color: '#fff' }}>Joining Date : 2022-12-12</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></section>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    {/* sitting */}
                                    <section className>
                                        <div className="row">
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <div className="dasgboard_boxes_main_dark">
                                                    <div className="profile_section_tabs_inner_main">
                                                        <h2 className="other_heading">Security Settings</h2>
                                                        <div className="d_flexss">
                                                            <p>Save my activities log</p>
                                                            <div>
                                                                <label className="switch">
                                                                    <input type="checkbox" />
                                                                    <span className="slider round" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></section>
                                </div>
                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    {/* refer  */}
                                    <section className>
                                        <div className="row">
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <div className="dasgboard_boxes_main_dark">
                                                    <div className="profile_section_tabs_inner_main">
                                                        <h2 className="other_heading">Referral details</h2>
                                                        <div className="refer_link_main">
                                                            <p>Referral link</p>
                                                            <div className="refer_link">
                                                                <p>https://htx/register?id=63be505e76bb22053eff15d7</p>
                                                                <button><i className="fa fa-copy" /></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div class="dasgboard_boxes_main_dark refer_table_div">
                                      <div class="profile_section_tabs_inner_main">
                                          <div class="d_flexss">
                                              <button>Download <i class="fa fa-download"></i></button>
                                              <form action="">
                                                  <input type="text" value="" placeholder="Search"><br>
                                                  </form>
                                                  </div>



                                          </div>

                                          <div class="profile_section_tabs_inner_main">


                                              <div>
                                                  <table>
                                                      <tr>
                                                          <th><input type="checkbox" value="" disabled></th>
                                                          <th>Serial</th>
                                                          <th>Name</th>
                                                          <th>Total Purchased Token</th>
                                                          <th>Date</th>
                                                      </tr>
                                                      <tr>
                                                          <th><input type="checkbox" value=""></th>
                                                          <th>1001</th>
                                                          <th>ETH</th>
                                                          <th>202</th>
                                                          <th>02-05-2020</th>
                                                      </tr>
                                                  </table>
                                              </div>

                                          </div>
                                      </div> */}
                                            </div>
                                        </div></section>
                                </div>
                                <div className="tab-pane fade" id="Password" role="tabpanel" aria-labelledby="Password-tab">
                                    {/* Change Password */}
                                    <section className>
                                        <div className="row">
                                            <div className="col-lg-8 col-md-8 col-sm-12">
                                                <div className="dasgboard_boxes_main_dark">
                                                    <div className="profile_section_tabs_inner_main">
                                                        <h2 className="other_heading">Change Password</h2>
                                                        <div className="form_main_div">
                                                            <form action="https://hammertradex.com/changepassp" method="post">
                                                                <input type="hidden" name="_token" defaultValue="b66aFctTonKhd73PjlzMG7wu4Oj0Wd3BFxkyEZXS" />																				<div className="input_box_div">
                                                                    <label htmlFor="fname">Old password:</label>
                                                                    <input className="input_box" type="password" name="old_pass" defaultValue placeholder="Old password" />
                                                                </div>
                                                                <div className="input_box_div">
                                                                    <label htmlFor="fname">New password:</label>
                                                                    <input className="input_box" type="password" name="new_pass" defaultValue placeholder="New password" />
                                                                </div>
                                                                <div className="input_box_div">
                                                                    <label htmlFor="fname">New re-password:</label>
                                                                    <input className="input_box" type="password" name="con_pass" defaultValue placeholder="New re-password" />
                                                                </div>
                                                                <div className="dash_second_col_third ">
                                                                    <input type="submit" className="button_submit" defaultValue="Update" />
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></section>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </section >
            <section className="content" style={{ display: 'none' }}>
                <div className="container-fluid">
                    {/* Row start */}
                    <div className="row gutters">
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="account-settings">
                                        <div className="user-profile">
                                            <center>
                                                <div className="user-avatar">
                                                    <img className="img-circle elevation-2" src="https://hammertradex.com/uploads/User/62041677233658.PNG" id="blah1" height={100} width={100} alt="User image" />
                                                </div>
                                                <h5 className="user-name" style={{ fontSize: '1rem', marginTop: 11 }}>htxtradex <span style={{ fontWeight: 'bold' }}> ( htxtradex ) </span></h5>
                                                <h6 className="user-email" style={{ fontSize: 15, color: '#686161' }}>bskikoktail@gmail.com</h6>
                                            </center>
                                        </div>
                                        <div className="about">
                                            <h5>About</h5>
                                            <p>My Sponsor   : ---- <span style={{ fontWeight: 'bold' }}> ( ---- ) </span></p>
                                            <p>Joining Date : 2022-12-12</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                            <div className="card h-100">
                                <div className="card-body">
                                    <form role="form" action="https://hammertradex.com/My-Profile-Update" method="post" encType="multipart/form-data">
                                        <input type="hidden" name="_token" defaultValue="b66aFctTonKhd73PjlzMG7wu4Oj0Wd3BFxkyEZXS" />
                                        <div className="row gutters">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <h6 className="mb-2 text-primary">Personal Details</h6>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="validationCustomUsername">User ID</label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" defaultValue="htxtradex" id="validationCustomUsername" placeholder="User ID" aria-describedby="inputGroupPrepend" required disabled />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="validationCustom01">Full Name</label>
                                                    <input type="text" className="form-control" name="name" defaultValue="htxtradex" id="validationCustom01" placeholder="Name" required />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="validationCustom02">E-Mail Id</label>
                                                    <input type="email" className="form-control" name="email" defaultValue="bskikoktail@gmail.com" id="validationCustom02" placeholder="E-Mail Id" required />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="validationCustomUsername">Mobile Number</label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" name="number" defaultValue={7742783498} id="validationCustomUsername" placeholder="Mobile Number" aria-describedby="inputGroupPrepend" required />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row gutters">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <h6 className="mt-3 mb-2 text-primary">Other Info</h6>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <label htmlFor="validationCustomUsername">Address </label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" id="validationCustomUsername" name="address" defaultValue="dddddddddddd" placeholder="Address" aria-describedby="inputGroupPrepend" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <label htmlFor="exampleInputFile">Profile Image</label>
                                                <div className="input-group">
                                                    <div className="custom-file">
                                                        <input type="file" name="img" onchange="changeimg1(this);" className="custom-file-input" id="exampleInputFile" />
                                                        <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <label htmlFor="validationCustomUsername">Enter OTP <span id="otpmessage" style={{ color: 'green', fontWeight: 700, fontSize: 13, letterSpacing: '.5px' }} /> </label>
                                                <div className="input-group">
                                                    <input type="text" maxLength={6} style={{ float: 'left', width: '70%' }} className="form-control" id="validationCustomUsername" name="otp" placeholder="please enter OTP" aria-describedby="inputGroupPrepend" required />
                                                    <button className="btn btn-danger" id="otp" type="button" onclick="otpsend()" style={{ float: 'left' }}>send otp</button>
                                                </div>
                                            </div>
                                            {/*<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">*/}
                                            {/*	<div class="form-group">*/}
                                            {/*		<label for="zIp">Zip Code</label>*/}
                                            {/*		<input type="text" class="form-control" id="zIp" placeholder="Zip Code">*/}
                                            {/*	</div>*/}
                                            {/*</div>*/}
                                        </div>
                                        <div className="row gutters" style={{ marginTop: 20 }}>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="text-right">
                                                    <a href="https://hammertradex.com/User-Dashboard" className="btn btn-secondary">Cancel</a>
                                                    <button className="btn btn-primary text-center" type="submit">Update</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Row end */}
                </div>
            </section>
        </div >

        </>
    )
}

export default ProfilePAge;