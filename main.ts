function 勝利判定 (プレイヤーの手: number) {
    手表示(プレイヤーの手)
    basic.pause(2000)
    敵の手 = randint(0, 2)
    手表示(敵の手)
    basic.pause(2000)
    if (プレイヤーの手 == 敵の手) {
        basic.showString("Dorrow")
    } else if (プレイヤーの手 == 0) {
        if (敵の手 == 1) {
            basic.showString("Win")
        } else if (敵の手 == 2) {
            basic.showString("Lose")
        }
    } else if (プレイヤーの手 == 1) {
        if (敵の手 == 0) {
            basic.showString("Lose")
        } else if (敵の手 == 2) {
            basic.showString("Win")
        }
    } else if (プレイヤーの手 == 2) {
        if (敵の手 == 0) {
            basic.showString("Win")
        } else if (敵の手 == 1) {
            basic.showString("Lose")
        }
    }
}
function 手表示 (手: number) {
    if (手 == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (手 == 1) {
        basic.showLeds(`
            . . # . #
            . # . # .
            . . # . #
            . # . # .
            # . . . .
            `)
    } else if (手 == 2) {
        basic.showLeds(`
            . . . . .
            # . # . #
            . # # # .
            . # # # .
            . . # . .
            `)
    }
}
let プレイヤーの手 = 0
let 敵の手 = 0
let 勝利数 = 0
let ゲームモード = 0
basic.forever(function () {
    if (ゲームモード == 0) {
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.SmallSquare)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        ゲームモード = 1
    } else if (ゲームモード == 1) {
        if (input.logoIsPressed()) {
            プレイヤーの手 = 0
            ゲームモード = 2
        } else if (input.buttonIsPressed(Button.B)) {
            プレイヤーの手 = 1
            ゲームモード = 2
        } else if (input.buttonIsPressed(Button.A)) {
            プレイヤーの手 = 2
            ゲームモード = 2
        }
    } else if (ゲームモード == 2) {
        勝利判定(プレイヤーの手)
        ゲームモード = 0
    }
})
