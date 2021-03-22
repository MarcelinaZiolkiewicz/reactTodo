import React, {useContext} from "react";
import styled from  'styled-components';

import {AppContext} from "../context/AppContext";
import TaskElement from "./TaskElement";
import TaskSort from "./TaskSort";
import SortButton from "./SortButton";


const ListWrapper = styled.div`
  background-color: ${props => props.isDarkMode ? props.theme.colors.Very_Dark_Desaturated_Blue : props.theme.colors.Light_Grayish_Blue_hover};
  margin-top: 3vh;
  border-radius: 8px;
`

const SortButtons = styled.div`
  display: none;
  margin-top: 30px;
  background-color: ${props => props.isDarkMode ? props.theme.colors.Very_Dark_Desaturated_Blue : props.theme.colors.Light_Grayish_Blue_hover};
  padding: 8px 10px;
  border-radius: 8px;
  
  @media (max-width: 720px){
    display: block;
  }
`

const ListBox = () => {

    const {tasksList, sortType, theme, buttons} = useContext(AppContext);

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

    const Buttons = buttons.map(button => (
        <SortButton button={button}/>
    ));

    return(
        <>
            <ListWrapper isDarkMode={theme}>
                <ul>
                    {singleTask}
                </ul>
                <TaskSort/>
            </ListWrapper>

            <SortButtons isDarkMode={theme}>
                {Buttons}
            </SortButtons>
        </>
    );
}

export default ListBox;