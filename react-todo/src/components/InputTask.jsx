import React, {useContext} from 'react';

import styled from 'styled-components';
import {Circle} from "../theme/styled";

import {AppContext} from "../context/AppContext";

const InputBox = styled.section`
  display: flex;
  align-items: center;
  text-align: left;
  padding: 15px 25px;
  margin-top: 4vh;
  background-color: ${props => props.theme.colors.Very_Dark_Desaturated_Blue};
`

const TaskInput = styled.input`
  width: 70%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.1em;
  margin-left: 20px;
  color: white;
`

const InputTask = () => {

    const {inputTask, setInputTask, setTaskStatus, taskStatus} = useContext(AppContext);

    const handleTaskStatus = () => {
        setTaskStatus(prevValue => !prevValue);
    }

    const handleInputChange = e => {
        setInputTask(e.target.value);
    }

    return(
      <InputBox>
          <Circle onClick={handleTaskStatus} isDone={taskStatus}/>
          <TaskInput type="text" onChange={handleInputChange} value={inputTask} placeholder="Create a new todo..."/>
      </InputBox>
    );
}

export default InputTask;