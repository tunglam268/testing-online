import axios from "axios";
const TIMEOUT = 1 * 60 * 1000;
const  SERVER_API_URL = "http://localhost:8080/";

export const api = axios.create({
    baseURL: SERVER_API_URL,
    timeout: TIMEOUT,
})

const getListQuestion = () => {
    return api.get("/staff/getallquestion");
}

const addQuestion = data => {
    return api.post("/staff/addquestion", data);
}

const deleteQuestion = id => {
    return api.delete(`staff/deletequestion/${id}`)
}

const QuestionService = {
    getListQuestion,
    addQuestion,
    deleteQuestion
}

export default QuestionService;