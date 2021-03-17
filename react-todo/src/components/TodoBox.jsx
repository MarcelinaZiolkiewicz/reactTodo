import React from "react";
import styled from 'styled-components';

import ToggleTheme from "./ToggleTheme";
import InputTask from "./InputTask";

const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
`

const Content = styled.div`
  //background-color: navajowhite;
  width: 80vw;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  
//  dodać media queris na mobile
  
`

const Info = styled.p`
  color: ${props => props.theme.colors.Light_Grayish_Blue};
  padding: 10px 15px;
`

const TodoBox = () => {
    return(
        <Box>
            <Content>
                <ToggleTheme/>
                <InputTask/>
            {/*lista zadan i na dole listy zagniezdzone sortowanie*/}
            <Info>
                Drag end drop to reorder list
            </Info>
            </Content>
        </Box>
    );
}

export default TodoBox;