// КАСТОМНЫЙ ХУК

import { useEffect, useState } from "react"

function useLocalStorage(initState, localStorageKey) { //обертка над существующими хуками

const dataFromLS = JSON.parse(window.localStorage.getItem(localStorageKey)) 

const data = dataFromLS ? dataFromLS : initState

const [todos, setTodos] = useState(data)

 useEffect(() => {
  window.localStorage.setItem(localStorageKey, JSON.stringify(todos))
 }, [todos])

return [todos, setTodos]
}

export default useLocalStorage;
