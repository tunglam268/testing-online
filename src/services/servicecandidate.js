import axios from "axios";
const TIMEOUT = 1 * 60 * 1000;
const  SERVER_API_URL = "http://localhost:8080/";

export const api = axios.create({
    baseURL: SERVER_API_URL,
    timeout: TIMEOUT,
})

const getListCandidate = () => {
    return api.get("/staff/listcandidate");
}

const addCandidate = data => {
    return api.post("/staff/addcandidate", data);
}

const deleteCandidate = id => {
    return api.delete(`staff/deletecandidate/${id}`)
}

const CandidateService = {
    getListCandidate,
    addCandidate,
    deleteCandidate
}

export default CandidateService;