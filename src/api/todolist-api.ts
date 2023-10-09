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
    createTodolist(title: string) {
        return instance.post(`todo-lists`, {title})
    },
    deleteTodolist(todoId: string) {
        return instance.delete(`todo-lists/${todoId}`)
    },
    updateTitleTodolist(todoId: string, title: string) {
        return instance.put(`todo-lists/${todoId}`, {title})
    },
}
