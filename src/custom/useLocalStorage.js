// КАСТОМНЫЙ ХУК
import { useEffect, useState } from "react"

function useLocalStorage(initState, localStorageKey) { //обертка над существующими хуками
// initState значение по умолчанию
// localStorageKey ключ для хранения данных

const dataFromLS = JSON.parse(window.localStorage.getItem(localStorageKey)) 
// достает данные из localStorage, когда запускается функция useLocalStorage
//JSON.parse так как localStorage хранит только строки

const data = dataFromLS ? dataFromLS : initState

const [todos, setTodos] = useState(data)

 useEffect(() => {
  window.localStorage.setItem(localStorageKey, JSON.stringify(todos))
 }, [todos])

return [todos, setTodos]
}

export default useLocalStorage;
