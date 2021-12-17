import axios from "axios"
import { useEffect, useState } from "react"
import './Users.css'
import { v4 as uuidv4 } from 'uuid';


import {Link} from 'react-router-dom';

export default function Users() {

    const [user, setUser] = useState([])
    const [userInput, setUserInput] = useState("")

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res.data)
            setUser(res.data)
        })
    }, [])

    useEffect(() => {
        document.title="Nombre de tâches (" + user.length + ")";
        // document.title = `Nombre de tâches (${todos.length})`;
    },[user])


    function handleTaskInput(e) {
        setUserInput(e.target.value)
    }

    function addTask(e) {
        e.preventDefault();
        console.log("Formulaire soumis");

        const newTask = {id: uuidv4(), title: userInput, completed:false}
        console.log(newTask)
        setUser([newTask, ...user])
    }

    function deleteUser(userId) {
        console.log(userId)

        // Que notre nouveau tableau, c'est toutes les tâches
        // sauf celle qu'on veut supprimer
        // celle qui a pour id taskId

        const newUser = user.filter(user => user.id !== userId)
        setUser(newUser)
    }

    function toggleCompleteUser(userId) {
        console.log("On veut changer le status de l'utilisateur!" + userId)

        // Faire une copie de toutes nos tâches
        const currTasks = [...user];
        console.log(currTasks);

        // Retrouver notre tâche qu'on veut modifier
        const index = currTasks.findIndex(task => task.id === userId)
        console.log(index)

        // De modifier la valeur de cette tâche
        // !true -> false     !false -> true
        currTasks[index].completed = !currTasks[index].completed

        // Remet à jour notre todo grâce à setTodo pour cette nouvelle liste
        setUser(currTasks)
    }

    return (
        <div>
            <h1>Il y a{user.length} Utilisateurs</h1>
            <form onSubmit={addTask}>
                <input type="text" value={userInput} onChange={handleTaskInput} />
                <button type="submit">OK</button>
            </form>


            <ul>
                {user.map(task => (
                    <li key={task.id}
                        className={task.completed ? "task task-completed" : "task"}
                    >
                        {task.title}

                        <input type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleCompleteUser(task.id)}
                        />

                        <Link to={"/Users/" + task.id} className="btn btn-primary">EN SAVOIR PLUS</Link>

                        <button className="btn btn-danger"
                            onClick={() => deleteUser(user.id)}>SUPPRIMER</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}