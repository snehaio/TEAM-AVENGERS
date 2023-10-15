/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          mistyrose: "#efdddf",
          "primary-black": "#062126",
          "black-8": "rgba(6, 33, 38, 0.7)",
          gray: "rgba(255, 255, 255, 0.2)",
          f97b5: "#0f97b5",
          "black-7": "rgba(6, 33, 38, 0.6)",
          white: "#fff",
          black: "#000",
          lightpink: "#ed9f9f",
          peru: "rgba(207, 125, 78, 0.05)",
          "black-2": "rgba(6, 33, 38, 0.1)",
          "black-5": "rgba(6, 33, 38, 0.4)",
          "black-9": "rgba(6, 33, 38, 0.8)",
          gainsboro: "rgba(217, 217, 217, 0.32)",
        },
        spacing: {},
        fontFamily: {
          h3: "Poppins",
        },
        borderRadius: {
          "43xl": "62px",
          "11xl": "30px",
          xl: "20px",
        },
      },
      fontSize: {
        "29xl": "48px",
        "5xl": "24px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "53xl": "72px",
        sm: "14px",
        inherit: "inherit",
      },
    },
    corePlugins: {
      preflight: false,
    },
  };
  