window.addEventListener('DOMContentLoaded', () => {

    setInterval(() => {
        theDay()
    }, 1000)
    const theDay = () => {
      const current_time = new Date();
      const getYear = current_time.getFullYear();
  
  
      // get the xmas month
      const christmas_time = new Date(getYear, 11, 25);
      const dateDiff = Math.floor(christmas_time - current_time);
      
      let DAYS = 0, HOURS = 0, MINUTES = 0, SECONDS = 0;
      const milli_seconds = 1000, seconds = 60, minutes = 60, hours = 24;
      const day_time = milli_seconds * seconds * minutes * hours;
  
      DAYS = Math.floor(dateDiff / day_time);
      HOURS = Math.floor((dateDiff) % (day_time) / (milli_seconds * seconds * minutes));
      MINUTES = Math.floor(dateDiff % (milli_seconds * seconds * minutes) / (milli_seconds * seconds))
      SECONDS = Math.floor(dateDiff % (milli_seconds * seconds) / milli_seconds)
  
      displayDay(setZero(DAYS), setZero(HOURS), setZero(MINUTES), setZero(SECONDS))
    }
    
    const displayDay = (day, hour, min, sec) => {
        const days = document.querySelector('.days__top');
        const hours = document.querySelector('.hours__top');
        const minutes = document.querySelector('.minutes__top');
        const seconds = document.querySelector('.seconds__top');
        days.innerHTML = day;
        hours.innerHTML = hour;
        minutes.innerHTML = min;
        seconds.innerHTML =  sec;
    }
    const setZero = (val) => {
        if(val < 10){
            val = "0" + val;
        }
    
        return val;
    }

    particlesJS("particles-js", {
        particles: {
          number: {
            value: 400,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#fff"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },

          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: false,
            distance: 500,
            color: "#ffffff",
            opacity: 0.4,
            width: 2
          },
          move: {
            enable: true,
            speed: 4,
            direction: "bottom",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "bubble"
            },
            onclick: {
              enable: true,
              mode: "repulse"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 0.5
              }
            },
            bubble: {
              distance: 400,
              size: 4,
              duration: 0.3,
              opacity: 1,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });
})

