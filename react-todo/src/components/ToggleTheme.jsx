import React, {useContext, useEffect} from "react";
import styled from 'styled-components';

import sun from '../images/icon-sun.svg';
import moon from '../images/icon-moon.svg';

import {AppContext} from "../context/AppContext";

const Toggle = styled.section`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 5px;
  color: white;
  padding: 10px 0px;
`
const Text = styled.p`
  display: inline-block;
`

const ThemeButton = styled.div`
    display: inline-block;
    background-image: ${props => props.isDark ? `url(${sun})` : `url(${moon})`};
    height: 40px;
    width: 40px;
    background-position: center;
    background-repeat: no-repeat;
    transition: .3s;
  
    &:hover{
      transform: scale(1.2);
    }
`

const ToggleTheme = () => {

    const {theme, setTheme} = useContext(AppContext)

    const handleChangeTheme = () => {
        setTheme(prevValue => !prevValue);
        console.log(theme);
    }

    return(
        <Toggle>
            <Text>
                todo
            </Text>
            <ThemeButton onClick={handleChangeTheme} isDark={theme}/>
        </Toggle>
    );
}

export default ToggleTheme;