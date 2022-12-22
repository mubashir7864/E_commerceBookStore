import axios from "axios";
import { baseUrl} from "./Components/constjs/const";

const instance = axios.create({
    baseURL : baseUrl,
})

export default instance