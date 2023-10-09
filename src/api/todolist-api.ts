import axios from 'axios'

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': 'f31ffa20-0ff3-4086-b0e8-28ca7dcbaac2',
    },
}

export const todolistAPI = {
    getTodolists() {
        return axios.get(`https://social-network.samuraijs.com/api/1.1/todo-lists`, settings)
    },
    createTodolists() {
        return axios.post(`https://social-network.samuraijs.com/api/1.1/todo-lists`, {title: 'NEW-TITLE'}, settings)
    }
}
