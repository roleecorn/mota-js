main.floors.MT6=
{
    "floorId": "MT6",
    "title": "主塔 6 层",
    "name": "6",
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
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "9,7": [
            "\t[怪物,zombie]咕...啊....",
            {
                "type": "move",
                "loc": [
                    9,
                    6
                ],
                "time": 250,
                "keep": true,
                "async": true,
                "steps": [
                    "left:1"
                ]
            },
            {
                "type": "waitAsync"
            },
            "\t[弱智,default]咦?退開了?"
        ]
    },
    "changeFloor": {
        "11,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "8,6": [
            "\t[怪物,zombie]咕...啊...",
            "\t[怪物,zombie]...得...好...",
            {
                "type": "setValue",
                "name": "flag:__kill__",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [144,144,144,144,144,144,144,144,144,144,144,144,144],
    [144, 87,  2,  0,  0,  0,  2,  0, 83,  0,  2, 88,144],
    [144,  0,  2,  0,  2,  0,  2,  0,  2,  0,  2,  0,144],
    [144,  0,  2,  0,  2,  0,  2,  0,  2,  0,  2,  0,144],
    [144,  0,  2,  0,  2,  0,  2,  0,  2,  0,  2,  0,144],
    [144,  0,  2,  0,  2,  0,  2,  0,  2,  0,  2,  0,144],
    [144,  0,  0,  0,  0,  0,  0,  0,  0,213,  2,  0,144],
    [144,  0,  2,  0,  2,  0,  2,  0,  2,  0,  2,  0,144],
    [144,  0,  2,  0,  2,  0,  2,  0,  2,  0,  2,  0,144],
    [144,  0,  2,  0,  2,  0,  2,  0,  2,  0,  2,  0,144],
    [144,  0,  2,  0,  2,  0,  2,  0,  2,  0,  2,  0,144],
    [144,  0,  0,  0,  2,  0,  0,  0,  2,  0,  0,  0,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

]
}