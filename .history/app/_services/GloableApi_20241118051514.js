const { default: axios } = require("axios");

const GetAllGrades=()=>axios.get('/api/grade');
// const CreateNewStudent=(data)=>axios.post('/api/student', data);
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api',
  });


const CreateNewStudent = (data) =>  axiosInstance.post("/api/student", inputs);

export default{
    GetAllGrades, 
    CreateNewStudent
}