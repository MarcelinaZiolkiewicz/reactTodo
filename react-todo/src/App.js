import React from "react";
import styled from 'styled-components';
import Background from "./components/Background.jsx";
import TodoBox from "./components/TodoBox";
import AppProvider from "./context/AppContext";



const App = () => {
  return (
      <AppProvider>
        <Background>
            <TodoBox/>
        </Background>
      </AppProvider>
  );
}

export default App;
