import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '794181ab-6d62-4cfb-bc9f-d539dfac55f1',
    },
})

export const todolistAPI = {
    getTodolists() {
        return instance.get(`todo-lists`)
    },
    createTodolist() {
        return instance.post(`todo-lists`, {title: 'NEW-TITLE'})
    },
    deleteTodolist() {
        return instance.delete(`todo-lists/c3eb188a-be28-4508-a5e1-fd3acd0bff03`)
    },
    updateTitleTodolist() {
        return instance.put(`todo-lists/916408aa-f8a3-49b3-b9ae-b21b615c1b1e`, {title: 'ANGULAR v10'})
    },
}
