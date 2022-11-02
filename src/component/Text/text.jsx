import { Card } from "@mui/material";
import { CardContent } from "@mui/material";

export default function Text({ text, type }) {
  return (
    <Card className="margin-card">
      <CardContent className={type == "send" ? "textSend" : "textResponse"}>
        {text}
      </CardContent>
    </Card>
  );
}
