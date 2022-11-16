import { useState, useRef } from "react";
import Text from "../../component/Text/text";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";
import { Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/joy";

export default function CrossSold() {
  const [conversation, setConversation] = useState([]);
  const [message, setMessage] = useState({ coment: "", type: "send" });
  const messagee = useRef([]);

  const handleSend = async (e) => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3001/botinteractivo",
        data: {
          consulta: message.coment,
        },
      });
      const data = response.data.result;
      messagee.current.push(message);
      messagee.current.push(data);
      setMessage({ coment: "", type: "send" });
    } catch (e) {
      console.log(e);
    }
  };

  const handleText = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container-member">
        <Paper
          sx={{
            marginTop: "0px",
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "10px",
            display: "flex",
            justifyContent: "flex-start",
            alignContent: "center",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          <Avatar src="/ventas.jpeg" sx={{ width: "85px", height: "85px" }} />
          <Typography
            variant="button"
            sx={{ fontSize: "30px", fontWeight: "bold" }}
          >
            Ventas
          </Typography>
        </Paper>
      </div>
      <div className="container-message-total">
        {messagee.current &&
          messagee.current.map((data) => {
            return <Text text={data.coment} type={data.type}></Text>;
          })}
      </div>

      <Paper sx={{ height: "10vh", paddingTop: "20px" }} elevation={20}>
        <div className="barraSend">
          <div>
            <TextField
              id="outlined-basic"
              label="Mensaje"
              variant="outlined"
              value={message.coment}
              onChange={handleText}
              name="coment"
            />
            <Button
              variant="content"
              onClick={handleSend}
              sx={{ marginTop: "10px" }}
            >
              <SendIcon />
            </Button>
          </div>
        </div>
      </Paper>
    </>
  );
}
