import axios from "axios";

export const apiUrl = 'http://api.stackexchange.com'

export const getUsers = async () => {

    return axios.get(`${apiUrl}/2.2/users?pagesize=20&order=desc&sort=reputation&site=stackoverflow`, { maxRedirects: 0 })
}