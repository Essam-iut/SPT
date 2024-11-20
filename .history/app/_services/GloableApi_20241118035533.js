const { default: axios } = require("axios");

const GetAllGrades=()=>axios.get('/api/grade')
cosnt CreateNewStudent=(data)=>axios.post('/api/')

export default{
    GetAllGrades
}