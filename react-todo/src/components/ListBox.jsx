import React, {useContext} from "react";
import styled from  'styled-components';

import {AppContext} from "../context/AppContext";
import TaskElement from "./TaskElement";
import TaskSort from "./TaskSort";

const ListWrapper = styled.div`
  background-color: ${props => props.theme.colors.Very_Dark_Desaturated_Blue};
  margin-top: 10vh;
  border-radius: 8px;
`

const ListBox = () => {

    const {tasksList} = useContext(AppContext);

    const singleTask = tasksList.map(task => (
        <TaskElement task={task}/>
    ));

    return(
        <ListWrapper>
            <ul>
                {singleTask}
            </ul>
            <TaskSort/>
        </ListWrapper>
    );
}

export default ListBox;