const { default: axios } = require("axios");

const GetAllGrades=()=>axios.get('/api/grade')
const CreateNewStudent=(data)=>axios.post('/api/studnet')

export default{
    GetAllGrades
}