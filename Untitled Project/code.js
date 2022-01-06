var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["835d0203-f554-45d5-9cbb-2ec03c433d07","bea0bbf8-339f-49d6-9b0d-4ea38dd2dd4f","4bbe1d29-e17c-4aee-8c07-eaa447f8177c","b280d04f-7774-4353-b2e1-2e0696e87b58"],"propsByKey":{"835d0203-f554-45d5-9cbb-2ec03c433d07":{"name":"1","sourceUrl":"assets/api/v1/animation-library/gamelab/CW2wXO.WcqePkysrWU1sjNWyVLyX_SEo/category_vehicles/ship14.png","frameSize":{"x":399,"y":378},"frameCount":1,"looping":true,"frameDelay":2,"version":"CW2wXO.WcqePkysrWU1sjNWyVLyX_SEo","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":399,"y":378},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CW2wXO.WcqePkysrWU1sjNWyVLyX_SEo/category_vehicles/ship14.png"},"bea0bbf8-339f-49d6-9b0d-4ea38dd2dd4f":{"name":"2","sourceUrl":"assets/api/v1/animation-library/gamelab/bzBzwUgBEeqWUbNBmcmnl1egMrpmBw3o/category_backgrounds/continuous_grass.png","frameSize":{"x":800,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"bzBzwUgBEeqWUbNBmcmnl1egMrpmBw3o","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/bzBzwUgBEeqWUbNBmcmnl1egMrpmBw3o/category_backgrounds/continuous_grass.png"},"4bbe1d29-e17c-4aee-8c07-eaa447f8177c":{"name":"3","sourceUrl":"assets/api/v1/animation-library/gamelab/8vku5_RNEZvo3XZVdvh4Olm1LbbiMIBb/category_fantasy/wing_bot.png","frameSize":{"x":218,"y":128},"frameCount":8,"looping":true,"frameDelay":2,"version":"8vku5_RNEZvo3XZVdvh4Olm1LbbiMIBb","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1744,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8vku5_RNEZvo3XZVdvh4Olm1LbbiMIBb/category_fantasy/wing_bot.png"},"b280d04f-7774-4353-b2e1-2e0696e87b58":{"name":"4","sourceUrl":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var x = x;
var score = 0;
var back = createSprite(200,200);
back.setAnimation("2");
var runner = createSprite(50,350);
runner.setAnimation("1");
runner.scale = 0.2;
var bad = createSprite(400,350);
bad.setAnimation("3");
bad.scale=0.5;
bad.velocityX = -4;
var gameOver = createSprite(200,200);
gameOver.setAnimation("4");
gameOver.visible = false;
gameOver.scale = 0.7;
var leftEdge = createSprite(0,200,10,400)
var bottomEdge = createSprite(200,400,400,10)



function draw() {
  createEdgeSprites();
 background("white");
 if(gameOver.visible === false){
   score = score+1
 }
 if(gameOver.visible === true){
   score = score
 }


 back.velocityX = -4;
 if (back.x < 0){
      back.x = back.width/1.97;
    }
    
    if(keyDown("space")) {
        runner.velocityY = -14;
    }
    
    if (keyWentUp("space")) {
        runner.velocityY = 14;
      } 
      












    
      if(bad.isTouching(runner)){
        bad.x = 400;
        bad.y = 350;
        bad.velocityX = 0;
        bad.visible = false;
       playSound("assets/category_explosion/melodic_loss_1.mp3", false);
      gameOver.visible = true;
      }
      if(bad.isTouching(leftEdge)){
        bad.x = 400;
        bad.y = 350;
      }
      if(runner.isTouching(bottomEdge)){
        runner.velocityY = 0;
        runner.x = 50;
        runner.y = 350;
      }
  drawSprites();
  textSize(15);
   text("Score :" + score,300,50);
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
