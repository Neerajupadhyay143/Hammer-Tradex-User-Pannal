import React, { useState } from 'react'
import "../StyleFolder/stackManage.css";
import RotateLeftIcon from '@mui/icons-material/RotateLeft';

function StackManage() {

  const initialTableData = [
    {
      id: 1,
      userId: "HTX9015",
      userName: "LAXMI KANTA GIRI",
      type: "roi_income",
      description: "10/- Amount Is Credit To Your Account...",
      amount: "10.00$",
      date: "2023-08-26",
      time: "18:35:08"
    },
    {
      id: 2,
      userId: "HTX6229",
      userName: "Subrata Das",
      type: "roi_income",
      description: "10/- Amount Is Credit To Your Account...",
      amount: "10.00$",
      date: "2023-08-26",
      time: "18:35:08"
    },
    {
      id: 3,
      userId: "HTX6769",
      userName: "Sk Masud Hayder",
      type: "roi_income",
      description: "10/- Amount Is Credit To Your Account...",
      amount: "10.00$",
      date: "2023-08-26",
      time: "18:35:08"
    },
    {
      id: 4,
      userId: "HTX7502",
      userName: "INDRAJEET PANDEY",
      type: "roi_income",
      description: "10/- Amount Is Credit To Your Account...",
      amount: "10.00$",
      date: "2023-08-26",
      time: "18:35:08"
    },
    {
      id: 5,
      userId: "HTX7392",
      userName: "Omendra Kumawat",
      type: "roi_income",
      description: "10/- Amount Is Credit To Your Account...",
      amount: "10.00$",
      date: "2023-08-26",
      time: "18:35:08"
    },
    {
      id: 6,
      userId: "HTX5652",
      userName: "Debabrata Das",
      type: "roi_income",
      description: "10/- Amount Is Credit To Your Account...",
      amount: "10.00$",
      date: "2023-08-26",
      time: "18:35:07"
    },
    // Add more data objects here
  ];

  const [tableData, setTableData] = useState(initialTableData);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const filteredData = initialTableData.filter(item => {
      if (!startDate || !endDate) return true; // If no dates selected, show all
      const itemDate = new Date(item.date);
      return itemDate >= new Date(startDate) && itemDate <= new Date(endDate);
    });

    // Filter by user ID or user name
    const searchResults = filteredData.filter(item => {
      if (!searchQuery) return true; // If no search query, show all
      return (
        item.userId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.userName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setTableData(filteredData);
  };
  const handleReset = () => {
    setStartDate("");
    setEndDate("");
    setSearchQuery("");
    setTableData(initialTableData);
  };
  return (
   <>
      <div className="content-wrapper" style={{minHeight: 679}}>
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0 text-dark">Transaction</h1>
        </div>{/* /.col */}
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="https://hammertradex.com">Home</a></li>
            <li className="breadcrumb-item active">Transaction</li>
          </ol>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* Main content */}
  <section className="content">
    <div className="container-fluid" style={{marginTop: '-35px'}}>
      <div className="row">
        {/* Primary table start */}
        <div className="col-12 mt-5">
          <div className="card">
            <div className="card-body">
              <form role="form" action="https://hammertradex.com/admin-panel/Transaction" method="post">
                <input type="hidden" name="_token" defaultValue="eLkpGsUBYr9izTDYhoNZCCY6pxm06c8hRkw1N41O" />
                <div className="col-md-6 mb-6" style={{float: 'left', marginTop: 10}}>
                  <div className="form-group">
                    <label>Pick a start date:</label>
                    <div className="input-group date" id="datepicker" data-target-input="nearest">
                            <input type="date" className="form-control t" placeholder="yyyy-mm-dd" name="start_date" onChange={(e) => setStartDate(e.target.value)} defaultValue />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-6" style={{float: 'left', marginTop: 10}}>
                  <div className="form-group">
                    <label>Pick a end date:</label>
                    <div className="input-group date" id="datepicker1" data-target-input="nearest">
                            <input type="date" className="form-control " placeholder="yyyy-mm-dd" name="end_date" onChange={(e) => setEndDate(e.target.value)} defaultValue />
                    </div>
                  </div>
                </div>
                <div style={{clear: 'both'}} />
                <div className="col-md-6 mb-6" style={{float: 'left', marginTop: 10}}>
                  <label htmlFor="validationCustomUsername">User ID  &amp;  User Name</label>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Name,Username" 
                     defaultValue name="userid" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}/>
                  </div>
                </div>
                <div className="col-md-6 mb-6" style={{float: 'left', marginTop: 10}}>
                  <label htmlFor="validationCustomUsername">Type</label>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Type" defaultValue name="type_id" />
                  </div>
                </div>
               
                <div style={{clear: 'both'}} />
                <br />
                <div className="col-md-12 mb-12">
                  <center>
                          <button className="btn btn-primary" onClick={handleSearch} >Search Now</button>
                          <button className="btn btn-info" style={{ marginLeft: '20px' }} type="button" onClick={handleReset}>Reset <span><RotateLeftIcon/></span> </button>
                    
                  </center>
                </div>
                <br />
              </form>
              <h4 className="header-title">All Transaction</h4>
              <div className="single-table">
                <div className="table-responsive">
                  <table className="table text-center">
                    <thead className="text-capitalize">
                      <tr>
                        <th>SR. No.</th>
                        <th>User ID</th>
                        <th>User Name</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Time</th>
                      </tr>
                    </thead>
                          <tbody>
                            {tableData.map((item) => (
                              <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.userId}</td>
                                <td>{item.userName}</td>
                                <td>{item.type}</td>
                                <td>{item.description}</td>
                                <td>{item.amount}</td>
                                <td>{item.date}</td>
                                <td>{item.time}</td>
                              </tr>
                            ))}
                          </tbody>
                  </table>
                  <br /><br />
                  <center>
                    <div>
                      <nav>
                        <ul className="pagination">
                          <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                            <span className="page-link" aria-hidden="true">‹</span>
                          </li>
                          <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                          <li className="page-item"><a className="page-link" href="https://hammertradex.com/admin-panel/Transaction?page=2">2</a></li>
                          <li className="page-item"><a className="page-link" href="https://hammertradex.com/admin-panel/Transaction?page=3">3</a></li>
                          <li className="page-item"><a className="page-link" href="https://hammertradex.com/admin-panel/Transaction?page=4">4</a></li>
                          <li className="page-item"><a className="page-link" href="https://hammertradex.com/admin-panel/Transaction?page=5">5</a></li>
                          <li className="page-item"><a className="page-link" href="https://hammertradex.com/admin-panel/Transaction?page=6">6</a></li>
                          <li className="page-item"><a className="page-link" href="https://hammertradex.com/admin-panel/Transaction?page=7">7</a></li>
                          <li className="page-item"><a className="page-link" href="https://hammertradex.com/admin-panel/Transaction?page=8">8</a></li>
                          <li className="page-item"><a className="page-link" href="https://hammertradex.com/admin-panel/Transaction?page=9">9</a></li>
                          <li className="page-item"><a className="page-link" href="https://hammertradex.com/admin-panel/Transaction?page=10">10</a></li>
                          <li className="page-item disabled" aria-disabled="true"><span className="page-link">...</span></li>
                          <li className="page-item"><a className="page-link" href="https://hammertradex.com/admin-panel/Transaction?page=2567">2567</a></li>
                          <li className="page-item"><a className="page-link" href="https://hammertradex.com/admin-panel/Transaction?page=2568">2568</a></li>
                          <li className="page-item">
                            <a className="page-link" href="https://hammertradex.com/admin-panel/Transaction?page=2" rel="next" aria-label="Next »">›</a>
                          </li>
                        </ul>
                      </nav>
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

export default StackManage;