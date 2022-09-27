window.addEventListener('DOMContentLoaded', () => {

    setInterval(() => {
        theDay()
    }, 1000)
    const theDay = () => {
        let current_time = new Date(),
            christmas_year = current_time.getFullYear();
    
        //Get Month() 
        if(current_time.getMonth() == 11 && current_time.getDate() > 25) christmas_year += 1;
    
    
        let christmas_time = new Date(christmas_year, 11, 25);
        let dateDiff = Math.floor(christmas_time - current_time);
    
        let DAYS = 0 , HOURS = 0, MINUTES = 0, SECONDS = 0;
        const day_time = 1000 * 60 * 60 * 24;
    
        if(current_time.getMonth() != 11 || (current_time.getMonth == 11 && current_time.getTime() != 25)){
            DAYS = Math.floor(dateDiff / (day_time));
            HOURS = Math.floor((dateDiff) % (day_time) / (1000 * 60 * 60));
            MINUTES = Math.floor((dateDiff) % (1000 * 60 * 60) / (1000 * 60));
            SECONDS = Math.floor((dateDiff) % (1000 * 60) / 1000);
        }
    
        display(setZero(DAYS), setZero(HOURS), setZero(MINUTES), setZero(SECONDS));
    }
    
    const display = (day, hour, min, sec) => {
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

