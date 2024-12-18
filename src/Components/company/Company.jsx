import React, { useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Company = () => {
    const [cShow, setCshow] = useState(false);
    const [eShow, setEshow] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [companyData, setCompanyData] = useState([
        { id: 1, name: "Ali Khan", email: "alikhan@example.com", phone: "123-456-7890", address: "123 Main St, Lahore" },
        { id: 2, name: "Sara Ahmed", email: "saraahmed@example.com", phone: "234-567-8901", address: "456 Park Ave, Karachi" },
        { id: 3, name: "Usman Tariq", email: "usmantariq@example.com", phone: "345-678-9012", address: "789 Elm St, Islamabad" },
        { id: 4, name: "Zara Malik", email: "zaramalik@example.com", phone: "456-789-0123", address: "321 Oak St, Quetta" },
        { id: 5, name: "Ahmed Raza", email: "ahmedraza@example.com", phone: "567-890-1234", address: "654 Pine St, Peshawar" },
        { id: 6, name: "Fatima Noor", email: "fatimanoor@example.com", phone: "678-901-2345", address: "987 Maple St, Multan" },
        { id: 7, name: "Bilal Hussain", email: "bilalhussain@example.com", phone: "789-012-3456", address: "123 Cedar St, Faisalabad" },
        { id: 8, name: "Ayesha Siddiqui", email: "ayeshasiddiqui@example.com", phone: "890-123-4567", address: "456 Walnut St, Rawalpindi" },
        { id: 9, name: "Hamza Sheikh", email: "hamzasheikh@example.com", phone: "901-234-5678", address: "789 Birch St, Sialkot" },
        { id: 10, name: "Sana Iqbal", email: "sanaiqbal@example.com", phone: "012-345-6789", address: "321 Ash St, Gujranwala" }
    ]);

    // Handle Create Modal open
    const createClose = () => setCshow(false);
    const createShow = () => setCshow(true);

    // Handle Edit Modal open
    const editClose = () => setEshow(false);
    const editShow = (company) => {
        setSelectedCompany(company);
        setEshow(true);
    };

    // Handle Create form submit
    const handleCreate = () => {
        const newCompany = {
            id: companyData.length + 1,
            name: document.getElementById('c_name').value,
            phone: document.getElementById('c_phone').value,
            email: document.getElementById('c_email').value,
            address: document.getElementById('c_address').value
        };
        setCompanyData([...companyData, newCompany]);
        createClose();
    };

    // Handle Edit form submit
    const handleEdit = () => {
        const updatedData = companyData.map(company =>
            company.id === selectedCompany.id
                ? { ...company, name: document.getElementById('e_name').value, phone: document.getElementById('e_phone').value, email: document.getElementById('e_email').value, address: document.getElementById('e_address').value }
                : company
        );
        setCompanyData(updatedData);
        editClose();
    };

    // Handle Delete
    const handleDelete = (id) => {
        const filteredData = companyData.filter(company => company.id !== id);
        setCompanyData(filteredData);
    };

    return (
        <>
            <div className="container-fluid">
                <div className='d-flex justify-content-between'>
                    <div>
                        <h1 className="h3 mb-2 text-gray-800">Company</h1>
                    </div>
                    <div>
                        <button className='btn btn-sm btn-success' onClick={createShow}>CREATE</button>
                    </div>
                </div>
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <div className='freeze-table'>
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>ID #</th>
                                            <th>NAME</th>
                                            <th>EMAIL</th>
                                            <th>PHONE</th>
                                            <th>ADDRESS</th>
                                            <th>ACTIONS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {companyData.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td><a href='#' onClick={() => editShow(item)}>{item.name}</a></td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.address}</td>
                                                <td>
                                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Create Modal */}
            <Modal show={cShow} onHide={createClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-8">
                            <label className="col-form-label">NAME</label>
                            <input type="text" className="form-control form-control-sm" id="c_name" />
                        </div>
                        <div className="col-md-4">
                            <label className="col-form-label">PHONE</label>
                            <input type="text" className="form-control form-control-sm" id="c_phone" />
                        </div>
                        <div className="col-md-12">
                            <label className="col-form-label">EMAIL</label>
                            <input type="email" className="form-control form-control-sm" id="c_email" />
                        </div>
                        <div className="col-md-12">
                            <label className="col-form-label">ADDRESS</label>
                            <textarea className="form-control form-control-sm" id="c_address" rows="4"></textarea>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-sm btn-secondary' onClick={createClose}>Close</button>
                    <button className='btn btn-sm btn-primary' onClick={handleCreate}>Save</button>
                </Modal.Footer>
            </Modal>

            {/* Edit Modal */}
            <Modal show={eShow} onHide={editClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-8">
                            <label className="col-form-label">NAME</label>
                            <input type="text" className="form-control form-control-sm" useRef={name} id="e_name" defaultValue={selectedCompany?.name} />
                        </div>
                        <div className="col-md-4">
                            <label className="col-form-label">PHONE</label>
                            <input type="text" className="form-control form-control-sm" id="e_phone" defaultValue={selectedCompany?.phone} />
                        </div>
                        <div className="col-md-12">
                            <label className="col-form-label">EMAIL</label>
                            <input type="email" className="form-control form-control-sm" id="e_email" defaultValue={selectedCompany?.email} />
                        </div>
                        <div className="col-md-12">
                            <label className="col-form-label">ADDRESS</label>
                            <textarea className="form-control form-control-sm" id="e_address" rows="4" defaultValue={selectedCompany?.address}></textarea>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-sm btn-secondary' onClick={editClose}>Close</button>
                    <button className='btn btn-sm btn-primary' onClick={handleEdit}>Save Changes</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Company;
