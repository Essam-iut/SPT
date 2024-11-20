const { default: axios } = require("axios");

const GetAllGrades=()=>axios.get('/api/grade')
const CreateNewStudent=(data)=>axi post('/api/student', data)

export default{
    GetAllGrades, 
    CreateNewStudent
}