import React from "react";
import styled from 'styled-components';

const SortElement = styled.div`
  padding: 5px 10px;
  border: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to left, palevioletred, darkred);
`


const TaskSort = () => {
    return(
        <SortElement>
            łącznie zadań |  Wyczyść bla bla
        </SortElement>
    );
}

export default TaskSort;