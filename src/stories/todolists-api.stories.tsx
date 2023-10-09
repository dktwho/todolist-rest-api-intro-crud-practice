import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}
export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolists().then((res) => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.createTodolist('NEW TL').then((res) => setState(res.data.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoIdToRemove = '34e490aa-75f9-4351-97f3-fb00fd599c9f'
        todolistAPI.deleteTodolist(todoIdToRemove).then((res) => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoIdToUpdateTitle = '916408aa-f8a3-49b3-b9ae-b21b615c1b1e'
        const todoToUpdateTitle = 'ANGULAR v10'
        todolistAPI.updateTitleTodolist(todoIdToUpdateTitle, todoToUpdateTitle).then((res) => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const GetTodolistTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '916408aa-f8a3-49b3-b9ae-b21b615c1b1e'
        todolistAPI.getTodolistTasks(todoId)
            .then((res) => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolistTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '916408aa-f8a3-49b3-b9ae-b21b615c1b1e'
        const title = 'new task Angular 2'
        todolistAPI.createTodolistTasks(todoId, title)
            .then((res) => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolistTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '916408aa-f8a3-49b3-b9ae-b21b615c1b1e'
        const taskId = '27cd0220-73b9-4e14-a2c5-b9fae47b1cca'
        todolistAPI.deleteTodolistTask(todoId, taskId)
            .then((res) => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '916408aa-f8a3-49b3-b9ae-b21b615c1b1e'
        const taskId = '5e6103f7-4ac2-4656-ac79-3517f554d26f'
        const title = 'NEW NEW  task Angular 2'
        todolistAPI.updateTodolistTask(todoId, taskId, title )
            .then((res) => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

