import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const AppContext = createContext();

const AppProvider = (props) => {

    const [theme, setTheme] = useState(true);
    const [inputTask, setInputTask] = useState("");
    const [tasksList, setTasksList] = useState([]);

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


    const storeObject = {
        theme,
        setTheme,
        inputTask,
        setInputTask,
        taskStatus,
        setTaskStatus,
        handleAddTask,
    }

    return(
        <AppContext.Provider value={storeObject}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppProvider;