const { default: axios } = require("axios");

const GetAllGrades=()=>axios.get('/api/grades')

export default{
    GetALlGrades
}