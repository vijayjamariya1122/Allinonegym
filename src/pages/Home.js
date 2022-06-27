import React, { useState } from "react";
import { Box } from "@mui/material";
import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";

const Home = () => {
  const [exercise, setExercise] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        bodyPart={bodyPart}
        setExercise={setExercise}
        setBodyPart={setBodyPart}
      />
      <Exercises
        bodyPart={bodyPart}
        setExercise={setExercise}
        exercise={exercise}
      />
    </Box>
  );
};

export default Home;
