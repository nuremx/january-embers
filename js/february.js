var c = document.getElementById('c')
var ctx = c.getContext('2d')

function between(min, max) {
    return Math.random() * (max - min) + min
}

var particles = []
const quantity = 60
for (i = 0; i < quantity; i++) {
  particles.push(new createP)
}

function createP() {
  this.x = between(0, 500)
  this.y = between(287, 293)

  this.size = Math.random() * 2.5

  this.vx = Math.random() * 1 - 0.5
  this.vy = between(-0.5, -0.75)

  this.g = 0.001 // gravity

  this.life = between(250, 1000)

  var colors = ['#e74c3c', '#c0392b', '#e67e22']
  var alternateColors = [
    '#FFC323', '#FFDB23', '#FF972F', '#E86720', '#FF5123'
  ]
  this.color = colors[Math.floor(Math.random() * colors.length)]

  this.reset = function() {
  this.x = between(0, 500)
  this.y = between(287, 293)

  this.size = Math.random() * 2.5;

  this.vx = Math.random() * 1 - 0.5;
  this.vy = between(-0.5, -0.75)

  this.g = 0.001 // gravity

  this.life = between(250, 1000)

  var colors = ['#e74c3c', '#c0392b', '#e67e22']
  this.color = colors[Math.floor(Math.random() * colors.length)]
  }
}

var draw = function() {
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, 1920, 1080) // width and height respectevely for the canvas. If canvas size changes, mutate this

  for(t = 0; t < particles.length; t++) {
    var p = particles[t]

    /* PARTICLE SYSTEM */
    ctx.beginPath()
    ctx.fillStyle = p.color;
    ctx.arc(p.x, p.y, p.size, p.size, Math.PI * 10, true) // set to false for cartoonish style. Reduce quantity if disabled
    ctx.fill()
    /* PARTICLE SYSTEM */

    p.x += p.vx // Move on x axis
    p.y += p.vy += p.g // Move on y axis. Gets affected by gravity

    p.life-- // Particle dies as it's life goes on :(

    // fade away the particle as dies. Cool animation, can improve
    if (p.life < 125) p.color = '#8C1A13'
    if (p.life < 75) p.color = '#540F0C'
    if (p.life < 50) p.color = '#330907'
    if (p.life < 25) p.color = '#191919'

    if (p.life < 1) p.reset() // if particle dies, reset it. Amen :)
  }
}

setInterval(draw) // TODO: Destroy particle system based on time specfication or time interval
