import React from 'react';
import {StyleProvider} from '@ant-design/cssinjs';
import RootPage from "./page/RootPage";

function App() {
    return (
        <StyleProvider hashPriority="high">
            <RootPage/>
        </StyleProvider>
    );
}

export default App;
