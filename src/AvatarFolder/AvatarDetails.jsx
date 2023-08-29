import React from 'react'

function AvatarDetails() {
    return (
        <>
        <div className="mainDiv">

       
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right show"
                style={{
                    background: 'rgb(39, 39, 39)',
                    border: '1px solid rgba(177, 141, 95, 0.65)',
                    boxShadow: 'rgb(195, 161, 119) 0px 0px 15px',
                    left: 'inherit',
                    top: '0',
                    right: 0
                }}>

                <div className="ropdown-item drop_header_bg">
                    <h3 className="dropdown-header">bskikoktail@gmail.com</h3>
                    <h2>TOKEN BALANCE</h2>
                    <h2>Total Team Memeber: 2</h2>
                    <h3 className="tokens_count">0 $HTX</h3>
                </div>
                <div className="dropdown-divider" />
                <div className="dropdown-item drop_items">
                    <span >
                        <img src="https://presale.golteum.io/static/media/nav2.809346c5.svg" />
                        <span>My Profile</span>
                    </span>
                </div>
                <div className="dropdown-item drop_items">
                    <span >
                        <img src="https://presale.golteum.io/static/media/nav3.b4d32e04.svg" />
                        <span>Buy Token</span>
                    </span>
                </div>
                <div className="dropdown-item drop_items">
                    <span>
                        <img src="https://presale.golteum.io/static/media/logout.490c019d.svg" />
                        <span>Logout</span>
                    </span>
                </div>

            </div>
</div>
        </>
    )
}

export default AvatarDetails;