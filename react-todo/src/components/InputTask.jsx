import React, {useContext} from 'react';

import styled from 'styled-components';
import {Circle} from "../theme/styled";

import {AppContext} from "../context/AppContext";

const InputBox = styled.section`
  display: flex;
  align-items: center;
  text-align: left;
  padding: 15px 25px;
  margin-top: 2vh;
  background-color: ${props => props.isDarkMode ? props.theme.colors.Very_Dark_Desaturated_Blue : props.theme.colors.Light_Grayish_Blue_hover};
  border-radius: 8px;
`

const TaskInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.2em;
  margin-left: 20px;
  font-weight: 600;
  color: ${props => props.isDarkMode ? props.theme.colors.Light_Grayish_Blue : props.theme.colors.Background_Grayish_Blue};
`
const Submit = styled.button`
  display: none;
`

const Form = styled.form`
  width: calc(100% - 35px);
`

const InputTask = () => {

    const {inputTask, setInputTask,handleAddTask, theme} = useContext(AppContext);


    const handleInputChange = e => {
        setInputTask(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        handleAddTask();
        setInputTask("");
    }

    return(
      <InputBox isDarkMode={theme}>
          <Circle hoverUnavailable={true} isDarkMode={theme}/>
          <Form onSubmit={handleSubmit}>
            <TaskInput
                type="text"
                onChange={handleInputChange}
                value={inputTask}
                placeholder="Create a new todo..."
                isDarkMode={theme}
            />
          </Form>
          <Submit type="submit"/>
      </InputBox>
    );
}

export default InputTask;