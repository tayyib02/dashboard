import { RouterProvider } from "react-router-dom";
import "./styles/app.scss";
import routes from "./router/routes";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/MUITheme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes}></RouterProvider>;
    </ThemeProvider>
  );
}

export default App;
