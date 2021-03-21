import React, {useContext} from 'react';
import styled from 'styled-components';

import {AppContext} from "../context/AppContext";

import darkModeImg from '../images/bg-desktop-dark.jpg';
import lightModeImg from '../images/bg-desktop-light.jpg';

const Wrapper = styled.div`
  background-color: ${props => props.isDarkMode ? props.theme.colors.Very_Dark_Blue : props.theme.colors.Light_Grayish_Blue};
  height: 70vh;
`
const ImageTop = styled.div`
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 30vh;
`
const Background = ({children}) => {

    const {theme} = useContext(AppContext);

    return(
        <>
            <ImageTop img={theme ? darkModeImg : lightModeImg}/>
            <Wrapper isDarkMode={theme}/>
            {children}
        </>
    );
}

export default Background;