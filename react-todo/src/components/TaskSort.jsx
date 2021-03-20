import React, {useContext} from "react";
import styled from 'styled-components';
import {AppContext} from "../context/AppContext";
import {FooterButton} from '../theme/styled';
import SortButton from "./SortButton";

const SortElement = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  color: ${props => props.theme.colors.Background_Grayish_Blue};
`
const ButtonWrapper = styled.div`
  display: inline-block;
`

const Items = styled.p`
  color: ${props => props.theme.colors.Background_Grayish_Blue};
  font-weight: 600;
  padding: 5px 8px;
`

const TaskSort = () => {

    const {handleClearComplete, buttons, tasksList} = useContext(AppContext);

    let itemsLeft = tasksList.length;

    const Buttons = buttons.map(button => (
        <SortButton button={button}/>
    ));

    return(
        <SortElement>
            <ButtonWrapper>
                <Items>{itemsLeft} items left</Items>
            </ButtonWrapper>
            <ButtonWrapper>
                {Buttons}
            </ButtonWrapper>
            <ButtonWrapper>
                <FooterButton onClick={handleClearComplete}>Clear Completed</FooterButton>
            </ButtonWrapper>
        </SortElement>
    );
}

export default TaskSort;