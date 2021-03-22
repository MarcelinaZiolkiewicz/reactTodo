import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const AppContext = createContext();

const initialObject = [
    {
        id: "d55d21f0-34b9-4e45-a79b-31abe63880ba",
        isDone: true,
        task: "Complete online JavaScript course"
    },
    {
        id: "4a01e1e0-731e-477b-bc8e-1b6c30f1453b",
        isDone: false,
        task: "Jog around the park 3x"
    },
    {
        id: "d3f1cf10-1d6b-42fe-b25c-3bc1e15cde86",
        isDone: false,
        task: "10 minutes meditation"
    },
    {
        id: "b0ebd801-35d8-42a8-9dcf-17779d9628e4",
        isDone: false,
        task: "Read for 1 hour"
    },
    {
        id: "28c02e0b-01f4-4128-80bf-384f6f2d4919",
        isDone: false,
        task: "Pick up groceries"
    },
    {
        id: "1c9fc3f9-0541-42ed-8211-d8a1814a1580",
        isDone: false,
        task: "Complete Todo App on Frontend Mentor"
    },
];


// - View the optimal layout for the app depending on their device's screen size
//font musi byc rezponsywny - task i input
//sortwoanie - drugi div - display none - ma mobilce się włącza


const AppProvider = props => {

    const [theme, setTheme] = useState(true);
    const [inputTask, setInputTask] = useState("");
    const [tasksList, setTasksList] = useState(initialObject);
    const [sortType, setSortType] = useState('ALL');
    const [buttons, setButtons] = useState([
        {
            type: 'ALL',
            name: 'All',
            isActive: true,
        },
        {
            type: 'ACTIVE',
            name: 'Active',
            isActive: false,
        },
        {
            type: 'COMPLETED',
            name: 'Completed',
            isActive: false,
        }
    ]);

    const handleAddTask = () => {
        if  (inputTask){
            setTasksList([
                ...tasksList,
                {
                    id: uuidv4(),
                    task: inputTask,
                    isDone: false,
                }
            ]);
        }


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

    const handleClearComplete = () => {
        const completed = [...tasksList];
        const onlyUncomplete = completed.filter(task => !task.isDone);
        setTasksList(onlyUncomplete);
    }

    const handleChangeSortType = type => {
        if (type === 'ALL'){
            handleDisableActiveSort('ALL');
            setSortType('ALL');
        }
        if (type === 'ACTIVE'){
            handleDisableActiveSort('ACTIVE');
            setSortType('ACTIVE');
        }
        if (type === 'COMPLETED'){
            handleDisableActiveSort('COMPLETED');
            setSortType('COMPLETED');
        }
    }

    const handleDisableActiveSort = type => {
        const buttonsList = [...buttons];
        let toDisable = buttonsList.filter(button => button.isActive);
        toDisable[0].isActive = false;

        let newActive = buttonsList.findIndex(button => button.type === type);
        buttonsList[newActive].isActive = true;

        setButtons(buttonsList);
    }

    const storeObject = {
        theme,
        setTheme,
        inputTask,
        setInputTask,
        tasksList,
        sortType,
        setSortType,
        buttons,
        handleAddTask,
        handleDeleteTask,
        handleChangeTaskStatus,
        handleClearComplete,
        handleChangeSortType
    }

    return(
        <AppContext.Provider value={storeObject}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppProvider;