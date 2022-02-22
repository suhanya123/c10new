var s1, s2, s3, s4;
var sprites = []


function setup() 
{
  createCanvas(400,400);
  s1 = createSprite(20, 60, 100, 50);
  s2 = createSprite (40, 30, 20, 70);
  s3 = createSprite (30,200, 30, 50);
  s4 = createSprite (40,300, 60, 20);
  sprites = [s1, s2, s3, s4];
  console.log(sprites[0].position.x);
  console.log(sprites[1].position.x);
  console.log(sprites[2].position.x);
  console.log(sprites[3].position.x);
  console.log(sprites[4].position.x);
}

function draw() 
{
background(51);
drawSprites;
}

