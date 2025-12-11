main.floors.B2=
{
    "floorId": "B2",
    "title": "地下 1 層",
    "name": "B1",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "bgm": "underground.m4a",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "loadBgm",
            "name": "bossBattle.m4a"
        }
    ],
    "parallelDo": "",
    "events": {
        "6,8": [
            "勇者國的垃圾啊，都知道我是甚麼了，還敢下來嗎?",
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        4
                    ]
                ],
                "time": 500
            },
            {
                "type": "animate",
                "name": "EMsikao",
                "loc": "hero"
            },
            "\t[弱智,default]我不是甚麼垃圾，我可是勇者國的勇者啊汪!",
            {
                "type": "moveHero",
                "steps": [
                    "up:1"
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        8
                    ]
                ],
                "remove": true
            },
            {
                "type": "playBgm",
                "name": "bossBattle.m4a",
                "keep": true
            }
        ],
        "6,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "9,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "3,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "6,2": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "9,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "3,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        }
    },
    "changeFloor": {},
    "beforeBattle": {
        "9,4": [
            {
                "type": "if",
                "condition": "flag:__Getter2__",
                "true": [
                    {
                        "type": "show",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ],
                        "time": 500
                    },
                    "\t[蓋特,Getter.png]原來你在這裡",
                    "\t[蓋特,Getter.png]看在你的幫助的份上，我來救你一次",
                    "\t[弱智,default][下一秒蓋特從上方落下，拿出了一個奇怪的裝置往人魚的方向開了一砲]",
                    {
                        "type": "animate",
                        "name": "explode1",
                        "loc": [
                            9,
                            3
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                9,
                                4
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                3,
                                4
                            ]
                        ],
                        "time": 500
                    },
                    "\t[琪多卡洛斯,Boss.png]垂死掙扎的東西還有這種招式?",
                    "\t[弱智,default]你，他媽的，把嘴閉上汪!",
                    "\t[弱智,default]接招!",
                    {
                        "type": "exit"
                    }
                ]
            }
        ],
        "3,4": [
            "\t[高興,kaoxing.png]原來你已經到這裡了啊",
            {
                "type": "show",
                "loc": [
                    [
                        3,
                        6
                    ]
                ],
                "time": 500
            },
            "\t[弱智,default]前輩?你也來了!?",
            "\t[高興,kaoxing.png]研討會提早結束了，我就先回來看看你的狀況",
            "\t[高興,kaoxing.png]看來她就是造成這一切發生的原因了，勇者國怨念的聚合體",
            "\t[弱智,default][高興伸出了手，一碗麻辣燙從他的手中飛出直接撞進了人魚的嘴裡]",
            "\t[琪多卡洛斯,Boss.png]好燙、好辣，這個到底是什麼!?",
            {
                "type": "hide",
                "loc": [
                    [
                        3,
                        4
                    ]
                ],
                "remove": true,
                "time": 500
            },
            "\t[高興,kaoxing.png]讓你嚐嚐真正的麻辣燙的味道，不要再嘗試那個那個味道奇怪的版本了",
            "\t[高興,kaoxing.png]既然你吃下了這碗麻辣燙，我們就是朋友了",
            "\t[琪多卡洛斯,Boss.png]誰是你朋友阿，你這個傢伙!",
            "\t[高興,kaoxing.png]看來這招對怨念沒用呢，弱智剩下的就交給你了",
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        2
                    ]
                ],
                "time": 500
            },
            "\t[琪多卡洛斯,Boss.png]別想就這麼讓我收手，勇者國的有一個算一個都該死!!!",
            "\t[高興,kaoxing.png]弱智，不好，這女人要把你打至跪地，可能是要迫你回去做沙包啊",
            "\t[弱智,default]為甚麼是沙包啊，這裡不該是性奴隸之類的東西嗎?",
            {
                "type": "if",
                "condition": "flag:__Getter2__",
                "true": [
                    "\t[蓋特,Getter.png]好噁心"
                ]
            },
            "\t[弱智,default]不要啊汪",
            "\t[弱智,default]不要在這種這麼嚴肅的時候敗壞我的名聲啊",
            "\t[弱智,default]不管了，受死吧你汪!",
            "\t[弱智,default]我是勇者國的勇者，我要討伐你!",
            {
                "type": "exit"
            }
        ]
    },
    "afterBattle": {
        "6,4": [
            "\t[琪多卡洛斯,Boss.png]喔?看來沒找機會把你弄死是我的失誤",
            "\t[琪多卡洛斯,Boss.png]不過這種氣勢你還能撐多久呢?",
            "\t[琪多卡洛斯,Boss.png]我很好奇啊",
            "\t[弱智,default]廢話少說汪!",
            {
                "type": "show",
                "loc": [
                    [
                        9,
                        4
                    ]
                ],
                "time": 500
            }
        ],
        "9,4": [
            {
                "type": "show",
                "loc": [
                    [
                        3,
                        4
                    ]
                ],
                "time": 500
            },
            "\t[琪多卡洛斯,Boss.png]垂死掙扎的東西還有這種招式?",
            "\t[弱智,default]你，他媽的，把嘴閉上汪!",
            "\t[弱智,default]接招!"
        ],
        "6,2": [
            "\t[琪多卡洛斯,Boss.png]為什麼......為甚麼就是殺不掉......",
            "\t[琪多卡洛斯,Boss.png]我還不能...離去......",
            "\t[弱智,default][眼前的人魚在弱智揮下最後一刀之後化成光點消散了]",
            "\t[弱智,default][一小部分朝弱智的方向移動過來，更多的則朝著勇者國的方向飄去]",
            "\t[弱智,default]總算結束了汪",
            "\t[弱智,default].....",
            "\t[弱智,default]媽的，不是，我怎麼還沒變回去啊汪",
            "\t[弱智,default]我不想要一直當狗啊汪",
            "\t[高興,kaoxing.png]是這樣嗎?可是我看你當狗的時候很開心啊",
            "\t[弱智,default]我不是，我沒有汪",
            "\t[弱智,default]但好像......也不差"
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [70057,70057,70057,70057,70057,70057,70057,70057,70057,70057,70057,70057,70057],
    [70057,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70057],
    [70057,  0,  0,  0,  0,  0,257,  0,  0,  0,  0,  0,70057],
    [70057,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70057],
    [70057,  0,  0,257,  0,  0,257,  0,  0,257,  0,  0,70057],
    [70057,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70057],
    [70057,  0,  0,353,  0,  0,  0,  0,  0,351,  0,  0,70057],
    [70057,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70057],
    [70057,  3,  3,  3,  3,  3,  0,  3,  3,  3,  3,  3,70057],
    [70057,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70057],
    [70057,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70057],
    [70057,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,70057],
    [70057,70057,70057,70057,70057,70057,70057,70057,70057,70057,70057,70057,70057]
],
    "bgmap": [

],
    "fgmap": [

]
}