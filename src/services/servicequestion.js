import http from "../http-common"

const getAll = () => {
    return http.get("/staff/getalltest");
}

const getTestByLevel = (level) => {
    return http.get(`/staff/gettestbylevel/${level}`);
}

const getTestByName = (name) => {
    return http.get(`/staff/gettestbyname/${name}`);
}

const getTestByCode = (code) => {
    return http.get(`/staff/gettestbycode/${code}`);
}

const getTestBySubject = (subject) => {
    return http.get(`/staff/gettestbysubject/${subject}`);
}

const getTestById = (id) => {
    return http.get(`/staff/gettestbyid/${id}`);
}

const getTestByDone = (done) => {
    return http.get(`/staff/gettestbydone/${done}`);
}

const getTestByCandidated = (idCandidate) => {
    return http.get(`/staff/gettestbycandidateid/${idCandidate}`);
}

const deleteTestById = (id) => {
    return http.delete(`/staff/deletetest/${id}`);
}

const addQuestion = (data) => {
    return http.post("/staff/addquestion", data)
}

const editQuestion = (id, data) => {
    return http.put(`/staff/editquestion/${id}`, data)
}



const QuestionService = {
    getAll, getTestByLevel, getTestByName, getTestByCode, getTestBySubject,
    getTestById, getTestByDone, getTestByCandidated, deleteTestById, editQuestion,
    addQuestion
};

export default QuestionService;