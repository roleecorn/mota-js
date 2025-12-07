main.floors.MT4=
{
    "floorId": "MT4",
    "title": "主塔 4 层",
    "name": "4",
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
        "4,1": [
            "炭烤蜜瓜兔子"
        ],
        "4,3": [
            {
                "type": "setValue",
                "name": "flag:__MT4Flag1__",
                "value": "1"
            }
        ]
    },
    "changeFloor": {
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "3,1": {
            "floorId": "Shop",
            "stair": "flyPoint"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "4,3": {
            "0": {
                "condition": "flag:__MT4Flag1__===1",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    "\t[弱智,default]奇怪，前面那個是什麼汪",
                    "\t[弱智,default]「碳烤蜜瓜兔子」?這是甚麼名字汪",
                    "\t[弱智,default]難不成是賣食物的?",
                    "\t[弱智,default]進去看一下好了",                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [144,144,144,144,144,144,144,144,144,144,144,144,144],
    [144, 87,  2,90096,129,  2,  0,  0,  0,  0,  0,  0,144],
    [144,  0,  2,  0,  0,  2,  0,  2,  2,  2,  2, 82,144],
    [144,  0,  2,  2,  0,  2,  0,  2,  0,  0,  0,  0,144],
    [144,  0, 81,  0,  0, 82,  0,  2,  0,  0,  0,  0,144],
    [144,  0,  2,  2,  2,  2,  0,  2,  2,  2,  2,  2,144],
    [144,  0,  0,  0,  0,  0, 21,  0,  0,  0,  0,  0,144],
    [144,  2,  2,  2,  2,  2, 81,  2,  2,  2,  2,  0,144],
    [144,  0,  0,  0,  0,  2,  0,  0,  0,  0, 82,  0,144],
    [144,  0,  0,  0,  0,  2,  0,  2,  2,  0,  2,  0,144],
    [144,  0,  2,  2,  2,  2,  0,  2,  0,  0,  2,  0,144],
    [144,  0,  0,  0,  0,  0,  0,  2,  0,  0,  2, 88,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

]
}