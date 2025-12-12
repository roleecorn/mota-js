main.floors.Final1=
{
    "floorId": "Final1",
    "title": "主塔 21 层",
    "name": "21",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "",
    "bgm": "bgm.mp3",
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "bossBattle.m4a"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,6": [
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "remove": true
            },
            "\t[弱智,default]公主，我終於找到你了汪",
            "\t[弱智,default]公主你知道要怎麼變回......",
            "\t[弱智,default][下一秒，弱智想起了公主的魔法變是將人類變成小動物的模樣]",
            "\t[弱智,default][公主坐在整個房間的中間，一邊逗弄著一隻看起來像是貓的東西]",
            "\t[弱智,default]公......公主?",
            {
                "type": "playBgm",
                "name": "bossBattle.m4a",
                "keep": true
            },
            "\t[梅貝爾,mable.png]嗯?你也來啦",
            "\t[梅貝爾,mable.png]快來陪我一起玩吧",
            "\t[弱智,default]哈哈，公主，那個......我我我，我還有事，先走......",
            "\t[梅貝爾,mable.png]不可以自己跑掉喔，狗狗",
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    7
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        4
                    ]
                ],
                "remove": true,
                "time": 500
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        5
                    ]
                ],
                "time": 500
            },
            "\t[弱智,default]媽的，不是，我來之前沒有人跟我說要打公主啊汪",
            "\t[弱智,default]放我離開汪!!!!!!"
        ],
        "6,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        }
    },
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
    [  4,  0,  0,  2,  2,  2,  2,  2,  2,  2,  0,  0,  4],
    [  4,  0,  0,  2,  2,  2,  2,  2,  2,  2,  0,  0,  4],
    [  4,  0,  0,  2,  2,  0,  0,  0,  2,  2,  0,  0,  4],
    [  4,  0,  0,  2,  2,  0,355,  0,  2,  2,  0,  0,  4],
    [  4,  0,  0,  2,  2,  0,354,  0,  2,  2,  0,  0,  4],
    [  4,  0,  0,  2,  2,  2,  0,  2,  2,  2,  0,  0,  4],
    [  4,  0,  0,  2,  2,  2,  0,  2,  2,  2,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
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