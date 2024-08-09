import React, {useState} from 'react';



function ToDoList(){

const[tasks, setTasks] = useState(["Kahvaltı Yap", "İşe Git", "Eve Dön"])

const[newTask, setNewTask] = useState("")


function handleIputChange(event) {
    setNewTask(event.target.value);
}

function addTask(){

    if(newTask.trim()!==""){
        setTasks (t => [...tasks, newTask]);
        setNewTask("");
    }

}

function removeTask(index){
    const updateTask = tasks.filter((_,i)=> i !== index );
    setTasks(updateTask);
}

function moveTaskUp(index){
    if(index >0){
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index -1]] = [updatedTasks[index -1], updatedTasks[index]]
        setTasks(updatedTasks);
    }

}

function moveTaskDown(index){
    if(index < tasks.length-1){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index +1]] = [updatedTasks[index +1], updatedTasks[index]]
        setTasks(updatedTasks);
    }

}


return(
    <div className='To-Do-List'>
        <h1>To Do App</h1>
        <input type="text"
        onChange={handleIputChange}
        value={newTask}
        placeholder='Enter Task'
          />
          <button className='button-add' onClick={addTask}>Add</button>

    <ol>
        {tasks.map((tasks, index)=>
        <li key={index}>
            <span className='text'>{tasks}</span>
            <button className='delete-button' onClick={() => removeTask (index)}>Delete</button>
            <button className='taskUp-button' onClick={() =>moveTaskUp(index)}>⬆️</button>
            <button className='taskDown-button'onClick={() => moveTaskDown (index)}>⬇️</button>
        </li>
        )}
    </ol>

    </div>
)

}


export default ToDoList