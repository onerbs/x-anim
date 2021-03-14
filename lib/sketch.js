const cs = [
  [117, 15],
  [40,  383],
  [255, 150],
  [200, 95],
  [110, 200],
  [210, 365],
  [56,  160],
  [140, 360],
]
let rs

function preload() {
  rs = [1, 2, 3, 4, 5, 6, 7, 8]
    .map(n => loadImage(`img/${n}.png`))
}

function setup() {
  createCanvas(500, 500)
  frameRate(45)
}

function draw() {
  background(0)
  for (let i = 0; i < rs.length; i++) {
    const gap = (i + 1) * 1.8
    const [xc, yc] = cs[i]
    const x = map(mouseX, 0, innerWidth, xc - gap, xc + gap)
    const y = map(mouseY, 0, innerHeight, yc - gap, yc + gap)
    image(rs[i], x, y)
  }
}
