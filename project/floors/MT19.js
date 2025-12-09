main.floors.MT19=
{
    "floorId": "MT19",
    "title": "主塔 19 层",
    "name": "19",
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
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "8,11": {
            "floorId": ":next"
        },
        "9,11": {
            "floorId": "MT18",
            "loc": [
                6,
                11
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [144,144,144,144,144,144,144,144,144,144,144,144,144],
    [144,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,144],
    [144,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,144],
    [144,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,144],
    [144,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,144],
    [144,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,144],
    [144,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,144],
    [144,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,144],
    [144,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,144],
    [144,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,144],
    [144,  0,  0,  0,  0,  0,  0,  2,  2,  2,  2,  0,144],
    [144,  0,  0,  0,  0,  0, 88,  2,  0,  0,  2, 87,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

]
}