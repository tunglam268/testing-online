import http from "../http-common"

const getListCandidate = () => {
    return http.get("/staff/listcandidate");
}
const addCandidate = data => {
    return http.post("/staff/addcandidate", data);
}
const deleteCandidate = id => {
    return http.delete(`staff/delete/${id}`)
}

const CandidateService = {
    getListCandidate,
    addCandidate,
    deleteCandidate
}

export default CandidateService;