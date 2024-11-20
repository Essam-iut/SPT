const { default: axios } = require("axios");

const GetAllGrades=()=>axios.get('/api/grade');
// const CreateNewStudent=(data)=>axios.post('/api/student', data);
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8800/api',
  });


const CreateNewStudent = (data) => await axiosInstance.post("/auth/register", inputs);

export default{
    GetAllGrades, 
    CreateNewStudent
}