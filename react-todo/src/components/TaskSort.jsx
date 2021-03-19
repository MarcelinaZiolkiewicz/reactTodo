import React from "react";
import styled from 'styled-components';

const SortElement = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  color: ${props => props.theme.colors.Background_Grayish_Blue};
`


const TaskSort = () => {
    return(
        <SortElement>
            <div style={{display: "inline-block"}}> items left</div>
            <div style={{display: "inline-block"}}>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            <div style={{display: "inline-block"}}>
                <button>Clear Completed</button>
            </div>
        </SortElement>
    );
}

export default TaskSort;