import { useState } from "react";
import Input from "@mui/material/Input";
import Text from "../../component/Text/text";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import axios from "axios";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";
import { Spin } from "antd";
import SendIcon from "@mui/icons-material/Send";

export default function Feeling() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [coment, setComent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleText = (e) => {
    setShowMessage(false);
    setText(e.target.value);
  };
  const handleSend = async (e) => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3001/sentimientos",
        data: {
          consulta: text,
        },
      });
      const data = response.data.result;
      console.log(data);
      setComent(text);
      setMessage(data);
      setShowMessage(true);
      setText("");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="center-class">
        <Typography variant="h4"> Que opinas del servicio?</Typography>
      </div>
      <div className="separetor"></div>
      <div className="container-feeling">
        {message && (
          <div className="feeling">
            <Typography> {message}</Typography>
          </div>
        )}
      </div>
      {/*
        <div className="barraSend">
          <div>
            <TextField
              id="outlined-basic"
              label="Mensaje"
              variant="outlined"
              value={text}
              onChange={handleText}
            />
            <Button variant="content" onClick={handleSend}>
              send
            </Button>
          </div>
        </div>
  */}
      {
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={20}
        >
          <div className="barraSend">
            <div>
              <TextField
                id="outlined-basic"
                label="Mensaje"
                variant="outlined"
                value={text}
                onChange={handleText}
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
      }
    </>
  );
}
