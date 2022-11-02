import { useState, useRef } from "react";
import Text from "../../component/Text/text";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";

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
      <div className="containerMessage">
        <h1> Venta simulada </h1>
        {messagee.current &&
          messagee.current.map((data) => {
            return <Text text={data.coment} type={data.type}></Text>;
          })}
      </div>
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
          <Button variant="content" onClick={handleSend}>
            send
          </Button>
        </div>
      </div>
    </>
  );
}
