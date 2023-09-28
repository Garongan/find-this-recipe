import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ErrorPage() {
  return (
    <Card>
      <CardMedia
        sx={{ height: 295 }}
        image="11104.jpg"
        title="Error status"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          402 Error
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The server API has reached its maximum capacity for today, which means
          it is currently unable to process any more requests. We apologize for
          any inconvenience this may cause. Please consider revisiting our
          platform tomorrow when our server resources will be refreshed and
          ready to serve your needs. Thank you for your understanding and
          patience as we work to provide you with the best possible service.
        </Typography>
        <a href="http://www.freepik.com">Designed by pch.vector / Freepik</a>
      </CardContent>
    </Card>
  );
}
