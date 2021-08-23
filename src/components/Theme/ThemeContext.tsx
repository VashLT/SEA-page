import React from "react";

const ThemeContext = React.createContext({
    theme: '',
    setTheme: (theme: string) => { }
});

export default ThemeContext;