import React, {useContext} from "react";
import styled from  'styled-components';

import {AppContext} from "../context/AppContext";
import TaskElement from "./TaskElement";
import TaskSort from "./TaskSort";
import SortButton from "./SortButton";
import {act} from "@testing-library/react";

const ListWrapper = styled.div`
  background-color: ${props => props.theme.colors.Very_Dark_Desaturated_Blue};
  margin-top: 10vh;
  border-radius: 8px;
`

const ListBox = () => {

    const {tasksList, sortType} = useContext(AppContext);

    const showMeSortedTasks = () => {

        if (sortType === 'ALL'){
            return tasksList;
        }
        else if (sortType === 'ACTIVE'){
            const tasks = [...tasksList];
            const active = tasks.filter(task => !task.isDone);
            return active;
        }
        else if (sortType === 'COMPLETED'){
            const tasks = [...tasksList];
            const completed = tasks.filter(task => task.isDone);
            return completed;
        }
    }

    let taskToRender = showMeSortedTasks();

    const singleTask = taskToRender.map(task => (
        <TaskElement task={task}/>
    ));

    return(
        <ListWrapper>
            <ul>
                {singleTask}
            </ul>
            <TaskSort/>
        </ListWrapper>
    );
}

export default ListBox;