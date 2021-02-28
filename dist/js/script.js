
/* I've chosen to integrate the choreographer.js library which allows
me to animate objects on a web page based on dom events. For this assignment, I've chosen 
to add animation and color changes to the letters of my name & icons when the user
scrolls down the webpage. The code was adapted from the choreographer js documentation and
the choreograhper.min.js file was downloaded from github.


I've also used font awesome for my instagram and github icons */


const containerNode = document.querySelector('#container')
const button = document.getElementById("joke-button");
const scrollDownNode = document.querySelector('.scroll-down')
const socialMedia = document.querySelector('.social-media')
const vh = window.innerHeight
// fin is the point where you cannot scroll down any further.
const fin = containerNode.clientHeight - vh + socialMedia.clientHeight



/* code for letter animations */
function calculateAnimations() {
  return [

    /* animate M */
    { range: [-1, fin * 0.5],   selector: '.m', type: 'scale', style: 'transform:rotateX', from: 0, to: 90, unit: 'deg' },
    { range: [fin * 0.5, fin],  selector: '.m', type: 'scale', style: 'transform:rotateX', from: 90, to: 0, unit: 'deg' },
    { range: [fin * 0.3, fin],  selector: '.m', type: 'change', style: 'color', to: '#8382f9' },

    /* animate I */
    { range: [-1, fin * 0.5],   selectors: ['.i'], type: 'scale', style: 'transform:rotateZ', from: 0, to: 180, unit: 'deg' },
    { range: [fin * 0.5, fin],  selectors: ['.i'], type: 'scale', style: 'transform:rotateZ', from: 180, to: 360, unit: 'deg' },
    { range: [fin * 0.4, fin],  selectors: ['.i'], type: 'change', style: 'color', to: '#0065a2' },


    /* animate C */
    { range: [-1, fin * 0.5],   selector: '.c', type: 'scale', style: 'transform:translateY', from: 0, to: 25, unit: 'px' },
    { range: [fin * 0.5, fin],  selector: '.c', type: 'scale', style: 'transform:translateY', from: 25, to: 0, unit: 'px' },
    { range: [fin * 0.4, fin],  selector: '.c', type: 'change', style: 'color', to: '#4dd091' },

    /* animate H */
    { range: [-1, fin * 0.5],   selector: '.h', type: 'scale', style: 'transform:scaleX', from: 1, to: 0.5 },
    { range: [-1, fin * 0.5],   selector: '.h', type: 'scale', style: 'transform:scaleY', from: 1, to: 0.5 },
    { range: [fin * 0.5, fin],  selector: '.h', type: 'scale', style: 'transform:scaleX', from: 0.5, to: 1 },
    { range: [fin * 0.5, fin],  selector: '.h', type: 'scale', style: 'transform:scaleY', from: 0.5, to: 1 },
    { range: [fin * 0.3, fin],  selector: '.h', type: 'change', style: 'color', to: '#1fd1ec' },

    /* animate As, Ss */
    { range: [-1, fin * 0.5],   selectors: ['.a', '.s'], type: 'scale', style: 'transform:rotateZ', from: 0, to: -180, unit: 'deg' },
    { range: [fin * 0.5, fin],  selectors: ['.a', '.s'], type: 'scale', style: 'transform:rotateZ', from: -180, to: -360, unit: 'deg' },
    { range: [fin * 0.4, fin],  selectors: ['.a', '.s'], type: 'change', style: 'color', to: '#c05bdb' },

    /* animate Es */
    { range: [fin * 0.3, fin],  selector: '.e', type: 'change', style: 'color', to: '#ff1b9b' },

    
    /* animate L, N, Y,insta-icon, github-icon */
    { range: [fin * 0.1, fin],  selector: ['.l' ,'.n', '.y', '.insta', '.git'], type: 'randomizeColor' },

    
    /* animate P */
    { range: [-1, fin * 0.5],   selectors: ['.p', '.dash'], type: 'scale', style: 'opacity', from: 1, to: 0.1 },
    { range: [fin * 0.5, fin],  selectors: ['.p', '.dash'], type: 'scale', style: 'opacity', from: 0.1, to: 1 },
    { range: [fin * 0.4, fin],  selectors: ['.p', '.dash'], type: 'change', style: 'color', to: '#ff537c' },

    /* animate line */
    { range: [-1, fin],         selector: '.line', type: 'scale', style: 'width', from: 0.01, to: 50, unit: '%' },
    { range: [-1, fin],         selector: '.line', type: 'scale', style: 'opacity', from: 0, to: 1 },

    /* animate arrow */
    { range: [0.6 * fin, fin], selector: '.scroll-down', type: 'scale', style: 'opacity', from: 1, to: 0 },
    { range: [fin - 30, fin],   selector: '.scroll-down', type: 'change', style: 'display', to: 'none' },

  ]
}

// Instantiate choreographer.
const choreographer = new Choreographer({
  animations: calculateAnimations(),
  customFunctions: {
    randomizeColor: function(data) {
      let chars = '0123456789abcdef'.split('')
      let hex = '#'

      while (hex.length < 7) {
        hex += chars[Math.round(Math.random() * (chars.length - 1))]
      }

      data.node.style.color = hex
    }
  }
})

function animate() {
  const scrollPosition = (containerNode.getBoundingClientRect().top - containerNode.offsetTop) * -1
  choreographer.runAnimationsAt(scrollPosition)
}

document.body.addEventListener('scroll', animate)

animate()

window.addEventListener('resize', function() {
  choreographer.updateAnimations(calculateAnimations())
})
/****************************************************/
