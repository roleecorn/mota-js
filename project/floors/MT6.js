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
    "autoEvent": {
        "7,6": {
            "0": {
                "condition": "flag:__saveHappy__===1",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    "\t[弱智,default]嗚哇，高興前輩你怎麼在這裡汪",
                    "\t[弱智,default]快讓你神奇的智慧起作用啊！弱智，快想一想",
                    "\t[弱智,default]幹，不是，這種情況怎麼可能想得出來汪",
                    "\t[弱智,default]等下，等等等等等等等等",
                    "\t[弱智,default]3…2…1…逼逼，時間到，你沒有回答出來呢",
                    "\t[弱智,default]這麼短的時間怎麼可能啦汪",
                    "\t[弱智,default]先別說了，來吃碗麻辣燙我就原諒你沒猜出來的罪過",
                    "\t[弱智,default]先不提我為甚麼有罪，前輩你麻辣燙是從哪裡拿出來的汪",
                    "\t[弱智,default]你吃不吃",
                    "\t[弱智,default]我吃，我吃汪"
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [144,144,144,144,144,144,144,144,144,144,144,144,144],
    [144, 87,  2,  0,  0,  0,  2,  0,  0,  0,  2, 88,144],
    [144,  0,  2,  0,  2,  0,  2,  0,  2,  0,  2,  0,144],
    [144,  0,  2,  0,  2,  0,  2,  0,  2,  0,  2,  0,144],
    [144,  0,  2,  0,  2,  0,  2,  0,  2,  0,  2,  0,144],
    [144,  0,  2,  0,  2,  0,  2,  0,  2,  0,  2,  0,144],
    [144,  0,  0,  0,  0,  0,  0,  0,  0,213,  2,  0,144],
    [144,  0,  2,  0,  2,  0,  2,  0,  2,  0,  2,  0,144],
    [144,  0,  2,  0,  2,  0,  2,  0,  2,  0,  2,  0,144],
    [144,  0,  2,  0,  2,  0,  2,  0,  2,  0,  2,  0,144],
    [144,  0,  2,  0,  2,  0,  2,  0,  2,  0,  2,  0,144],
    [144,  0,  0,  0,  2,  0,  0,  0,  2, 56,  0,  0,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

]
}