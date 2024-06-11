import "./Chat.css";
import React from "react";
import Chatting from "../ChatV1/component/chat/Chatting";
import Detail from "../ChatV1/component/detail/Detail";
import List from "../ChatV1/component/list/List";
import { Box, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

const Main = styled(Box)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[900],
  flexGrow: 1,
  height: "100vh",
  overflow: "auto",
}));

const Chat: React.FC = () => (
  <Main component="main">
    <Toolbar />
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <div className="chat-background">
        <div className="chat-container">
          <List />
          <Chatting />
          <Detail />
        </div>
      </div>
    </Container>
  </Main>
);

export default Chat;
