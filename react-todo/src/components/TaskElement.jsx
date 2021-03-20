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
`

const Task = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  background-color: transparent;
  padding: 10px 15px;
  border-bottom: 2px solid ${props => props.theme.colors.Components_Grayish_Blue};

  &:hover{
    ${DeleteButton}{
      display: block;
    }
  }
`

const TaskText = styled.p`
  color: white;
  margin-left: 1vw;
  width: calc(100% - 1vw - 65px);
  text-align: left;
  
  ${({isDone}) => 
    isDone &&
        css`
          text-decoration: line-through;
          color: ${props => props.theme.colors.Background_Grayish_Blue};
          font-weight: 700;
        `
    }
`


const TaskElement = ({task}) => {

    const { handleDeleteTask, handleChangeTaskStatus } = useContext(AppContext);

    const handleTaskStatus = () => {
        handleChangeTaskStatus(task.id);
    }

    const handleDelete = () => {
        handleDeleteTask(task.id);
    }

    return (
        <Task>
            <Circle onClick={handleTaskStatus} isDone={task.isDone}/>
            <TaskText isDone={task.isDone}>{task.task}</TaskText>
            <DeleteButton onClick={handleDelete} />
        </Task>
    );
}

export default TaskElement;