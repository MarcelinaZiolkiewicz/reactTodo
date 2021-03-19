import React, {useContext, useState} from "react";
import styled, {css} from  'styled-components';

import {Circle, Square} from "../theme/styled";

import {AppContext} from "../context/AppContext";

import del from '../images/icon-cross.svg';

const Task = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  background-color: transparent;
  padding: 10px 15px;
  border-bottom: 2px solid ${props => props.theme.colors.Components_Grayish_Blue};
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

const DeleteButton = styled.svg`
  background-image: url(${del});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  height: 30px;
  width: 30px;
  margin-left: 10px;
`

const TaskElement = (props) => {

    const {taskStatus} = useContext(AppContext);
    const [thisTaskStatus, setThisTaskStatus] = useState(taskStatus);

    const handleTaskStatus = () => {
        setThisTaskStatus(prevValue => !prevValue);
    }

    const handleDelete = () => {
        console.log('delete' + props.id);
    }

    return (
        <Task>
            <Circle onClick={handleTaskStatus.bind(this)} isDone={thisTaskStatus}/>
            <TaskText isDone={thisTaskStatus}>{props.taskText}</TaskText>
            <DeleteButton onClick={handleDelete.bind(this)} />
        </Task>
    );
}

export default TaskElement;