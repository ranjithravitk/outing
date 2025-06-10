import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        height: "100vh",
        backgroundColor: "#fff0f5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <motion.img
        src={process.env.PUBLIC_URL + "/dog.jpg"}
        alt="Side-eye dog"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          width: "300px",
          maxWidth: "90%",
          borderRadius: "20px",
          marginBottom: "30px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
        }}
      />

      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ fontSize: "2rem", color: "#c94c4c" }}
      >
        So you <em>are</em> interested? 😉
      </motion.h1>

      <motion.button
        onClick={() => navigate("/why-me")}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          marginTop: "30px",
          padding: "15px 30px",
          fontSize: "1.2rem",
          border: "none",
          borderRadius: "12px",
          backgroundColor: "#ff69b4",
          color: "white",
          cursor: "pointer",
          animation: "blinker 1s linear infinite",
        }}
      >
        {hover ? "Get ready for a ride 🚀" : "Click me"}
      </motion.button>

      <style>{`
        @keyframes blinker {
          50% { opacity: 0.6; }
        }
      `}</style>
    </motion.div>
  );
}

export default Home;
