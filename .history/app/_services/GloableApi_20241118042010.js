const { default: axios } = require("axios");

const GetAllGrades=()=>axios.get('/api/grade')
const CreateNewStudent=(data)=>axios.POST('/api/student', data)

export default{
    GetAllGrades, 
    CreateNewStudent
}