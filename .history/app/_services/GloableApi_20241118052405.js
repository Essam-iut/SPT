const { default: axios } = require("axios");

const GetAllGrades=()=>axios.get('/api/grade');
const CreateNewStudent = (data) => axios.post('http://localhost:3000/api/student', data);


export default{
    GetAllGrades, 
    CreateNewStudent
}