import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '794181ab-6d62-4cfb-bc9f-d539dfac55f1',
    },
})

type TodolistType = {
    id: string
    addedDate: Date
    order: number
    title: string
}

type DeleteTodolistType =  {
    resultCode: number
    messages: string[],
        data: {}
}

export const todolistAPI = {
    getTodolists() {
        return instance.get<TodolistType[]>(`todo-lists`)
    },
    createTodolist(title: string) {
        return instance.post(`todo-lists`, {title})
    },
    deleteTodolist(todoId: string) {
        return instance.delete<DeleteTodolistType>(`todo-lists/${todoId}`)
    },
    updateTitleTodolist(todoId: string, title: string) {
        return instance.put(`todo-lists/${todoId}`, {title})
    },
}
