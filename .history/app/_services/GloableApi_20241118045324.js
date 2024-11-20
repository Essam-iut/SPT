const { default: axios } = require("axios");

const GetAllGrades=()=>axios.get('/api/grade/rout.js');
// const CreateNewStudent=(data)=>axios.post('/api/student', data);
const CreateNewStudent = (data) => axios.post('/api/student/rout.js', data);

export default{
    GetAllGrades, 
    CreateNewStudent
}