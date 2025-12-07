main.floors.MT2=
{
    "floorId": "MT2",
    "title": "主塔 2 层",
    "name": "2",
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
        "10,3": [
            "欢迎使用事件编辑器(双击方块可直接预览)",
            {
                "type": "setValue",
                "name": "status:money",
                "value": "0"
            },
            {
                "type": "function",
                "function": "function(){\ncore.addItem('sword1',1);\n}"
            },
            {
                "type": "loadEquip",
                "id": "sword1"
            },
            {
                "type": "hide",
                "remove": true
            },
            {
                "type": "setValue",
                "name": "flag:__MeetGetter1__",
                "value": "1"
            }
        ]
    },
    "changeFloor": {
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "11,5": {
            "0": null,
            "1": {
                "condition": "(function() { return core.getHeroLoc('y') === 5})()",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    "\t[弱智,default]咦?那邊怎麼有一隻兔子"
                ]
            }
        },
        "1,6": {
            "0": null,
            "1": {
                "condition": "core.getHeroLoc('x') ===1  && flags.__MeetGetter1__ !=1;",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": true,
                "data": [
                    {
                        "type": "if",
                        "condition": "(flag:__MeetGetter1__ != 1)",
                        "true": [
                            "\t[弱智,default]剛剛的兔子讓人好在意啊",
                            {
                                "type": "moveHero",
                                "steps": [
                                    "right:1"
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [144,144,144,144,144,144,144,144,144,144,144,144,144],
    [144,  0,  0,  0,  2,  0,  0,  0,  2,  0,  0,  0,144],
    [144,  0,  0,  0,  2,  0,  0,  0,  2,  0,  0,  0,144],
    [144,  0,  0,  0,  2,  0,  0,  0,  2,  0,351,  0,144],
    [144,  2, 82,  2,  2,  2, 81,  2,  2,  2,  0,  2,144],
    [144,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,144],
    [144,  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0,144],
    [144,  0,  0,  0,  0,  0,  0,  0,  0,  0,213,  0,144],
    [144,  0,  2,  2, 82,  2,  2,  2, 81,  2,  2,  0,144],
    [144,  0,  2,  0,  0,  0,  2,  0,  0,  0,  2,  0,144],
    [144,  0,  2,  0,  0,  0,  2,  0,  0,  0,  2,  0,144],
    [144, 87,  2,  0,  0,  0,  2,  0,  0,  0,  2, 88,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

]
}