const { default: axios } = require("axios");

const GetAllGrades=()=>axios.get('/api/grade')

export default{
    GetAllGrades
}