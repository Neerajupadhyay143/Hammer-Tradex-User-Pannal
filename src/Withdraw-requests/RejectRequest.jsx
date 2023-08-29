import React, { useState } from 'react'

function RejectRequest() {
  // State to store the table data
  const [requestData, setRequestData] = useState([]);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('1'); // Default: Active


  // Sample data for testing
  const sampleData = [
    {
      amount: 100,
      percentage: 5,
      withdrawable: 95,
      withdrawDate: "2023-08-15",
      approveDate: "2023-08-20",
      status: "Active"
    },
    {
      amount: 200,
      percentage: 10,
      withdrawable: 180,
      withdrawDate: "2023-08-10",
      approveDate: "2023-08-18",
      status: "Deactive"
    },
    // Add more data objects here
  ];

  // Set the initial data to the state (for testing)
  useState(() => {
    setRequestData(sampleData);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Filter data based on the selected date range and status
    const filteredData = sampleData.filter(data => {
      const dataDate = new Date(data.withdrawDate);
      const fromDateObj = new Date(fromDate);
      const toDateObj = new Date(toDate);

      const dateWithinRange = (
        (!fromDate || dataDate >= fromDateObj) &&
        (!toDate || dataDate <= toDateObj)
      );

      const statusMatch = selectedStatus === '2' || data.status === (selectedStatus === '1' ? 'Active' : 'Deactive');

      return dateWithinRange && statusMatch;
    });

    setRequestData(filteredData);
  };

  


  return (
    <>
      <div className="content-wrapper" style={{ minHeight: '788.8px' }}>
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            {/* Content Header (Page header) */}
            <section className="dasgboard_main_section light_border">
              <h2 className="welcome_heading">Request History </h2>
            </section>
            <form onSubmit={handleSubmit} method="POST">
              <input type="hidden" name="_token" defaultValue="1RnkRkQHdM7ekl0GSuOaUM5dpo0UT0zruaaKtmJ6" />                        <div className="row">
                <div className="form-group col-md-3">
                  <lable>Select Status
                    <select className="form-control input_box" name="status">
                      <option value={1} selected> Active </option>
                      <option value={0}> Deactive </option>
                      <option value={2}> All </option>
                    </select>
                  </lable></div>
                <div className="form-group col-md-3"><lable>From Date
                  <input type="date" className="form-control input_box" value={fromDate} onChange={(e) => setFromDate(e.target.value)} defaultValue name="fdate"  />
                </lable></div>
                <div className="form-group col-md-3"><lable>To Date
                  <input type="date" className="form-control input_box" value={toDate} onChange={(e) => setToDate(e.target.value)} defaultValue name="tdate" />
                </lable></div>
                <div className="form-group col-md-3">
                  <br />
                  <input type="submit" className="form-control btn btn-info" defaultValue="Search" name />
                </div>
              </div> </form>
          </div>{/* /.container-fluid */}
        </div>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid" style={{ marginTop: '-35px' }}>
            <div className="row">
              {/* Primary table start */}
              <div className="col-12 mt-5">
                <div className="card dasgboard_boxes_main_dark">
                  <div className="card-body" style={{ backgroundColor: '#000000' }}>
                    <div className="single-table">
                      <div className="table-responsive">
                        <table className="table text-center">
                          <thead className="text-capitalize">
                            <tr>
                              <th>Sr no.</th>
                              <th>Amount $</th>
                              <th>Percentage %</th>
                              <th>Withdrable $</th>
                              <th>Withdraw Date</th>
                              <th>Approve Date</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {requestData.length > 0 ? (
                              requestData.map((data, index) => (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{data.amount}</td>
                                  <td>{data.percentage}</td>
                                  <td>{data.withdrawable}</td>
                                  <td>{data.withdrawDate}</td>
                                  <td>{data.approveDate}</td>
                                  <td>{data.status}</td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan={7}>Result Not Found</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                        <br /><br />
                        <center>
                          <div>
                          </div>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Primary table end */}
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default RejectRequest;