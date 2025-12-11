main.floors.B2=
{
    "floorId": "B2",
    "title": "地下 1 層",
    "name": "B1",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "bgm": "underground.m4a",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "loadBgm",
            "name": "bossBattle.m4a"
        }
    ],
    "parallelDo": "",
    "events": {
        "6,8": [
            "勇者國的垃圾啊，都知道我是甚麼了，還敢下來嗎?",
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        4
                    ]
                ],
                "time": 500
            },
            {
                "type": "animate",
                "name": "EMsikao",
                "loc": "hero"
            },
            "\t[弱智,default]我不是甚麼垃圾，我可是勇者國的勇者啊汪!",
            {
                "type": "moveHero",
                "steps": [
                    "up:1"
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        8
                    ]
                ],
                "remove": true
            },
            {
                "type": "playBgm",
                "name": "bossBattle.m4a",
                "keep": true
            }
        ],
        "6,4": {
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
        "9,4": {
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
        "3,4": {
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
        "6,2": {
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
    "afterBattle": {
        "6,4": [
            "\t[琪多卡洛斯,Boss.png]喔?看來沒找機會把你弄死是我的失誤",
            "\t[琪多卡洛斯,Boss.png]不過這種氣勢你還能撐多久呢?",
            "\t[琪多卡洛斯,Boss.png]我很好奇啊",
            "\t[弱智,default]廢話少說汪!",
            {
                "type": "show",
                "loc": [
                    [
                        9,
                        4
                    ]
                ],
                "time": 500
            }
        ],
        "9,4": [
            {
                "type": "show",
                "loc": [
                    [
                        3,
                        4
                    ]
                ],
                "time": 500
            },
            "\t[琪多卡洛斯,Boss.png]垂死掙扎的東西還有這種招式?",
            "\t[弱智,default]你，他媽的，把嘴閉上汪!",
            "\t[弱智,default]接招!"
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [70057,70057,70057,70057,70057,70057,70057,70057,70057,70057,70057,70057,70057],
    [70057,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70057],
    [70057,  0,  0,  0,  0,  0,257,  0,  0,  0,  0,  0,70057],
    [70057,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70057],
    [70057,  0,  0,257,  0,  0,257,  0,  0,257,  0,  0,70057],
    [70057,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70057],
    [70057,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70057],
    [70057,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70057],
    [70057,  3,  3,  3,  3,  3,  0,  3,  3,  3,  3,  3,70057],
    [70057,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70057],
    [70057,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70057],
    [70057,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70057],
    [70057,70057,70057,70057,70057,70057,70057,70057,70057,70057,70057,70057,70057]
],
    "bgmap": [

],
    "fgmap": [

]
}