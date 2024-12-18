import { React, useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { getData } from '../../api/Api';

const CurrentPayroll = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);

  const Data = async () => {
    try {
      const res = await getData();
      
      if (res && res.data && Array.isArray(res.data.items)) {
        setData(res.data.items);
        setFilteredData(res.data.items);
      } else {
        console.error("Data format is not as expected.");
        setData([]);
        setFilteredData([]);
      }
    } catch (error) {
      console.error("Data fetching error:", error);
    }
  };

  useEffect(() => {
    Data();
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchValue(value);

      const filtered = data.filter((item) =>
        Object.values(item).some((val) => String(val).toLowerCase().includes(value))
      );

    setFilteredData(filtered);
  };

  return (
    <>
        <div className="container-fluid">
            <div className='d-flex justify-content-between'>
                <div>
                    {/* Page Heading  */}
                    <h1 className="h3 mb-2 text-gray-800">Current Payroll</h1>
                </div>
                <div>
                    <button className='btn btn-sm btn-success' onClick={handleShow}>CREATE</button>
                </div>
            </div>
             {/* DataTales Example  */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                <label className="col-1 col-form-label">Search</label>
               <div className="col-3">
               <input
                    type="text"
                    value={searchValue}
                    onChange={handleSearch}
                    placeholder="Search..."
                />
               </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <div className='freeze-table'>
                            <table className="table table-bordered"id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th id="f_row_id">ID #</th>
                                        <th id="f_salary_month">SALARY<br/>MONTH</th>
                                        <th id="f_emp_no">EMP #</th>
                                        <th id="f_emp_name">EMP NAME</th>
                                        <th id="f_dept" >DEPARTMENT</th>
                                        <th id="f_salary" >SALARY</th>
                                        <th id="f_dep_refunded">DEP.<br/>REFUND</th>
                                        <th id="f_increment_add">INCREMENT</th>
                                        <th id="f_others_add">ADD<br/>OTHERS</th>
                                        <th id="f_others_ded">LESS<br/>OTHERS</th>
                                        <th id="f_leave_ded">LEAVES</th>
                                        <th id="f_deposit_ded">DEPOSIT</th>
                                        <th id="f_loan_ded">LOAN</th>
                                        <th id="f_advance_ded">ADVANCE</th>
                                        <th id="f_total_amount">TOTAL<br/>AMOUNT</th>
                                        <th id="f_date_for_50k_above">DATE FOR<br/>50k  EXCESS</th>
                                        <th id="f_cash_above_50k">50K+<br/>CASH</th>
                                        <th id="f_payroll_remarks">PAYMENT NOTES</th>
                                        <th id="f_payment_mode">PAYMENT<br/>MODE</th>
                                        <th id="f_bank_name">BANK<br/>NAME</th>
                                        <th id="f_payroll_check">
                                        <input type="checkbox" id="payroll_check_all" onclick="checkAllCheckbox('.payroll_check', '#payroll_check_all')"/>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {filteredData.map((item) => {
                                return (
                                    <tr key={item.empno}>
                                        <td>{item.id}</td>
                                        <td>{item.salary_month}</td>
                                        <td>{item.empno}</td>
                                        <td>{item.ename}</td>
                                        <td>{item.dept_name}</td>
                                        <td>{item.basic_salary}</td>
                                        <td>{item.dep_refunded}</td>
                                        <td>{item.increment_add}</td>
                                        <td>{item.others_add}</td>
                                        <td>{item.others_ded}</td>
                                        <td>{item.leave_ded}</td>
                                        <td>{item.deposit_ded}</td>
                                        <td>{item.loan_ded}</td>
                                        <td>{item.advance_ded}</td>
                                        <td>{item.total_amount}</td>
                                        <td>{item.date_for_50k_above}</td>
                                        <td>{item.cash_above_50k}</td>
                                        <td>{item.payroll_remarks}</td>
                                        <td>{item.payment_mode}</td>
                                        <td>{item.bank_name}</td>
                                        <td>
                                        <input type="checkbox" className="payroll_check"/>
                                        </td>
                                    </tr>
                                );
                                })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row bg-dark text-white px-3">
                        <div className="col-md-6 fw-bold total-records">SHOWING {filteredData.length > 0 ? `${filteredData.length} TO ${filteredData.length}` : "0 OUT OF 0"}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="row">
                  <div className="col-md-4 mb-3">
                     <label>Code</label>
                     <input type="text" className="form-control form-control-sm" name="code" required maxlength="20"/>
                  </div>
                  <div className="col-md-8 mb-3">
                     <label>Name</label>
                     <input type="text" className="form-control form-control-sm" name="name" required/>
                  </div>
                  <div className="col-md-4 mb-3">
                     <label>IP Address</label>
                     <input type="text" className="form-control form-control-sm" name="ip_address" />
                  </div>
                  <div className="col-md-4 mb-3">
                     <label>Start Time</label>
                     <input type="time" className="form-control form-control-sm" name="start_time" />
                  </div>
                  <div className="col-md-4 mb-3">
                     <label>End Time</label>
                     <input type="time" className="form-control form-control-sm" name="end_time" />
                  </div>
                  <div className="col-md-12 mb-3">
                     <label>Default Branch</label>
                     <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" name="is_default" id="c_is_default"/>
                        <label className="form-check-label" for="c_is_default">Enable / Disable</label>
                     </div>
                  </div>
               </div>
                </Modal.Body>
                <Modal.Footer>
                <button className='btn btn-sm btn-secondary' variant="secondary" onClick={handleClose}>
                    Close
                </button>
                <button className='btn btn-sm btn-primary' variant="primary" onClick={handleClose}>
                    Save Changes
                </button>
                </Modal.Footer>
            </Modal>
        </div>
    </>
  )
}

export default CurrentPayroll