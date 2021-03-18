import React, {useContext, useState} from "react";
import styled from  'styled-components';

import {Circle, CircleFixed} from "../theme/styled";
import {AppContext} from "../context/AppContext";

const Task = styled.li`
  
  display: flex;
  align-items: center;
  list-style: none;
  background-color: transparent;
  padding: 10px 15px;
  text-align: left;
  border-bottom: 2px solid ${props => props.theme.colors.Components_Grayish_Blue};
`

const TaskText = styled.p`
  color: white;
  margin-left: 1vw;
`

const TaskElement = () => {

    const {taskStatus} = useContext(AppContext);
    const [thisTaskStatus, setThisTaskStatus] = useState(taskStatus);

    const handleTaskStatus = () => {
        setThisTaskStatus(prevValue => !prevValue);
    }

    return (
        <Task>
            <CircleFixed onClick={handleTaskStatus.bind(this)} isDone={thisTaskStatus}/>
            <TaskText>Zadańsko</TaskText>
        </Task>
    );
}

export default TaskElement;