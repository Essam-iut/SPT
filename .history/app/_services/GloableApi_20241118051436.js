const { default: axios } = require("axios");

const GetAllGrades=()=>axios.get('/api/grade');
// const CreateNewStudent=(data)=>axios.post('/api/student', data);
const axiosInstance = axios.create({
    baseURL: 'http://localhost:/api',
  });


const CreateNewStudent = (data) => await axiosInstance.post("/", inputs);

export default{
    GetAllGrades, 
    CreateNewStudent
}