import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { branchData, createBranch, deleteBranch, editBranch } from '../../api/Api';

const Branch = () => {
    
    // Get Data
    const [data, setData] = useState([]);

    const Data = async () => {
        try {
            const res = await branchData();
            if (res && res.data && Array.isArray(res.data)) {
                setData(res.data);
            } else {
                console.error("Data format is not as expected.");
                setData([]);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    // Create Item
    const [cShow, setCshow] = useState(false);
    const createClose = () => setCshow(false);
        const createShow = () => {
            setAddData({
                name: "",
                company: "",
                email: "",
                phone: "",
                city: ""
            });            
            setCshow(true);
        }

    const [addData, setAddData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        city: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddData((prev) => ({ ...prev, [name]: value }));
    };

    const createData = async () => {
        try {
            const res = await createBranch(addData);
            if (res.status = 200) {
                await Data();
                setAddData({ name: "", company: "", email: "", phone: "", city: "" });
            }
        } catch (error) {
            console.error("Error creating data:", error);
        }
    };

    const createSubmit = async (e) => {
        e.preventDefault();
        await createData();
    };


    // Edit Item
    const [eShow, setEshow] = useState(false);
    const editClose = () => setEshow(false);
    const [updateData, setUpdateData] = useState({});

    const editShow = (item) => {
        setEshow(true);
        setUpdateData(item);
    };

    const editData = async () => {
        try {
            const res = await editBranch(updateData.id, addData);
            if (res.status === 200) {
                await Data();
                editClose();
            }
        } catch (error) {
            console.error("Error editing data:", error);
        }
    }

    useEffect(() => {
        if (updateData) {
            setAddData({
                name: updateData.name || "",
                company: updateData.company || "",
                email: updateData.email || "",
                phone: updateData.phone || "",
                city: updateData.city || ""
            });
        }
    }, [updateData]);

    // Delete Item
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this item?");
        if (!confirmDelete) return;

        try {
            const res = await deleteBranch(id);
            if (res.status === 200) {
                await Data();
            }
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    }
    

    useEffect(() => {
        Data();
    },[]);


  return (
    <>
      <div className="container-fluid">
            <div className='d-flex justify-content-between'>
                <div>
                    {/* Page Heading  */}
                    <h1 className="h3 mb-2 text-gray-800">Branch</h1>
                </div>
                <div>
                    <button className='btn btn-sm btn-success' onClick={createShow}>CREATE</button>
                </div>
            </div>
                {/* DataTales Example  */}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <div className='freeze-table'>
                            <table className="table table-bordered"id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>ID #</th>
                                        <th>NAME</th>
                                        <th>COMAPNY</th>
                                        <th>EMAIL</th>
                                        <th>PHONE</th>
                                        <th>CITY</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item) => {
                                            return(
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>
                                                    <a href='#' onClick={() => editShow(item)}>{item.name}</a>
                                                </td>
                                                <td>{item.company}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.city}</td>
                                                <td>
                                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                                                </td>
                                            </tr>)
                                        })
                                    }
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
                <form method='POST' onSubmit={createSubmit}>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-md-8">
                                <label className="col-form-label">NAME</label>
                                <input type="text" className="form-control form-control-sm"
                                name='name'
                                value={addData.name}
                                onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-md-4">
                                <label className="col-form-label">COMAPNY</label>
                                <input type="text"
                                className="form-control form-control-sm"
                                name='company'
                                value={addData.company}
                                onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-md-12">
                                <label className="col-form-label">EMAIL</label>
                                <input type="text"
                                className="form-control form-control-sm"
                                name='email'
                                value={addData.email}
                                onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-md-12">
                                <label className="col-form-label">PHONE</label>
                                <input type="text"
                                className="form-control form-control-sm"
                                name='phone'
                                value={addData.phone}
                                onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-md-12">
                                <label className="col-form-label">CITY</label>
                                <input type="text"
                                className="form-control form-control-sm"
                                name='city'
                                value={addData.city}
                                onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type='button' className='btn btn-sm btn-secondary' onClick={createClose}>Close</button>
                        <button type='submit' className='btn btn-sm btn-primary' onClick={createClose}>Save</button>
                    </Modal.Footer>
                </form>
            </Modal>

        {/* Edit Modal */}
        <Modal show={eShow} onHide={editClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit</Modal.Title>
            </Modal.Header>
            <form onSubmit={editData}>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-8">
                            <label className="col-form-label">NAME</label>
                            <input 
                                type="text" 
                                className="form-control form-control-sm" 
                                id="e_name"
                                value={updateData.name || ''}
                                onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
                            />
                        </div>

                        <div className="col-md-4">
                            <label className="col-form-label">COMPANY</label>
                            <input 
                                type="text" 
                                className="form-control form-control-sm" 
                                id="e_company"
                                value={updateData.company || ''}
                                onChange={(e) => setUpdateData({ ...updateData, company: e.target.value })}
                            />
                        </div>

                        <div className="col-md-12">
                            <label className="col-form-label">EMAIL</label>
                            <input 
                                type="text" 
                                className="form-control form-control-sm" 
                                id="e_email"
                                value={updateData.email || ''}
                                onChange={(e) => setUpdateData({ ...updateData, email: e.target.value })}
                            />
                        </div>

                        <div className="col-md-12">
                            <label className="col-form-label">PHONE</label>
                            <input 
                                type="text" 
                                className="form-control form-control-sm" 
                                id="e_phone"
                                value={updateData.phone || ''}
                                onChange={(e) => setUpdateData({ ...updateData, phone: e.target.value })}
                            />
                        </div>

                        <div className="col-md-12">
                            <label className="col-form-label">CITY</label>
                            <input 
                                type="text" 
                                className="form-control form-control-sm" 
                                id="e_city"
                                value={updateData.city || ''}
                                onChange={(e) => setUpdateData({ ...updateData, city: e.target.value })}
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type='button' className='btn btn-sm btn-secondary' variant="secondary" onClick={editClose}>CLOSE</button>
                    <button type='submit' className='btn btn-sm btn-primary' variant="primary" onClick={editClose}>UPDATE</button>
                </Modal.Footer>
            </form>
        </Modal>

    </>
  )
}

export default Branch
