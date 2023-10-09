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

type DeleteTodolistType = {
    resultCode: number
    messages: string[],
    fieldsErrors: []
    data: {}
}

type CreateTodolistType = {
    data: {
        item: TodolistType
    };
    messages: string[];
    resultCode: number;
    fieldsErrors: []
}

type UpdateTodolistType = {
    resultCode: number
    messages: string[],
    data: {},
    fieldsErrors: []
}

export const todolistAPI = {
    getTodolists() {
        return instance.get<TodolistType[]>(`todo-lists`)
    },
    createTodolist(title: string) {
        return instance.post<CreateTodolistType>(`todo-lists`, {title})
    },
    deleteTodolist(todoId: string) {
        return instance.delete<DeleteTodolistType>(`todo-lists/${todoId}`)
    },
    updateTitleTodolist(todoId: string, title: string) {
        return instance.put<UpdateTodolistType>(`todo-lists/${todoId}`, {title})
    },
}
