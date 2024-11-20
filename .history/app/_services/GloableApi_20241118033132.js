const { default: axios } = require("axios");

const GetALlGrades=()=>axios.get('/api/grades')

export default{
    GetALlGrades
}