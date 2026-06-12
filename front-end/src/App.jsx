import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import AppRouter from "./routes/AppRouter";
import { useEffect } from "react";

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') ?? 'light';
  });

  const handlerTheme = () => {
    theme === 'light'
      ? setTheme('dark')
      : setTheme('light')
  };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme])

  return (
    <BrowserRouter>
      <AppRouter
        theme={theme}
        handlerTheme={handlerTheme}
      />
    </BrowserRouter>
  )
}

export default App;