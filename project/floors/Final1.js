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
        },
        "6,3": {
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
            "data": [
                {
                    "type": "changeFloor",
                    "floorId": "MT0",
                    "loc": [
                        6,
                        8
                    ],
                    "direction": "down"
                },
                "\t[弱智,default]都已經這樣了，回去了也不好說我在塔裡面沒看到公主",
                "\t[弱智,default]幹，我就不該接這個活",
                "\t[弱智,default]去其他國家看看好了",
                {
                    "type": "moveHero",
                    "time": 2000,
                    "async": true,
                    "steps": [
                        "down:5"
                    ]
                },
                {
                    "type": "setCurtain",
                    "color": [
                        0,
                        0,
                        0,
                        1
                    ],
                    "time": 2000,
                    "keep": true,
                    "async": true
                },
                "就這樣，弱智離開了他過去一直待著的勇者國",
                "他四處尋找失蹤的勇者們與高興前輩的去向，但一無所獲",
                "那座「魔塔」的資料也像是消失了一樣，完全無法找到",
                "[NE 愚昧之人]",
                {
                    "type": "waitAsync"
                },
                {
                    "type": "restart"
                }
            ]
        }
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {
        "6,5": [
            {
                "type": "pauseBgm"
            },
            {
                "type": "playBgm",
                "name": "underground.m4a",
                "keep": true
            },
            "\t[弱智,default][狗狗弱智的劍插在了公主的身體上，血沿著刀刃向下滴落]",
            "\t[梅貝爾,mable.png]我只是...想跟祂說的一樣，交到很多朋友而已......",
            "\t[梅貝爾,mable.png]不要...離開...我...",
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        5
                    ]
                ],
                "remove": true,
                "time": 500
            },
            {
                "type": "animate",
                "name": "EMsikao",
                "loc": "hero"
            },
            "\t[弱智,default]總算結束了汪",
            "\t[弱智,default]可是......公主死掉了，該怎麼辦",
            "\t[弱智,default]這下是肯定回不了勇者國了汪",
            "\t[弱智,default]還有那些失蹤的勇者跟高興前輩又去哪裡了",
            "\t[弱智,default]總不可能憑空失蹤吧汪",
            {
                "type": "animate",
                "name": "EMsikao",
                "loc": "hero"
            },
            "\t[弱智,default]先找找離開這裡的辦法吧",
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        3
                    ]
                ],
                "time": 100
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  0,  0,  2,  2,  2,  2,  2,  2,  2,  0,  0,  4],
    [  4,  0,  0,  2,  2,  2,  2,  2,  2,  2,  0,  0,  4],
    [  4,  0,  0,  2,  2,  0,104,  0,  2,  2,  0,  0,  4],
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