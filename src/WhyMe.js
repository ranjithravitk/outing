import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const traits = [
  {
    icon: "🥸",
    text: "I’ll listen to you with the same patience Jim gives Dwight — which is to say, a lot… unless you start talking about beet farming.",
  },
  {
    icon: "📺",
    text: "I’ve got TV series recommendations so good, you’ll wonder why you ever wasted time scrolling. Trust me — binge responsibly",
  },
  {
    icon: "✈️",
    text: "I love to travel — just waiting on that Schengen visa like it’s the last season of my favorite show. Spoiler: I’ll get it eventually, duh!",
  },
  { icon: "😂", text: "I’ll make you laugh — even when you don’t want to" },
  {
    icon: "👨‍🍳",
    text: "Great cook (can confirm once you taste my food). Honestly, my future girlfriend is basically a lottery winner — and spoiler alert, it could be you!",
  },
  {
    icon: "📷",
    text: "I actually look better in real life (pics below—don’t judge my camera skills!).",
  },
];

function WhyMe() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        padding: "40px",
        fontFamily: "Segoe UI, sans-serif",
        backgroundColor: "#fdf6f9",
        minHeight: "100vh",
      }}
    >
      {/* Pink-Red Wave Animated Heading, Centered */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
        style={{
          fontSize: "2.5rem",
          marginBottom: "30px",
          fontWeight: "900",
          userSelect: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span className="pinkRed-wave-text">Why You Should Date Me</span>
        <span style={{ color: "#cc0029" }}>🥰</span>
      </motion.h1>

      <style>{`
        .pinkRed-wave-text {
          background: linear-gradient(
            90deg,
            #ff0033,
            #ff3366,
            #ff6699,
            #ff3366,
            #ff0033,
            #cc0029,
            #ff0033
          );
          background-size: 300% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: pinkRedWave 6s linear infinite;
          display: inline-block;
        }

        @keyframes pinkRedWave {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 300% 50%;
          }
        }
      `}</style>

      {/* Centered Traits in Boxes */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {traits.map((trait, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
            style={{
              backgroundColor: "#fff0f3",
              borderRadius: "16px",
              boxShadow: "0 4px 15px rgba(255, 0, 51, 0.2)",
              padding: "20px 30px",
              maxWidth: "280px",
              fontSize: "1.2rem",
              color: "#cc0029",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight: "600",
              cursor: "default",
            }}
          >
            <motion.span
              style={{ fontSize: "1.6rem", display: "inline-block" }}
              animate={{
                y: [0, -6, 0], // up and down bounce
                rotate: [0, 10, -10, 0], // gentle wiggle
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
                repeatType: "loop",
              }}
            >
              {trait.icon}
            </motion.span>
            <span>{trait.text}</span>
          </motion.div>
        ))}
      </div>

      {/* Explore My Vibes Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 + traits.length * 0.2 }}
        style={{ display: "flex", justifyContent: "center", margin: "40px 0" }}
      >
        <motion.button
          onClick={() => navigate("/personality")}
          style={{
            position: "relative",
            padding: "12px 28px",
            border: "none",
            borderRadius: "12px",
            backgroundColor: "#ff0033",
            color: "white",
            fontSize: "1.1rem",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(255, 0, 51, 0.4)",
            fontWeight: "700",
            overflow: "hidden",
          }}
        >
          My Vibes →{/* Heart Grow Animation */}
          <span className="heart-grow"></span>
        </motion.button>
      </motion.div>

      <style>{`
        .heart-grow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 40px;
          height: 40px;
          background: radial-gradient(circle at center, #ff6699 0%, #cc0029 70%);
          clip-path: polygon(
            50% 0%, 61% 12%, 75% 15%, 85% 24%, 92% 37%, 95% 50%, 
            92% 63%, 85% 76%, 75% 85%, 61% 88%, 50% 100%, 39% 88%, 
            25% 85%, 15% 76%, 8% 63%, 5% 50%, 8% 37%, 15% 24%, 25% 15%, 39% 12%
          );
          transform: translate(-50%, -50%) scale(0);
          animation: heartGrowAnim 3s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes heartGrowAnim {
          0%, 100% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.6;
          }
        }
      `}</style>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 + traits.length * 0.2 + 0.3 }}
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <motion.button
          onClick={() => navigate("/what-do-you-think")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "12px 28px",
            border: "none",
            borderRadius: "12px",
            backgroundColor: "#cc0029",
            color: "white",
            fontSize: "1.1rem",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(255, 0, 51, 0.4)",
            fontWeight: "700",
            marginTop: "20px",
          }}
        >
          What Do You Think →
        </motion.button>
      </motion.div>

      <h2
        style={{
          marginTop: "50px",
          color: "#cc0029",
          textAlign: "center",
        }}
      >
        Aesthetic Proof 😎
      </h2>

      <div style={{ marginTop: "30px", padding: "0 20px" }}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          speed={12000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          grabCursor={false}
          modules={[Autoplay]}
          style={{ overflow: "hidden" }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[
            "me1.jpg",
            "me2.jpg",
            "me3.jpg",
            "me4.jpg",
            "me5.jpg",
            "me7.jpg",
          ].map((fileName, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={process.env.PUBLIC_URL + "/" + fileName}
                alt={`Me ${idx + 1}`}
                style={{
                  width: "100%",
                  height: "400px",
                  borderRadius: "16px",
                  objectFit: "cover",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}

export default WhyMe;
