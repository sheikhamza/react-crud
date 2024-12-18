import axios from "axios";

export const api = axios.create({
    baseURL: "http://124.29.237.31:8090/ords/api/",
})

export const getData = () => {
    try {
        return api.get("/payroll/getallpaydata");
    } catch (error) {
        console.error("Error fetching branch data:", error);
        throw error;
    }
}

const branchApi  = axios.create({
    baseURL: "https://675ab2a5099e3090dbe5a484.mockapi.io/api"
})
// Get Branch
export const branchData = () => {
    try {
        return branchApi.get('/branch');
    } catch (error) {
        console.error("Error fetching branch data:", error);
        throw error;
    }
}

// Delete Branch
export const deleteBranch = (id) => {
    try {
        return branchApi.delete(`/branch/${id}`);
    } catch (error) {
        console.error("Error fetching branch data:", error);
        throw error;
    }
}

export const createBranch = (item) => {
    try {
        return branchApi.post('/branch', item);
    } catch (error) {
        console.error("Error fetching branch data:", error);
        throw error;
    }
}

// Edit Branch
export const editBranch = (id, item) => {
    try {
        return branchApi.put(`/branch/${id}`, item);
    } catch (error) {
        console.error("Error fetching branch data:", error);
        throw error;
    }
}
