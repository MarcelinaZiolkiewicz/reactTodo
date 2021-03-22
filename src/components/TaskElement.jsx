import React, {useContext} from "react";
import styled, {css} from  'styled-components';

import {AppContext} from "../context/AppContext";
import {Circle} from "../theme/styled";
import del from '../images/icon-cross.svg';

const DeleteButton = styled.svg`
  display: none;
  background-image: url(${del});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  height: 30px;
  width: 30px;
  margin-left: 10px;
  
  &:hover{
    cursor: pointer;
  }
`

const Task = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  background-color: transparent;
  padding: 10px 15px;
  border-bottom: 1px solid ${props => props.isDarkMode ? props.theme.colors.Components_Grayish_Blue : props.theme.colors.Light_Grayish_Blue};
  overflow: hidden;
  
  &:hover{
    ${DeleteButton}{
      display: block;
    }
  }
`

const TaskText = styled.p`
  color: ${props => props.isDarkMode ? props.theme.colors.Light_Grayish_Blue : props.theme.colors.Very_Dark_Blue};
  margin-left: 10px;
  width: calc(100% - 10px - 65px);
  text-align: left;
  font-weight: 600;
  font-size: 1.1em;
  
  ${({isDone}) => 
    isDone &&
        css`
          text-decoration: line-through;
          color: ${props => props.isDarkMode ? props.theme.colors.Background_Grayish_Blue : props.theme.colors.Dark_Grayish_Blue};
          font-weight: 700;
        `
  };

  @media (max-width: 720px) {  
    font-size: 0.8em;
    font-weight: 500;
  }
`

const TaskElement = ({task}) => {

    const { handleDeleteTask, handleChangeTaskStatus, theme } = useContext(AppContext);

    const handleTaskStatus = () => {
        handleChangeTaskStatus(task.id);
    }

    const handleDelete = () => {
        handleDeleteTask(task.id);
    }

    return (
        <Task isDarkMode={theme}>
            <Circle onClick={handleTaskStatus} isDone={task.isDone} isDarkMode={theme}/>
            <TaskText isDone={task.isDone} isDarkMode={theme}>{task.task}</TaskText>
            <DeleteButton onClick={handleDelete} />
        </Task>
    );
}

export default TaskElement;