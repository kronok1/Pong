const Paddle = function (player, color) {
  const c = color
  const w = 30
  const h = 200
  const p = player
  const x = p === 1 ? 0: width - w
  const speed = 10
  let y = Math.floor(height / 2)
  let score = 0
  const UP = -1
  const DOWN = 1
  let point = 0

  const getX = function () {
    return x
  }

  const getY = function () {
    return y
  }

  const getW = function () {
    return w
  }

  const getH = function () {
    return h
  }

  const getScore = function () {
    return score
  }

  const collision = function (player) {
    let dx = Math.abs(x - player.getX() - player.getW() / 2)
    let dy = Math.abs(y - player.getY() - player.getH() / 2)

    if(dx > player.getW() / 2 + r ||  dy > player.getH() / 2 + r)
      return false

    if(dx <= player.getW() / 2 || dy <= player.getH() / 2)
      return true
  }

  const draw = function () {
    rectMode(CORNER)
    noStroke()
    fill(c)
    rect(x, y, w, h)
  }

  const move = function (dir) {
    if(edge(dir))
    y += (speed * dir)
  }

  const edge = function (dir) {
    return (dir === UP && y > 0 || dir === DOWN && y < height - h)
  }

  const updateScore = function () {
    score++
  }

  return {
    draw,
    move,
    getX,
    getY,
    getW,
    getH,
    getScore,
    updateScore,
  }
}
