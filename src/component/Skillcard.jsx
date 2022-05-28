import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CodeIcon from "@mui/icons-material/Code";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@mui/material";

export default function Skillcard(props) {
  //   const { icon, label } = props;
  return (
    <Card sx={{ Width: "100%", background: "transparent", m: "0% auto" }}>
      <CardContent sx={{ width: {md:"300px"} }}>
        <Icon>
          <FontAwesomeIcon
            icon={props.icon}
            color="hsla(41, 100%, 50%, 0.89)"
            viewBox="0 0 800 800"
            style={{  height: "35px", width: "35px" }}
          ></FontAwesomeIcon>
        </Icon>
        <Typography
          variant="h5"
          sx={{ float: "right", color: "hsla(41, 100%, 50%, 0.89)" }}
        >
          {props.label}
        </Typography>
        <hr
          style={{
            border: 0,
            marginTop: "2%",
            width: "100%",
            height: "2px",
            background: "hsla(41,100%,50%,0.89)",
          }}
        ></hr>
      </CardContent>
    </Card>
  );
}
