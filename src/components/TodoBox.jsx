import React, {useContext} from "react";
import styled from 'styled-components';

import ToggleTheme from "./ToggleTheme";
import InputTask from "./InputTask";
import ListBox from "./ListBox";
import {AppContext} from "../context/AppContext";

const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
`

const Content = styled.div`
  width: 80vw;
  max-width: 550px;
  margin: 10vh auto 0 auto;
  text-align: center;
`

const Info = styled.p`
  margin-top: 40px;
  color: ${props => 
          props.isDarkMode 
                  ? props.theme.colors.Components_Grayish_Blue 
                  : props.theme.colors.Dark_Grayish_Blue
          };
  font-weight: 600;
  padding: 10px 15px;
  font-size: 12px;
`

const TodoBox = () => {

    const {theme} = useContext(AppContext);

    return(
        <Box>
            <Content>
                <ToggleTheme/>
                <InputTask/>
                <ListBox/>
                <Info isDarkMode={theme}>
                    Drag and drop to reorder list
                    (Not available yet)
                </Info>
            </Content>
        </Box>
    );
}

export default TodoBox;