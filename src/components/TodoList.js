import React from 'react';
import Todo from './Todo';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


export default function TodoList({ todos, toggleTodo }) {

  const paperStyle={padding:'5px 1px', width: 300, margin:"10px auto"}
  return (
   todos.map(todo => {
    return (
      <Paper elevation={3} style={paperStyle}>
    <Todo key = {todo.id} toggleTodo = {toggleTodo} todo = {todo} />
    </Paper>
    )
   })
  )
}
