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
                        "type": "hideStatusBar"
                    },
                    {
                        "type": "unloadEquip",
                        "pos": 0
                    },
                    {
                        "type": "unloadEquip",
                        "pos": 1
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.setHeroIcon('Pochita2.png', false);\n}"
                    },
                    {
                        "type": "function",
                        "function": "function(){\ncore.setItem('sword5',0);core.setItem('shield5',0);\n}"
                    },
                    "我們並不敬愛的朋友，勇者弱智，已經於王國曆545年12月18號離開了我們，留下...",
                    "什麼?你說沒死?真無聊",
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[弱智,idiot.png]痾......我這是怎麼了",
                    "\t[弱智,idiot.png]怪了，我視線怎麼這麼低，眼睛前面這個鏈鋸又是甚麼汪！",
                    "\t[弱智,idiot.png]找找我的劍吧，等等???",
                    "\t[弱智,idiot.png]媽的，我手呢???我那麼大一個手呢???",
                    "\t[弱智,idiot.png]這坨橘色的是甚麼東西啊阿，汪???",
                    {
                        "type": "function",
                        "function": "function(){\ncore.jumpHero(6,9,300);\n}"
                    },
                    "\t[弱智,idiot.png]我怎麼汪起來了啊汪!!!",
                    {
                        "type": "showStatusBar"
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