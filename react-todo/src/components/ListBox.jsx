import React, {useContext} from "react";
import styled from  'styled-components';

import {AppContext} from "../context/AppContext";
import TaskElement from "./TaskElement";
import TaskSort from "./TaskSort";


const ListWrapper = styled.div`
  background-color: ${props => props.isDarkMode ? props.theme.colors.Very_Dark_Desaturated_Blue : props.theme.colors.Light_Grayish_Blue_hover};
  margin-top: 3vh;
  border-radius: 8px;
`

const ListBox = () => {

    const {tasksList, sortType, theme} = useContext(AppContext);

    const showMeSortedTasks = () => {

        if (sortType === 'ALL'){
            return tasksList;
        }
        else if (sortType === 'ACTIVE'){
            const tasks = [...tasksList];
            return tasks.filter(task => !task.isDone);
        }
        else if (sortType === 'COMPLETED'){
            const tasks = [...tasksList];
            return tasks.filter(task => task.isDone);
        }
    }

    let taskToRender = showMeSortedTasks();

    const singleTask = taskToRender.map(task => (
        <TaskElement task={task}/>
    ));

    return(
        <ListWrapper isDarkMode={theme}>
            <ul>
                {singleTask}
            </ul>
            <TaskSort/>
        </ListWrapper>
    );
}

export default ListBox;