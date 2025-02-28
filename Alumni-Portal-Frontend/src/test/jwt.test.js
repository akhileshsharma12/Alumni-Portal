import axios from "axios";


export const gettoken = async () => {
    const response = await axios.post('http://localhost:2008/api/user/login', {
        email: "akhilesh@dev.com",
        password: "akhilesh@1234",

    },
    { withCredentials: true });
    await getuser();
}

export const getuser = async () => {
    const response = await axios.get('http://localhost:2008/api/user/get-user',
    { withCredentials: true });
    console.dir(response);
}