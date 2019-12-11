scene.setBackgroundColor(9)
let Steve = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 1 1 f f f . . . . 
. . . f f f 1 1 1 1 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 1 1 1 1 1 1 e e f . . 
. . f e 1 f f f f f f 1 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 1 1 1 1 1 1 f 4 e . . 
. . 4 d f 1 1 1 1 1 1 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
Steve.setPosition(80, 88)
controller.moveSprite(Steve)
let Message_Dad = "Hello"
Steve.say(Message_Dad)
let Ball = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 1 1 1 1 1 . . . . . . . . . . . . 
. . . . . 1 1 1 d d d d 1 . . . . . . . . . . . 
. . . . . 1 7 d d d d d 7 1 . . . . . . . . . . 
. . . . . 1 7 7 7 d d 7 7 1 1 . . . . . . . . . 
. . . . . 1 d d 7 7 7 7 d d 1 . . . . . . . . . 
. . . . . 1 2 2 2 7 7 2 2 2 1 . . . . . . . . . 
. . . . . 1 d d 7 7 7 d d d 1 . . . . . . . . . 
. . . . . 1 d 7 7 d 7 7 7 d 1 . . . . . . . . . 
. . . . . 1 1 7 d d d d 7 7 1 . . . . . . . . . 
. . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
Ball.setPosition(115, 23)
game.onUpdateInterval(100, function () {
    Ball.y += controller.dx()
    Ball.x += controller.dy()
    game.over(Steve.overlapsWith(Ball), effects.confetti)
})
