const introParticlesConfig = {
  // particles: {
  //   number: {
  //     value: 188,
  //     density: {
  //       enable: true,
  //       value_area: 2130.6986324071363,
  //     },
  //   },
  //   color: {
  //     value: #ffffff,
  //   },
  //   shape: {
  //     type: "circle",
  //     stroke: {
  //       width: 0,
  //       color: "#000000",
  //     },
  //   },
  //   opacity: {
  //     value: 0.8,
  //     random: false,
  //     anim: {
  //       enable: false,
  //       speed: 1,
  //       opacity_min: 0.1,
  //       sync: false,
  //     },
  //   },
  //   size: {
  //     value: 3,
  //     random: true,
  //     anim: {
  //       enable: false,
  //       speed: 9.6,
  //       size_min: 0.1,
  //       sync: false,
  //     },
  //   },
  //   line_linked: {
  //     enable: false,
  //     distance: 150,
  //     color: "#ffffff",
  //     opacity: 0.4,
  //     width: 1,
  //   },
  //   move: {
  //     enable: true,
  //     speed: 4,
  //     direction: "top-right",
  //     random: true,
  //     straight: true,
  //     out_mode: "out",
  //     bounce: false,
  //     attract: {
  //       enable: false,
  //       rotateX: 600,
  //       rotateY: 1200,
  //     },
  //   },
  // },
  // interactivity: {
  //   detect_on: "canvas",
  //   events: {
  //     onhover: {
  //       enable: true,
  //       mode: "repulse",
  //     },
  //     onclick: {
  //       enable: true,
  //       mode: "repulse",
  //     },
  //     resize: true,
  //   },
  //   modes: {
  //     grab: {
  //       distance: 400,
  //       line_linked: {
  //         opacity: 1,
  //       },
  //     },
  //     bubble: {
  //       distance: 400,
  //       size: 40,
  //       duration: 2,
  //       opacity: 8,
  //       speed: 3,
  //     },
  //     repulse: {
  //       distance: 90,
  //       duration: 0.4,
  //     },
  //     push: {
  //       particles_nb: 4,
  //     },
  //     remove: {
  //       particles_nb: 2,
  //     },
  //   },
  // },
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 200,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  fullScreen: { enable: false },
  detectRetina: true,
};

export default introParticlesConfig;
