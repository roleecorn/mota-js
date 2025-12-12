main.floors.MT5=
{
    "floorId": "MT5",
    "title": "主塔 5 层",
    "name": "5",
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
        "5,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "7,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,3": {
            "floorId": "MT4_5",
            "stair": "upFloor"
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
    [144,217,213,217,  0, 88,  2, 87,  0,217,213,217,144],
    [144, 31,  2,  2,  2,  2,  2,  2,  2,  2,  2, 32,144],
    [144,  0,  2,  0,  0,  2,  0,  2,  0,  0,  2,  0,144],
    [144, 27,  2,  0,  0,  2, 85,  2,  0,  0,  2, 28,144],
    [144,205,  2,  0,  2,  0,  0,  0,  2,  0,  2,205,144],
    [144, 27,  2,  0,  0,  0,  0,  0,  0,  0,  2, 28,144],
    [144,  0,  2,  2,  2,  2,223,  2,  2,  2,  2,  0,144],
    [144,226,  2,  0,  0,  0,  0,  0,  0,  0,  2,226,144],
    [144,215,  2,  0,  0,  0,  0,  0,  0,  0,  2,215,144],
    [144,226,  2,  2,  2,  2,222,  2,  2,  2,  2,226,144],
    [144,  0, 21, 22, 21,  0,  0,205,206,205,  0,  0,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "bgm.mp3"
}