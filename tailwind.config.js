/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        neue: ["Neue",],
        neueblack: ["Neue-Black"],
        neueextrablack: ["Neue-ExtraBlack"],
        neuesmibold: ["Neue-Semibold"],
        neuebold: ["Neue-Bold"]
      },
      backgroundImage: {
        "custom-image": "url(/src/assets/img/bg1.png)",
        "custom-imaage2": "url(/src/assets/img/bg2.png)",
        "custom-image1": "url(/src/assets/img/image 3.png)",
        "custom-image2" : "url(/src/assets/img/image 5.png)",
        "custom-image3" : "url(/src/assets/img/bg3.png)",
        "custom-image4" : "url(/src/assets/img/bg4.png)",
        "custom-image5" : "url(/src/assets/img/bg5.png)",
        "custom-image6" : "url(/src/assets/img/image 4.png)",
        "custom-image7" : "url(/src/assets/img/image 6.png)",
        "custom-image8" : "url(/src/assets/img/image 7.png)",
        "custom-image9" : "url(/src/assets/img/image 8.png)",
        "custom-image10" : "url(/src/assets/img/bg6.png)",
      },

      listStyleImage: {
        checkmark: 'url(/src/assets/img/Group 5513.svg)',
      },

      
        screens: {
          '3xl': '1900px',
        },
      
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.translate-z-0': {
          transform: 'translateZ(0)',
        },
        '.translate-z-1': {
          transform: 'translateZ(1rem)',
        },
        '.translate-z-2': {
          transform: 'translateZ(2rem)',
        },
        '.translate-z-3': {
          transform: 'translateZ(3rem)',
        },
        '.translate-z-4': {
          transform: 'translateZ(4rem)',
        },
        '.translate-z-5': {
          transform: 'translateZ(5rem)',
        },
        // Add more as needed
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}