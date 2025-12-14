main.floors.MT10=
{
    "floorId": "MT10",
    "title": "主塔 10 层",
    "name": "10",
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
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,11": {
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
    [144, 88, 82,  0, 81, 21,  0, 82,204, 22, 27, 21,144],
    [144, 27,  2, 32,  2,253,253,  2,  0,204,  0,  0,144],
    [144,  0,219,  0,  2,226,226,  2, 81,  2,  2,206,144],
    [144,  2,  2,  2,  2,  0,  0,  0,  0, 32,  0,  0,144],
    [144, 27,215,  0,  0,  0,  2,  2,  2,  2,  2, 81,144],
    [144, 22,  2,206,  2, 81,  2, 28,  0,210,  0,215,144],
    [144,214,  2,  0, 21,226,  2,  0,  2,  2,  2, 81,144],
    [144,  0, 81,  0,211,  0, 81,206,  2, 21,  0, 27,144],
    [144,214,  2,  2,  2, 82,  2,207,  2,  0,  2,210,144],
    [144,  0,215,  0, 32,210,  0,206,  2,210,  2,  0,144],
    [144, 28,  0,214,  0,  0, 87,215, 81, 28,  0, 21,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "bgm.mp3"
}