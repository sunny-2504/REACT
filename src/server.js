import axios from "axios";

const promise = axios.get('http://localhost:4000/notes')

promise.then(response => {
    console.log(response)
})