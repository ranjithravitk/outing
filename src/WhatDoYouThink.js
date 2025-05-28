import React from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

function WhatDoYouThink() {
  const { width, height } = useWindowSize();

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
      <Confetti width={width} height={height} />

      <h1
        style={{
          color: "#cc0055",
          fontSize: "2.4rem",
          marginBottom: "30px",
        }}
      >
        Go on a date with me, you gorgeous woman 💖
      </h1>

      <img
        src="/dogs.png"
        alt="Happy dogs"
        style={{
          maxWidth: "300px",
          width: "80%",
          height: "auto",
          margin: "0 auto",
          borderRadius: "16px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
        }}
      />
    </div>
  );
}

export default WhatDoYouThink;
