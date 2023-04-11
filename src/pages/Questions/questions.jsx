import { useState, useRef, useEffect } from "react";
import Text from "../../component/Text/text";
import {
  TextField,
  Button,
  Paper,
  Avatar,
  Typography,
  CircularProgress,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import AttachFileIcon from "@mui/icons-material/AttachFile";

export default function Questions() {
  const [conversation, setConversation] = useState([]);
  const [message, setMessage] = useState({ coment: "", type: "send" });
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [conversation]);
  const handleSend = async (e) => {
    try {
      setConversation([...conversation, message]);
      setMessage({ coment: "", type: "send" });
      setIsLoading(true);

      const response = await axios.post(
        "http://localhost:3001/botinteractivo",
        {
          consulta: message.coment,
        }
      );
      const data = response.data.result;
      setConversation((prevConversation) => [...prevConversation, data]);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleText = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async (e) => {
    const formData = new FormData();
    formData.append("pdf", file);

    fetch("http://localhost:3001/upload-pdf", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(async () => await axios.post("http://localhost:3001/proccess"))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="containerMessage">
        <Paper
          sx={{
            marginTop: "0px",
            padding: "10px",
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
            Preguntas ?
          </Typography>
        </Paper>

        {conversation.map((data) => (
          <Text key={data.id} text={data.coment} type={data.type} />
        ))}
        {isLoading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
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
              value={message.coment}
              onChange={handleText}
              name="coment"
            />
            <Button
              variant="content"
              onClick={handleSend}
              sx={{ marginTop: "10px" }}
              disabled={isLoading}
            >
              <SendIcon />
            </Button>
            <label htmlFor="upload-file">
              <input
                accept="*/*" // Aceptar todos los tipos de archivos
                id="upload-file"
                type="file"
                onChange={handleChange}
                style={{ display: "none" }}
                inputProps={{ "aria-label": "upload file" }}
              />
              <Button
                variant="content"
                component="span"
                sx={{ marginTop: "10px" }}
              >
                <AttachFileIcon />
              </Button>
              <Button variant="content" onClick={handleFileUpload}>
                {" "}
                UP file
              </Button>
            </label>
          </div>
        </div>
      </Paper>
    </>
  );
}
