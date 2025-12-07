main.floors.MT1=
{
    "floorId": "MT1",
    "title": "主塔 1 层",
    "name": "1",
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
    "events": {},
    "changeFloor": {
        "0,0": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,9": {
            "0": {
                "condition": "core.getHeroLoc('y') ===9 ",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "closeDoor",
                        "id": "specialDoor",
                        "loc": [
                            6,
                            10
                        ]
                    },
                    "\t[弱智,idiot.png]蛤?什麼動靜",
                    {
                        "type": "function",
                        "function": "function(){\ncore.turnHero(\"down\");\n}"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.jumpHero(6,9,300);\n}"
                    },
                    "\t[弱智,idiot.png]不是，哥們，這塔真有問題啊",
                    "\t[弱智,idiot.png]話說回來，眼皮好像有點重......",
                    {
                        "type": "setCurtain",
                        "color": [
                            0,
                            0,
                            0,
                            1
                        ],
                        "time": 500,
                        "keep": true
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.setHeroIcon('Pochita2.png', false);\n}"
                    },
                    "我們並不敬愛的朋友，勇者弱智，已經於王國曆545年12月18號離開了我們，留下...",
                    "什麼?你說沒死?真無聊",
                    {
                        "type": "setCurtain",
                        "time": 500
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 87,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  2,  0,  0,  0,  2,  0,  0,  0,  0],
    [  0,  0,  0,  0,  2,  0,  0,  0,  2,  0,  0,  0,  0],
    [  0,  0,  0,  0,  2,  0,  0,  0,  2,  0,  0,  0,  0],
    [  0,  0,  0,  0,  2,  0,  0,  0,  2,  0,  0,  0,  0],
    [  0,  0,  0,  0,  2,  0,  0,  0,  2,  0,  0,  0,  0],
    [  0,  0,  0,  0,  2,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  2,  2,  0,  2,  2,  2,  2,  2,  2],
    [  0,  0,  0,  0,  2,  0,  0,  0,  2,  0,  0,  0,  0],
    [  0,  0,  0,  0,  2,  0,162,  0,  2,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "downFloor": [
        6,
        12
    ],
    "upFloor": [
        0,
        0
    ]
}