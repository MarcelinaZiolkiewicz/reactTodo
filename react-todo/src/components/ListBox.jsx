import React, {useContext, useState} from "react";
import styled from  'styled-components';

import {Circle} from "../theme/styled";
import {AppContext} from "../context/AppContext";
import TaskElement from "./TaskElement";
import TaskSort from "./TaskSort";

const ListWrapper = styled.div`
  background-color: ${props => props.theme.colors.Very_Dark_Desaturated_Blue};
  margin-top: 10vh;
  border-radius: 8px;
`

const ListBox = () => {

    return(
        <ListWrapper>
            <ul>
                <TaskElement/>
                <TaskElement/>
                <TaskElement/>
                <TaskElement/>
            </ul>
            <TaskSort/>
        </ListWrapper>
    );
}

export default ListBox;