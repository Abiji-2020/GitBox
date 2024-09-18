import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { FaProjectDiagram } from "react-icons/fa";

export default function OutlineCard({ project }) {
  return (
    <Card sx={{ maxWidth: 345, position: "relative" }}>
      <CardActionArea>
        <div style={{ textAlign: "center", padding: "20px" }}>
          <FaProjectDiagram size={50} color="teal" />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.projectName}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {project.projectDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={project.link}>
          Go to Project
        </Button>
      </CardActions>
    </Card>
  );
}
