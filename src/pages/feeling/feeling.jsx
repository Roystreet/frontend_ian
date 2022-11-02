import { useState } from "react";
import Input from "@mui/material/Input";
import Text from "../../component/Text/text";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import axios from "axios";

export default function Feeling() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [coment, setComent] = useState("");

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
      <div>
        <Typography>Que opinas del servicio?</Typography>
      </div>
      <div className="separetor"></div>
      <Typography>{showMessage && coment}</Typography>
      {coment && <Text text={coment} type={"response"}></Text>}
      <Typography> {message}</Typography>
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
    </>
  );
}
