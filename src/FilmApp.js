import './FilmApp.css';
import FilmAppbar from './components/FilmAppbar'
import FilmSearchBar from './components/FilmSearchBar'
import PostForm from './components/PostForm'
import { useState, useEffect, useRef } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import TodoList from './components/TodoList.js';
import { v4 as uuidv4 } from 'uuid';
const LOCAL_STORAGE_KEY = 'todoApp.todos'

export default function FilmApp() {

  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos) 
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if(name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value= null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }
  return (
    <div className="App">
     <FilmAppbar />
     
    <>
    <div className="centre"> 
      
      <input id = "towatchinput" ref = {todoNameRef} type = "text" />
      <button id = "addmovie" onClick={handleAddTodo}><h4> Add Movie To Watch </h4> </button>
      <button id = "removewatched" onClick={handleClearTodos}><h4> Clear Watched </h4> </button>
      <div><h1>{todos.filter(todo => !todo.complete).length} Movies To Watch </h1> </div>
      <h2>
      <TodoList todos={todos} toggleTodo = {toggleTodo} />
      </h2>
    </div>
    <div>
  </div>
    </>
    
    {/* <PostForm /> */}
     <FilmSearchBar />
     
    
</div>
  )
}



    {/* <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/users"> Actors </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );




function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


} */}

