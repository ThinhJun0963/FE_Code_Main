import { useState, FC, ReactElement } from "react";
import Topbar from "../scenes/global/Topbar";
import Sidebar from "../scenes/global/Sidebar";
import Dashboard from "../scenes/dashboard";
import Team from "../scenes/team";
import Invoices from "../scenes/invoices";
import Contacts from "../scenes/contacts";
import Bar from "../scenes/bar";
import Form from "../scenes/form";
import Line from "../scenes/line";
import Pie from "../scenes/pie";
import FAQ from "../scenes/faq";
import Geography from "../scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import Calendar from "../scenes/calendar/calendar";
import "./SystemAdminPage.css";

interface Scene {
  [key: string]: ReactElement;
}

const App: FC = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [currentScene, setCurrentScene] = useState("dashboard");

  const scenes: Scene = {
    dashboard: <Dashboard />,
    team: <Team />,
    contacts: <Contacts />,
    invoices: <Invoices />,
    form: <Form />,
    calendar: <Calendar />,
    FAQ: <FAQ />,
    bar: <Bar />,
    pie: <Pie />,
    line: <Line />,
    geography: <Geography />,
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} setCurrentScene={setCurrentScene} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            {scenes[currentScene]}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
