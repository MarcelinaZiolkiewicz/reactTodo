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
  border-radius: 8px;
`

const TaskInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.1em;
  margin-left: 20px;
  color: white;
`
const Submit = styled.button`
  display: none;
`

const Form = styled.form`
  width: calc(100% - 35px);
`

const InputTask = () => {

    const {inputTask, setInputTask,handleAddTask} = useContext(AppContext);


    const handleInputChange = e => {
        setInputTask(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        handleAddTask();
        setInputTask("");
    }

    return(
      <InputBox>
          <Circle hoverUnavailable={true}/>
          <Form onSubmit={handleSubmit}>
            <TaskInput type="text" onChange={handleInputChange} value={inputTask} placeholder="Create a new todo..."/>
          </Form>
          <Submit type="submit"/>
      </InputBox>
    );
}

export default InputTask;