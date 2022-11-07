import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Avatar } from "@mui/material";
import { Box } from "@mui/system";

export default function Text({ text, type }) {
  return (
    <Box
      component="div"
      className={
        type == "send"
          ? "cardsend " + "margin-card "
          : "cardresponse " + "margin-card"
      }
    >
      <Box
        component="div"
        className={type == "send" ? "textSend boxchat" : "textResponse boxchat"}
      >
        {text}
      </Box>
    </Box>
  );
}
