main.floors.MT11=
{
    "floorId": "MT11",
    "title": "主塔 11 层",
    "name": "11",
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
        "6,1": {
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
    [144,  0,  0,  0,  0,  0, 87,  0,  0,  0,  0,  0,144],
    [144,  0,  0,  2,  0,  0,  0,  0,  0,  2,  0,  0,144],
    [144,253,  2,  2,206,  2,204,  2,206,  2,  2,210,144],
    [144, 27,  2, 32,  0,  2, 53,  2,  0, 32,  2, 28,144],
    [144,253,  2,  2,206,  2,  2,  2,206,  2,  2,210,144],
    [144,  0, 32,  2,  0,224, 86,219,  0,  2, 32,  0,144],
    [144,  0,  2,  2,  2,  2,  0,  2,  2,  2,  2,  0,144],
    [144,206,  2, 27, 27,  2,  0,  2, 42,  0,  2,206,144],
    [144, 28,  2, 27,  0,253,  0,253,  0, 21,  2, 27,144],
    [144,206,  2,  2,  2,  2,  2,  2,  2,  2,  2,206,144],
    [144,  0,  0,  0,218,  0, 88,  0,211,  0,  0,  0,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "bgm.mp3"
}