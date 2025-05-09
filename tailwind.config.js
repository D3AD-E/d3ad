// tailwind.config.js
module.exports = {
  // ...
  theme: {
    extend: {
      animation: {
        "particle-pulse": "particle-pulse 3s ease-in-out infinite",
      },
      keyframes: {
        "particle-pulse": {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
};
