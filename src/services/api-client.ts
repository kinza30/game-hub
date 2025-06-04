import axios from "axios";
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'114f11d34e024b04945b7d1bb8788a39'
    }
})