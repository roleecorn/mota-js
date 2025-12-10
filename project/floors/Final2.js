main.floors.Final2=
{
    "floorId": "Final2",
    "title": "主塔 21 层",
    "name": "21",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "",
    "bgm": "bgm.mp3",
    "firstArrive": [
        "\t[弱智,default]汪?",
        "\t[蓋特,Getter.png]狗狗，快過來幫我!",
        "\t[弱智,default]汪!",
        {
            "type": "while",
            "condition": "(core.getHeroLoc('y')>6)",
            "data": [
                {
                    "type": "moveHero",
                    "steps": [
                        "up:1"
                    ]
                }
            ]
        },
        {
            "type": "while",
            "condition": "(core.getHeroLoc('x')>6)",
            "data": [
                {
                    "type": "moveHero",
                    "steps": [
                        "left:1"
                    ]
                }
            ]
        },
        {
            "type": "while",
            "condition": "(core.getHeroLoc('x')<6)",
            "data": [
                {
                    "type": "moveHero",
                    "steps": [
                        "right:1"
                    ]
                }
            ]
        },
        {
            "type": "jumpHero",
            "time": 200
        },
        {
            "type": "jumpHero",
            "time": 200
        },
        "\t[弱智,default]汪!等等",
        "\t[弱智,default]主人你怎麼在跟公主對峙阿",
        "\t[蓋特,Getter.png]你都到這裡了還不清楚嗎?",
        "\t[蓋特,Getter.png]他就是害我們變成現在這個樣子的罪魁禍首",
        "\t[梅貝爾,mable.png]我只是想把你們都留下來陪我玩而已",
        "\t[梅貝爾,mable.png]為甚麼要跑掉呢?",
        "\t[蓋特,Getter.png]嘖，去吧，狗狗",
        {
            "type": "animate",
            "name": "xixi0",
            "loc": [
                6,
                6
            ]
        },
        {
            "type": "setValue",
            "name": "temp:X",
            "value": "status:x"
        },
        {
            "type": "setValue",
            "name": "temp:Y",
            "value": "status:y"
        },
        {
            "type": "drawImage",
            "image": "pochita_128.png",
            "x": "32*temp:X-32",
            "y": "32*temp:Y-32"
        },
        "\t[弱智,default]?",
        "\t[弱智,default]啊?",
        "\t[蓋特,Getter.png]不要質疑，往前撞過去!",
        "\t[弱智,default]汪!",
        "\t[梅貝爾,mable.png]誒?不要，不要過來!",
        "\t[弱智,default][被強化(?)的弱智載著蓋特往前奮力一衝，撞飛了公主之後衝破了高塔的牆壁]",
        "\t[弱智,default][一兔一狗就這麼落到了地板上，而公主卻不見蹤影]",
        "\t[弱智,default]汪!",
        "\t[蓋特,Getter.png]幹的好，小狗狗",
        "\t[弱智,default]是的主人，汪!",
        "\t[蓋特,Getter.png]好，現在往前",
        "\t[弱智,default]汪!"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,132,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,351,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

]
}