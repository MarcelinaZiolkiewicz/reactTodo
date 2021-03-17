import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = (props) => {

    const [theme, setTheme] = useState(true);
    const [inputTask, setInputTask] = useState("");



    const storeObject = {
        theme,
        setTheme,
        inputTask,
        setInputTask
    }

    return(
        <AppContext.Provider value={storeObject}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppProvider;