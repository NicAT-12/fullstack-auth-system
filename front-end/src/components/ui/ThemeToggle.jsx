const ThemeToggle = ({ theme, handlerTheme }) => {
    return (
        <button className="theme-toggle" type="button" onClick={handlerTheme}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
    );
};

export default ThemeToggle;