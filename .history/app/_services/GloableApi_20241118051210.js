const { default: axios } = require("axios");

const GetAllGrades=()=>axios.get('/api/grade');
// const CreateNewStudent=(data)=>axios.post('/api/student', data);
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8800/api',
  });
  
await axiosInstance.post("/auth/register", inputs);
// const CreateNewStudent = (data) => axios.post('/api/student', data);

export default{
    GetAllGrades, 
    CreateNewStudent
}