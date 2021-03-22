import React, {useContext} from "react";
import styled from 'styled-components';
import {AppContext} from "../context/AppContext";
import {FooterButton} from '../theme/styled';
import SortButton from "./SortButton";

const SortElement = styled.div`
  display: flex; 
  justify-content: space-between;
  padding: 10px 15px;
  color: ${props => props.theme.colors.Background_Grayish_Blue};
`
const ButtonWrapper = styled.div`
  display: inline-block;

  @media (max-width: 720px){
    display: ${props => props.onlyDesktop && 'none'};
  }
`

const Items = styled.p`
  color: ${props => props.isDarkMode ? props.theme.colors.Background_Grayish_Blue : props.theme.colors.Light_Grayish_Blue};
  font-weight: 600;
  padding: 5px 8px;
  font-size: 12px;
`

const TaskSort = () => {

    const {handleClearComplete, buttons, tasksList, theme} = useContext(AppContext);

    let itemsLeft = () => {
        const tasks = [...tasksList];
        const active = tasks.filter(task => !task.isDone);
        return active.length;
    }

    const Buttons = buttons.map(button => (
        <SortButton button={button}/>
    ));

    return(
        <>
            <SortElement>
                <ButtonWrapper>
                    <Items isDarkMode={theme}>{itemsLeft()} items left</Items>
                </ButtonWrapper>
                <ButtonWrapper onlyDesktop={true}>
                    {Buttons}
                </ButtonWrapper>
                <ButtonWrapper>
                    <FooterButton onClick={handleClearComplete} isDarkMode={theme}>Clear Completed</FooterButton>
                </ButtonWrapper>
            </SortElement>


        </>
    );
}

export default TaskSort;