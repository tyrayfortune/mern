
import React, {useState} from 'react';

const Todo = (props) => {
  // WHATEVER CAN CHANGE NEEDS TO BE PUT IN STATE. (I.E ANYTHING UPDATED, DELETED, ECT.)
  const [ newTodo, setNewTodo] = useState("")
  const [todos, setTodos] = useState([])
  //prevents default submit for react

  const handleNewTodoSubmit = (event) =>{
    event.preventDefault();
    //so you cant add a blank length
    if (newTodo.length === 0){
      return
    }
    const todoItem = {
      text: newTodo,
      complete: false
    }
    //indirectly setting the state(you dont want to directly set as it messing order of operations with rendering)
    //spreads all the todos, and adds new todo
    setTodos([...todos, todoItem])
    //sets the input box to be empty string so when user submits it reset
    setNewTodo("")
  }

  //deletes the item from the index
  const handleTodoDelete = (index) => {
    //(i) is from the delete button, index is from this function
    //takes the index that you clicked on and filters it out and then resets the todos below
    const filteredTodos = todos.filter((todo, i) =>{
    return i != index;
    })
    //takes the new todos and passes it into the setTodos(which you can change unlike todos)
    setTodos(filteredTodos)
  }
  //handling checkbox logic
  const handleToggleComplete = (index) =>{
    const updateTodos = todos.map((todo, i) => {
      if (index === i){
        todo.complete = !todo.complete
      }
      return todo
    })

    setTodos(updateTodos)
  }

  return (
    <div style={{textAlign: "center"}}>
        <form 
          onSubmit={(event) =>{
            handleNewTodoSubmit(event)
          }}
        >
        <input onChange={(event) => {
          setNewTodo(event.target.value)
        }} 
          type="text"
          //resets the todo
          value={newTodo}
        />
        <div>
          <button>Add</button>
        </div>
        </form>
        {/* cycling through each todo */}
      {
        todos.map((todo, i) => {
          const todoClasses = ["bold", "italic"]
          // logic for if the todo is complete to have a line through
          if (todo.complete){
            todoClasses.push("strike-through")
          }
          return (
          <div key={(i)}>
            {/* checkbocx logic below */}
            <input  type="checkbox" onChange={(event)=>{
              handleToggleComplete(i)
            }} checked={todo.complete} style={{marginRight: "10px"}} />
            <span className={todoClasses.join(" ")}>{todo.text}</span>
            <button onClick={(event) =>{
              handleTodoDelete(i)
            }} style={{marginLeft: "10px"}}> Delete</button>
          </div>
          )
        })}
    </div>
  );
}

export default Todo