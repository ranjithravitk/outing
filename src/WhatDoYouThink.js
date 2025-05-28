import React, { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

function WhatDoYouThink() {
  const [answer, setAnswer] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const { width, height } = useWindowSize();

  const handleAnswer = (response) => {
    setAnswer(response);
    setSubmitted(true);

    if (response === "Yes") {
      // Send to Google Sheets or backend
      fetch(
        "https://docs.google.com/document/d/1UJ-bMfJGfh3oXJ2QWnlF8Kn5VyW7sCGgqXZPyxXIcc0/edit?usp=sharing",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ response: "Yes" }),
        }
      );
    }
  };

  const renderDogs = () => {
    if (!submitted) {
      return (
        <img
          src="/separate-dogs.png"
          alt="Dogs sitting apart"
          className="dog-img"
        />
      );
    }

    if (answer === "Yes") {
      return (
        <img src="/happy-dogs.png" alt="Dogs together" className="dog-img" />
      );
    }

    return <img src="/sad-dog.png" alt="Sad dog" className="dog-img" />;
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px 20px",
        fontFamily: "'Segoe UI', sans-serif",
        background: "#fff0f5",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{ color: "#cc0055", fontSize: "2.2rem", marginBottom: "30px" }}
      >
        Will you go on a date with me? 💕
      </h1>

      <div>{renderDogs()}</div>

      {!submitted && (
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleAnswer("Yes")}
            style={buttonStyle("#ff0055")}
          >
            Yes 😍
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleAnswer("No")}
            style={buttonStyle("#999")}
          >
            No 😢
          </motion.button>
        </div>
      )}

      {submitted && answer === "Yes" && (
        <>
          <Confetti width={width} height={height} />
          <h2 style={{ color: "#cc0055", marginTop: "30px" }}>
            Yayy! You just made my day! 💖
          </h2>
        </>
      )}

      {submitted && answer === "No" && (
        <h2 style={{ color: "#666", marginTop: "30px" }}>
          Ouch... I’ll go cry with my dog now 🐶💔
        </h2>
      )}
    </div>
  );
}

const buttonStyle = (bgColor) => ({
  padding: "14px 28px",
  fontSize: "1rem",
  borderRadius: "12px",
  border: "none",
  backgroundColor: bgColor,
  color: "#fff",
  cursor: "pointer",
  fontWeight: "600",
  transition: "all 0.3s ease",
});

export default WhatDoYouThink;
