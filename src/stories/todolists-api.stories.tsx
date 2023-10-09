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
        todolistAPI.createTodolist('NEW TODOLIST').then((res) => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoIdToRemove = '468a4e66-7acc-4310-9a5f-cade18f5df07'
        todolistAPI.deleteTodolist(todoIdToRemove).then((res) => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoIdToUpdateTitle = '916408aa-f8a3-49b3-b9ae-b21b615c1b1e'
        const todoToUpdateTitle = 'ANGULAR v11'
        todolistAPI.updateTitleTodolist(todoIdToUpdateTitle, todoToUpdateTitle).then((res) => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

