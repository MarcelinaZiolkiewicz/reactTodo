import React, {useContext} from 'react';

import {FooterButton} from "../theme/styled";
import {AppContext} from "../context/AppContext";

const SortButton = ({button}) => {

    const {handleChangeSortType, sortType} = useContext(AppContext);

    const handleChangeSort = () => {
        handleChangeSortType(button.type);
    }

    return(
      <FooterButton isActive={button.isActive} onClick={handleChangeSort}>{button.name}</FooterButton>
    );
}

export default SortButton;