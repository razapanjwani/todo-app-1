import { Itask } from "./types/tasks"

const baseUrl = "https://json-server-todo-37670f781fc2.herokuapp.com"

export const getAllTodos = async (): Promise<Itask[]> => {
    const res = await fetch(`${baseUrl}/todos`, { cache: "no-store"});
    const todos = await res.json();
    return todos;
}

export const addTodo =async (todo: Itask): Promise<Itask[]> => {
    const res = await fetch(`${baseUrl}/todos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo)
    });
    const newtodo = await res.json();
    return newtodo;
}

export const editTodo =async (todo: Itask): Promise<Itask[]> => {
    const res = await fetch(`${baseUrl}/todos/${todo.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo)
    });
    const updatedTodo = await res.json();
    return updatedTodo;
}

export const deleteTodo =async (id: string): Promise<void> => {
    const res = await fetch(`${baseUrl}/todos/${id}`, {
        method: "DELETE",
    })
}