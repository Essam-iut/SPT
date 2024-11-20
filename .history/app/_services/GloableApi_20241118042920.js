const { default: axios } = require("axios");

const GetAllGrades=()=>axios.get('/api/grade')
const CreateNewStudent=(data)=>axios. post('/api/student', data)

export default{
    GetAllGrades, 
    CreateNewStudent
}