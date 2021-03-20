import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const AppContext = createContext();

// - View the optimal layout for the app depending on their device's screen size
// - See hover states for all interactive elements on the page
//  Delete todos from the list
// - Filter by all/active/complete todos
// - Clear all completed todos
// - Toggle light and dark mode

const initialObject = [
    {
        id: "d55d21f0-34b9-4e45-a79b-31abe63880ba",
        isDone: false,
        task: "dupa"
    },
    {
        id: "4a01e1e0-731e-477b-bc8e-1b6c30f1453b",
        isDone: false,
        task: "Zrobić coś tam"
    }];

const AppProvider = (props) => {

    const [theme, setTheme] = useState(true);
    const [inputTask, setInputTask] = useState("");
    const [tasksList, setTasksList] = useState(initialObject);

    const [taskStatus, setTaskStatus] = useState(false);

    const handleAddTask = () => {
        setTasksList([
            ...tasksList,
            {
                id: uuidv4(),
                task: inputTask,
                isDone: false,
            }
        ]);

        console.log(tasksList);
    }

    const handleDeleteTask = id => {
        const tasks = [...tasksList];
        const thisTaskId = tasks.findIndex(task => task.id === id);
        tasks.splice(thisTaskId, 1);
        setTasksList(tasks);
    }

    const handleChangeTaskStatus = id => {
        const tasks = [...tasksList];
        const thisTaskId = tasks.findIndex(task => task.id === id);
        const thisTask = tasks[thisTaskId];
        thisTask.isDone = !thisTask.isDone;
        setTasksList(tasks);

    }

    const storeObject = {
        theme,
        setTheme,
        inputTask,
        setInputTask,
        taskStatus,
        setTaskStatus,
        tasksList,
        handleAddTask,
        handleDeleteTask,
        handleChangeTaskStatus
    }

    return(
        <AppContext.Provider value={storeObject}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppProvider;