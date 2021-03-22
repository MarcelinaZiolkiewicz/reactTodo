import React, {useContext} from 'react';

import {FooterButton} from "../theme/styled";
import {AppContext} from "../context/AppContext";

const SortButton = ({button}) => {

    const {handleChangeSortType, theme} = useContext(AppContext);

    const handleChangeSort = () => {
        handleChangeSortType(button.type);
    }

    return(
      <FooterButton isActive={button.isActive} onClick={handleChangeSort} isDarkMode={theme}>{button.name}</FooterButton>
    );
}

export default SortButton;