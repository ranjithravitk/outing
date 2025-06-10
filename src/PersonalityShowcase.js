import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const personalities = [
  {
    id: 1,
    name: "Adventurous",
    description:
      "Always ready to explore new horizons... or at least the nearest cave entrance. Adventure mode: activated!",
    img: "me6.jpg",
  },
  {
    id: 2,
    name: "Sportive",
    description:
      "Pro footballer in the making — or just really good at pretending I know what I’m doing!",
    img: "me9.jpg",
  },
  {
    id: 3,
    name: "Funny",
    description:
      "Guaranteed to make you laugh — or at least look as excited as I do when I see my favorite food!",
    img: "me8.jpg",
  },
  {
    id: 4,
    name: "Creative",
    description:
      "I like art and creativity — plus, I can make fancy wreaths that’ll make us look like the coolest duo at any party!",
    img: "me11.jpg",
  },
  {
    id: 5,
    name: "Kind",
    description:
      "I’m basically a Disney prince — just look at all these birds and swans flocking to my kindness! 🤣",
    img: "me12.jpg",
  },
];

function PersonalityShowcase() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        padding: "40px",
        fontFamily: "Segoe UI, sans-serif",
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        {personalities.map(({ id, name, description, img }, index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
            whileHover={{ scale: 1.05 }}
            style={{
              backgroundColor: "white",
              borderRadius: "24px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
              width: "360px",
              padding: "24px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              // Add padding-top only for me11.jpg card
              ...(img === "me11.jpg" ? { paddingTop: "60px" } : {}),
              ...(img === "me12.jpg" ? { padding: "90px" } : {}),
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/" + img}
              alt={name}
              style={{
                width: img === "me12.jpg" ? "490px" : "320px",
                // increase height for me11.jpg
                height: img === "me11.jpg" ? "400px" : "320px",
                borderRadius: "20px",
                objectFit: "cover",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              }}
            />
            <h3 style={{ margin: 0, color: "#c94c4c", fontSize: "1.4rem" }}>
              {name}
            </h3>
            <p
              style={{ color: "#555", fontSize: "1.05rem", lineHeight: "1.4" }}
            >
              {description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 📍 Explore My Vibes Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 * personalities.length + 0.4 }}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <motion.button
          onClick={() => navigate("/why-me")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "12px 28px",
            border: "none",
            borderRadius: "12px",
            backgroundColor: "#ff69b4",
            color: "white",
            fontSize: "1.1rem",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          Back to Why Me →
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default PersonalityShowcase;
