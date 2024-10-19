import { Box, Chip, Grid2, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import React, { useState } from "react";

import darwinImage from "../assets/img/darwin.jpg";
import isaganiImg from "../assets/img/isagani.jpg";
import expressIcon from "../assets/img/icon/ExpressJS-Light.svg";
import FirebaseIcon from "../assets/img/icon/Firebase-Light.svg";
import FlutterIcon from "../assets/img/icon/Flutter-Light.svg";
import KotlinIcon from "../assets/img/icon/Kotlin-Light.svg";
import laravelIcon from "../assets/img/icon/Laravel-Light.svg";
import mongotIcon from "../assets/img/icon/MongoDB.svg";
import mySQLIcon from "../assets/img/icon/MySQL-Light.svg";
import reactIcon from "../assets/img/icon/React-Light.svg";
import springbootIcon from "../assets/img/icon/Spring-Light.svg";
import tailwindIcon from "../assets/img/icon/TailwindCSS-Light.svg";

export default function AboutContainer() {
  const [isFlipped, setIsFlipped] = useState(false);

  const isaganiInfo = {
    name: "Isagani Lapira Jr.",
    description:
      "My name is Isagani Lapira Jr. I'm a software engineer who is passionate about writing code and developing applications. I specialize on both web and mobile applications.Before I worked as a small freelance developers that builds different technology like mobile and web applications. Being passionate in development, I was able to become one of the Microsoft Learn Student Ambassador (MLSA)-Beta, which allows me to teach other students about programming.",
    image: isaganiImg,
    tech_stack: [
      tailwindIcon,
      reactIcon,
      springbootIcon,
      FlutterIcon,
      KotlinIcon,
      FirebaseIcon,
      mySQLIcon,
    ],
  };
  const darwinInfo = {
    name: "Darwin Ramos",
    description:
      "My name is Darwin Ramos, and I have an experience in creating projects across various platform. These include web application using JS and PHP, Java Swing desktop application, Android application using Android Studio, desktop game with Unity, and Arduino Uno micro-controller projects. Among all the platforms, web development has captivated me the most. And I am currently learning React, Tailwind, Express to further enhance my skills.",
    image: darwinImage,
    tech_stack: [
      tailwindIcon,
      reactIcon,
      expressIcon,
      mongotIcon,
      laravelIcon,
      mySQLIcon,
    ],
  };

  const handleToggle = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Grid2
      container
      sx={{
        backgroundColor: "primary.secondary",
        overflow: "hidden",
      }}
    >
      <Grid2
        size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          transform: {
            xs: "",

            md: isFlipped ? "translateX(100%)" : "translateX(0)",
          },
          transition: "all 1000ms",
          p: 5,
        }}
      >
        <Box>
          <Chip
            label={`Developer ${isFlipped ? "01" : "00"}`}
            color="primary"
          />
        </Box>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
          }}
        >
          {isFlipped ? darwinInfo.name : isaganiInfo.name}
        </Typography>
        <Typography variant="body1">
          {isFlipped ? darwinInfo.description : isaganiInfo.description}
        </Typography>
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
            }}
          >
            Tech Stack
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            mt: 1,
          }}
        >
          {isFlipped
            ? darwinInfo.tech_stack.map((icon, index) => (
                <img
                  key={index}
                  src={icon}
                  alt="Tech Stack"
                  width="80px"
                  height="80px"
                />
              ))
            : isaganiInfo.tech_stack.map((icon, index) => (
                <img
                  key={index}
                  src={icon}
                  alt="Tech Stack"
                  width="80px"
                  height="80px"
                />
              ))}
        </Box>
        <Box
          sx={{
            mt: 6,
            color: "white",
            cursor: "pointer",
            textAlign: isFlipped ? "start" : "end",
          }}
          onClick={handleToggle}
        >
          {isFlipped ? <ArrowBackIcon /> : <ArrowForwardIcon />}
        </Box>
      </Grid2>

      <Grid2
        container
        component="img"
        size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
        src={isFlipped ? darwinInfo.image : isaganiInfo.image}
        alt={isFlipped ? darwinInfo.name : isaganiInfo.name}
        height="auto"
        sx={{
          transform: {
            xs: "",

            md: isFlipped ? "translateX(-100%)" : "translateX(0)",
          },

          objectFit: "cover",
          transition: "all 1000ms",
        }}
      />
    </Grid2>
  );
}
