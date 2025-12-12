main.floors.MT3=
{
    "floorId": "MT3",
    "title": "主塔 3 层",
    "name": "3",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "1,1": [
            "樓層傳送、怪物圖鑑，沒有這兩個在這座塔裡會很難受",
            "為了之後的勇者留在這裡",
            "---------第69勇者留",
            "\t[弱智,default]這是之前的勇者的留言嗎?",
            {
                "type": "animate",
                "name": "EMsikao"
            },
            "\t[弱智,default]真的...很多人進來沒有出去呢",
            "\t[弱智,default]底下有一行小字寫了用法呢",
            "\t[弱智,default]讓我看看，怪物手冊直接點選書本即可打開",
            "\t[弱智,default]樓層傳送器按下\"G\"即可打開，如果是手機的話可以打開虛擬鍵盤",
            "\t[弱智,default]這是什麼意思啊?"
        ]
    },
    "changeFloor": {
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,11": {
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
    [144,129,  2, 28,  2, 28,  2, 28,  2, 23,  2, 29,144],
    [144, 46,  2, 21,  2, 22,  2, 31,  2, 28,  2, 28,144],
    [144, 45,  2,202,  2,206,  2, 28,  2,217,  2, 27,144],
    [144,  0,  2,203,  2,205,  2,  0,  2,213,  2,  0,144],
    [144,  0,  2, 81,  2, 31,  2, 82,  2,  0,  2,  0,144],
    [144,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,144],
    [144,  0,  2, 81,  2, 31,  2, 82,  2,  0,  2,202,144],
    [144,  0,  2,202,  2,205,  2,  0,  2,213,  2,203,144],
    [144,  0,  2,203,  2,206,  2, 27,  2,217,  2,202,144],
    [144,  0,  2, 21,  2, 22,  2, 31,  2, 27,  2,  0,144],
    [144, 88,  2, 27,  2, 27,  2, 27,  2, 23,  2, 87,144],
    [144,144,144,144,144,144,144,144,144,144,144,144,144]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "bgm.mp3"
}