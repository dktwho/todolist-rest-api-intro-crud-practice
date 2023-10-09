import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '794181ab-6d62-4cfb-bc9f-d539dfac55f1',
    },
})

type ResponseType<T = {}> = {
    resultCode: number,
    messages: string[],
    fieldsErrors: string[],
    data: T
}

type TodolistType = {
    id: string,
    addedDate: Date,
    order: number,
    title: string,
}

export const todolistAPI = {
    getTodolists() {
        return instance.get<TodolistType[]>(`todo-lists`)
    },
    createTodolist(title: string) {
        return instance.post<ResponseType<{ item: TodolistType }>>(`todo-lists`, {title})
    },
    deleteTodolist(todoId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todoId}`)
    },
    updateTitleTodolist(todoId: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${todoId}`, {title})
    },
}
