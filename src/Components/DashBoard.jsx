import React, { useEffect, useState } from 'react'
import "../StyleFolder/dashboards.css"
import "../StyleFolder/style.css"

function DashBoard() {


    const [loading, setLoading] = useState(true);


    const memberDetails = [
        { label: 'Total Member', value: 211 },
        { label: 'Active Member', value: 123 },
        { label: 'In-Active Member', value: 88 },
        { label: 'Blocked Member', value: 0 }
    ];

    const withdrawDetails = [
        { label: 'Pending Withdraw', value: 0, trx: '0.00TRX' },
        { label: 'Complete Withdraw', value: 204, trx: '64,221.00TRX' },
        { label: 'Reject Withdraw', value: 0, trx: '0.00TRX' },
        { label: 'Withdraw to Pending TRX', value: 25870.17, trx: 'TRX' }
    ];

    const incomeDetails = [
        { label: 'Singing Bonus', value: '16,150.00 TRX' },
        { label: 'ROI Income', value: '784,060.00 HTX' },
        { label: 'Robo Trading Income', value: '213.56 USDT' },
        { label: 'Direct Referral Income', value: '62,503.33 TRX' },
        { label: 'Team Growth Bonus', value: '0.00 TRX' },
        { label: 'Team Building Bonus', value: '12,087.50 TRX' },
        { label: 'Total Income', value: '91,532.83 TRX' }
    ];


    useEffect(() => {
        // Simulate a delay to showcase the loading animation
        setTimeout(() => {
            setLoading(false);
        }, 5); // Change the delay as needed

        // You can also fetch data or perform other initialization here
    }, []);


    return (
        <>
            <div className={`fade-in ${loading ? '' : 'active'}`}>

                <section className="dasgboard_main_section light_border">
                    <div class="row ">
                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <h2 class="welcome_heading">Welcome to <span class="color_span"> Hammer TradeX </span> </h2>
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-12">
                            <p class="dash_para_details">
                                Thank you for signing up, htxtradex. In accordance with the terms and conditions you will be able to purchase and see your HammerTradeX tokens using this dashboard.</p>
                        </div>
                        <p class="dash_para_details  dash_para_details_mob">
                            Thank you for signing up, htxtradex. </p>
                    </div>
                </section>

                <section className="content" style={{ paddingTop: 20 }}>
                    <div className="container-fluid">
                        {/* Info boxes */}
                        <div className="row">
                            {/* member detail */}
                            <div className="col-12 col-sm-6 col-md-4" style={{ marginTop: 5 }}>
                                <div className="detail-box">
                                    <p className="box-header" style={{}}>
                                        <i className="fa fa-users" /> Member Detail
                                    </p>
                                    {memberDetails.map((detail, index) => (
                                        <div key={index} className="collection-item" style={{ padding: 4, borderBottom: '1px solid #a2a0a0' }}>
                                            <div className="row">
                                                <div className="col s8">
                                                    <p className="collections-title font-weight-600">{detail.label}</p>
                                                </div>
                                                <div className="col s3"><span>{detail.value}</span></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* member detail */}
                            {/* withdraw detail */}
                            <div className="col-12 col-sm-6 col-md-4" style={{ marginTop: 5 }}>
                                <div className="detail-box">
                                    <p className="box-header" style={{}}> <i className="fa fa-rupee" /> Withdraw Detail </p>
                                    {withdrawDetails.map((detail, index) => (
                                        <div key={index} className="collection-item" style={{ padding: 4, borderBottom: '1px solid #a2a0a0' }}>
                                            <div className="row">
                                                <div className="col s8">
                                                    <p className="collections-title font-weight-600">{detail.label}</p>
                                                </div>
                                                <div className="col s3"><span>{detail.value}</span></div>
                                            </div>
                                        </div>
                                    ))}


                                </div>
                            </div>
                            {/* withdraw detail */}
                            {/* income detail */}
                            <div className="col-12 col-sm-6 col-md-4" style={{ marginTop: 5 }}>
                                <div className="detail-box">
                                    <p className="box-header"> <i className="fa fa-rupee" /> User Income Detail </p>
                                    {incomeDetails.map((detail, index) => (
                                        <div key={index} className="collection-item" style={{ padding: 4, borderBottom: '1px solid #a2a0a0' }}>
                                            <div className="row">
                                                <div className="col s8">
                                                    <p className="collections-title font-weight-600">{detail.label}</p>
                                                </div>
                                                <div className="col s3"><span>{detail.value}</span></div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                            {/* income detail */}




                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default DashBoard
