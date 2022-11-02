import { Card } from "@mui/material";
import { CardContent } from "@mui/material";

export default function TextResponse({ text }) {
  return (
    <Card className="textResponse">
      <CardContent>{text}</CardContent>
    </Card>
  );
}
