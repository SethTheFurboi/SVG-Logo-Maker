function generateshape(shape) {

  const shapes = {
      circle: `circle cx="150" cy="100" r="80"`,
      triangle: `polygon points="150, 18 244, 182 56, 182"`,
      square: `rect width="100" height="100"`,
  }

  return shapes[shape] || shapes['square']

}   

function createlogo( text, textcolor, shape, shapecolor ) {

  const newshape = generateshape(shape)
    
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${newshape} fill="${shapecolor}"/>
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>
  
  </svg>`

}

module.exports = { createlogo };