main.floors.MT12=
{
    "floorId": "MT12",
    "title": "主塔 12 层",
    "name": "12",
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
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,6": {
            "floorId": ":next",
            "stair": "downFloor"
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
    [144,  0,  0,  0,  0,  0, 88, 82,  0,  0,  0,  0,144],
    [144,  0,  2,  2, 81,  2,  2,  2, 81,  2,  2, 82,144],
    [144,  0,  2,  0,  0,  0,  2,  0,  0,  0,  2,  0,144],
    [144,  0, 81,  0,  0,  0, 81,  0,  0,  0, 81,  0,144],
    [144,  0,  2,  0,  0,  0,  2,  0,  0,  0,  2, 82,144],
    [144,  0,  2,  2, 81,  2,  2,  2, 81,  2,  2, 87,144],
    [144,  0,  2,  0,  0,  0,  2,  0,  0,  0,  2,  0,144],
    [144,  0, 81,  0,  0,  0, 81,  0,  0,  0, 81,  0,144],
    [144,  0,  2,  0,  0,  0,  2,  0,  0,  0,  2,  0,144],
    [144,  0,  2,  2, 81,  2,  2,  2, 81,  2,  2,  0,144],
    [144,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "bgm.mp3"
}