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
        const todoIdToRemove = '392cbb67-29eb-4a4c-912f-4fa46924e19a'
        todolistAPI.deleteTodolist(todoIdToRemove).then((res) => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoIdToUpdateTitle = '916408aa-f8a3-49b3-b9ae-b21b615c1b1e'
        const todoToUpdateTitle = 'ANGULAR v12'
        todolistAPI.updateTitleTodolist(todoIdToUpdateTitle, todoToUpdateTitle).then((res) => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

