import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { mainListItems } from "../components/listItems";
import styles from "./Dashboard.module.css";

import {
  Box,
  Typography,
} from "@mui/material";


import './CalendarThree.css'
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { useEffect, useRef } from "react";
import viLocale from '@fullcalendar/core/locales/vi';

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const SlotRegister = () => {
  const calendarRef = useRef<FullCalendar>(null);
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const slotLabelContent = ({ date }: { date: Date }) => {
    const start = new Date(date);
    const end = new Date(date);
    end.setMinutes(end.getMinutes() + 30);

    const formatTime = (time: Date) => {
      const hours = time.getHours();
      const minutes = time.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    };

    return (
      <div>
        {formatTime(start)} - {formatTime(end)}
      </div>
    );
  };



  function formatDateTitle(dateInfo: { start: Date }): string {
    const startDate = dateInfo.start;
    const monthYear = startDate.toLocaleDateString('vi-VN', { month: 'long', year: 'numeric' }).replace('tháng', 'Tháng');
    const weekRange = getWeekRange(startDate, 'vi-VN'); // Updated to use Vietnamese locale

    if (weekRange[0].getMonth() === weekRange[1].getMonth()) {
      // Same month, format as "23 - 29 Tháng 6, 2024"
      return `${weekRange[0].getDate()} – ${weekRange[1].getDate()} ${monthYear}`;
    } else {
      // Different months, format as "23 Tháng 6 – 29 Tháng 7, 2024"
      const startMonthYear = weekRange[0].toLocaleDateString('vi-VN', { month: 'long', year: 'numeric' }).replace('tháng', 'Tháng');
      const endMonthYear = weekRange[1].toLocaleDateString('vi-VN', { month: 'long', year: 'numeric' }).replace('tháng', 'Tháng');
      return `${weekRange[0].getDate()} ${startMonthYear} – ${weekRange[1].getDate()} ${endMonthYear}`;
    }
  }

  function getWeekRange(date: Date, locale: string): [Date, Date] {
    const dayOfWeekIndex = (date.getDay() + 6) % 7;

    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - dayOfWeekIndex);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    return [startOfWeek, endOfWeek];
  }

  useEffect(() => {
    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      const updateTitle = (dateInfo: { start: Date }) => {
        const titleElement = document.querySelector('.fc-toolbar-title');
        if (titleElement) {
          titleElement.textContent = formatDateTitle(dateInfo);
        }
      };

      calendarApi.on('datesSet', updateTitle);

      updateTitle({ start: calendarApi.view.activeStart });

      return () => {
        calendarApi.off('datesSet', updateTitle);
      };
    }
  }, []);
  return (
    <Box sx={{ display: "flex", height: '100%' }}>
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Trang đăng kí slot khám
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {mainListItems}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          marginTop: 5.5,
          color: '#0d47a1',
          background: 'linear-gradient(to left, #e3f2fd, #f8fbff)',
          overflow: 'auto',


        }}
      >
        <div className={styles.mainContainer} >
          <div className={styles.main}>
            <div className={styles.mainContainer}>
              <div className={styles.main}>
                <div className={styles.content}>
                  <div className={styles.rowContainer}>
                    <div className={styles.fullColumn}>
                      <div className="calendar-three">
                        <FullCalendar
                          contentHeight="auto"
                          locale={viLocale}
                          ref={calendarRef}
                          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}

                          headerToolbar={{
                            left: "prev,next",
                            center: "title",
                            right: "today"
                          }}
                          buttonText={{
                            today: "Hôm nay",
                          
                          }}
                          initialView="timeGridWeek"
                          editable={false}
                          selectable={false}
                          nowIndicator={true}
                          selectMirror={true}
                          dayMaxEvents={true}
                          duration={{ days: 7 }}
                          slotDuration={'00:30:00'}
                          slotLabelInterval={'00:30:00'}
                          slotMinTime={'06:00:00'}
                          slotMaxTime={'21:00:00'}
                          slotLabelContent={slotLabelContent}
                          firstDay={0}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default SlotRegister;
