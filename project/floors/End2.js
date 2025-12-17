main.floors.End2=
{
    "floorId": "End2",
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
    "defaultGround": "X100001",
    "bgm": "EndingRabbit.m4a",
    "firstArrive": [
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                0
            ],
            "time": 2000,
            "keep": true
        },
        "\t[弱智,default]汪!",
        "\t[蓋特,Getter.png]幹的好，小狗狗",
        "\t[弱智,default]是的主人，汪!",
        "\t[蓋特,Getter.png]好，現在往前",
        {
            "type": "moveHero",
            "time": 10000,
            "async": true,
            "steps": [
                "left:10"
            ]
        },
        "\t[弱智,default]汪!",
        {
            "type": "showImage",
            "code": 1,
            "image": "HE1.png",
            "sloc": [
                0,
                0,
                null
            ],
            "loc": [
                32,
                32,
                352,
                352
            ],
            "opacity": 1,
            "time": 1000
        },
        {
            "type": "sleep",
            "time": 500,
            "noSkip": true
        },
        {
            "type": "hideImage",
            "code": 1,
            "time": 1000
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "HE2.png",
            "sloc": [
                0,
                0,
                null
            ],
            "loc": [
                32,
                32,
                352,
                352
            ],
            "opacity": 1,
            "time": 1000
        },
        {
            "type": "sleep",
            "time": 500,
            "noSkip": true
        },
        {
            "type": "hideImage",
            "code": 1,
            "time": 1000
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "HE3.png",
            "sloc": [
                0,
                0,
                null
            ],
            "loc": [
                32,
                32,
                352,
                352
            ],
            "opacity": 1,
            "time": 1000
        },
        {
            "type": "sleep",
            "time": 500,
            "noSkip": true
        },
        {
            "type": "hideImage",
            "code": 1,
            "time": 1000
        },
                {
            "type": "showImage",
            "code": 1,
            "image": "HE4.png",
            "sloc": [
                0,
                0,
                null
            ],
            "loc": [
                32,
                32,
                352,
                352
            ],
            "opacity": 1,
            "time": 1000
        },
        {
            "type": "sleep",
            "time": 500,
            "noSkip": true
        },
        {
            "type": "hideImage",
            "code": 1,
            "time": 1000
        },
        {
            "type": "waitAsync"
        }
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
    [  0,  0,  0,  0,  0,  0,  0,  0,100176,100177,100178,100179,100180],
    [  0,  0,  0,  0,  0,  0,  0,  0,100184,100185,100186,100187,100188],
    [  0,  0,  0,  0,  0,  0,  0,  0,100192,100193,100194,100195,100196],
    [  0,  0,  0,  0,  0,  0,  0,  0,100200,100201,100202,100203,100204],
    [  0,  0,  0,  0,  0,  0,  0,  0,100208,100209,100210,100211,100212],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,100068,  0,  0,100096,100097,100098,100099,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,100104,100105,100106,100107,  0,  0,  0,  0,  0],
    [100040,100041,100042,  0,100112,100113,100114,100115,  0,  0,  0,  0,  0],
    [100048,100049,100050,  0,100120,100121,100122,100123,  0,  0,  0,  0,  0],
    [100056,100057,100058,  0,100128,100129,100130,100131,  0,  0,  0,  0,  0],
    [100064,100065,100066,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

]
}