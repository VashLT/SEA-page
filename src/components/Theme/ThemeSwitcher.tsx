import React, { useContext, useCallback } from 'react';
import { ReactComponent as SunIcon } from '../../images/icon/sun.svg';
import { ReactComponent as MoonIcon } from '../../images/icon/moon.svg'
import ThemeContext from './ThemeContext';

export default function ThemeSwitcher() {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = useCallback(() => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }, [theme, setTheme]);

    return (
        <div id="themeSwitcher" className="c-theme_switcher" onClick={() => toggleTheme()}>
            {theme === "dark"
                ? <MoonIcon />
                : <SunIcon />
            }
        </div>
    )
}
