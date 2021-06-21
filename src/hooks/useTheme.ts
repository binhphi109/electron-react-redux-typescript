import { useEffect, useState } from 'react';
import { setToLocalStorage, getFromLocalStorage } from '../utils/storage';

const DEFAULT_THEME = 'light';

export const useTheme = () => {
    const [theme, setTheme] = useState(DEFAULT_THEME);

    const updateTheme = (theme: string) => {
        setToLocalStorage('theme', theme);
        setTheme(theme);
        document.documentElement.className = '';
        document.documentElement.classList.add(`theme-${theme}`);
    };

    useEffect(() => {
        const localTheme = getFromLocalStorage('theme');
        updateTheme(localTheme || DEFAULT_THEME);
    }, []);
    
    return { theme, setTheme: updateTheme };
};