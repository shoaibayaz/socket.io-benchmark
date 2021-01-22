const io = require('socket.io-client');

const message = [{
        "_id": "600b46632ed2722bedb66433",
        "index": 0,
        "guid": "94ce6028-c24f-4307-b2c8-932aad39ca71",
        "isActive": true,
        "balance": "$1,632.49",
        "picture": "http://placehold.it/32x32",
        "age": 26,
        "eyeColor": "blue",
        "name": {
            "first": "Maggie",
            "last": "Michael"
        },
        "company": "DIGIFAD",
        "email": "maggie.michael@digifad.me",
        "phone": "+1 (927) 479-3679",
        "address": "124 Berry Street, Thatcher, Connecticut, 619",
        "about": "Labore incididunt sit nostrud anim. Irure tempor velit sunt non velit pariatur officia amet Lorem quis consectetur laborum. Nulla sunt aliqua officia exercitation non ipsum. Laboris adipisicing aute magna eu.",
        "registered": "Friday, September 30, 2016 11:03 PM",
        "latitude": "36.255296",
        "longitude": "-12.576501",
        "tags": [
            "mollit",
            "tempor",
            "consectetur",
            "aliquip",
            "deserunt"
        ],
        "range": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        "friends": [{
                "id": 0,
                "name": "Mae Buck"
            },
            {
                "id": 1,
                "name": "Greer Delgado"
            },
            {
                "id": 2,
                "name": "Mckinney Rosario"
            }
        ],
        "greeting": "Hello, Maggie! You have 7 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "600b4663b1eb145f630ca877",
        "index": 1,
        "guid": "e61fb9c4-172f-4802-805f-e8171bdc1b5a",
        "isActive": true,
        "balance": "$1,099.38",
        "picture": "http://placehold.it/32x32",
        "age": 28,
        "eyeColor": "brown",
        "name": {
            "first": "Sondra",
            "last": "Kidd"
        },
        "company": "LOTRON",
        "email": "sondra.kidd@lotron.co.uk",
        "phone": "+1 (849) 426-3553",
        "address": "495 Dean Street, Sidman, Wisconsin, 3523",
        "about": "Do adipisicing tempor excepteur dolor qui eu duis cillum exercitation officia. Exercitation sint elit nostrud non veniam laborum ipsum sunt qui in labore do. Id incididunt nostrud anim qui nulla ipsum amet consectetur consectetur quis. Et magna irure dolore sunt irure tempor in labore irure quis. Elit do non sit ex adipisicing reprehenderit tempor mollit amet culpa sint reprehenderit adipisicing culpa. In aliquip est ipsum adipisicing et culpa quis reprehenderit culpa duis pariatur anim ipsum.",
        "registered": "Tuesday, August 5, 2014 6:58 AM",
        "latitude": "29.231682",
        "longitude": "-172.085657",
        "tags": [
            "nulla",
            "pariatur",
            "ipsum",
            "aliqua",
            "qui"
        ],
        "range": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        "friends": [{
                "id": 0,
                "name": "Hendrix Bean"
            },
            {
                "id": 1,
                "name": "Georgina Hopper"
            },
            {
                "id": 2,
                "name": "Angelita Delaney"
            }
        ],
        "greeting": "Hello, Sondra! You have 10 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "600b4663375d0abce8b225c0",
        "index": 2,
        "guid": "9963f4a3-7167-4fa0-b8e1-4c710f4689a7",
        "isActive": true,
        "balance": "$3,800.62",
        "picture": "http://placehold.it/32x32",
        "age": 26,
        "eyeColor": "brown",
        "name": {
            "first": "Kent",
            "last": "Larsen"
        },
        "company": "ZENTIME",
        "email": "kent.larsen@zentime.org",
        "phone": "+1 (880) 431-3716",
        "address": "562 Post Court, Basye, Montana, 7230",
        "about": "Adipisicing quis amet et ex nisi irure non commodo eiusmod excepteur esse. Qui consequat excepteur aliquip proident labore sunt elit. In nostrud voluptate eiusmod sunt adipisicing ipsum eiusmod irure excepteur aliquip officia velit enim labore. Incididunt velit nostrud irure proident laborum. Tempor proident consequat excepteur laboris proident do laborum cillum laboris. Commodo laboris occaecat enim sunt minim eiusmod ullamco laborum. Voluptate laboris quis officia reprehenderit enim ipsum.",
        "registered": "Friday, May 18, 2018 3:49 AM",
        "latitude": "7.516291",
        "longitude": "-138.377",
        "tags": [
            "eu",
            "veniam",
            "qui",
            "aliqua",
            "veniam"
        ],
        "range": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        "friends": [{
                "id": 0,
                "name": "Prince Kemp"
            },
            {
                "id": 1,
                "name": "Susan Grant"
            },
            {
                "id": 2,
                "name": "Cummings Bush"
            }
        ],
        "greeting": "Hello, Kent! You have 7 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "600b4663ba2b0f60e2cc0215",
        "index": 3,
        "guid": "f4473017-c162-4f30-ae1e-ed6cbb2ff168",
        "isActive": true,
        "balance": "$1,851.19",
        "picture": "http://placehold.it/32x32",
        "age": 28,
        "eyeColor": "brown",
        "name": {
            "first": "Clements",
            "last": "Mullins"
        },
        "company": "EBIDCO",
        "email": "clements.mullins@ebidco.name",
        "phone": "+1 (881) 427-3778",
        "address": "449 Manhattan Avenue, Datil, Florida, 7500",
        "about": "Ad et duis excepteur minim excepteur ex duis do tempor. Cillum aliquip velit do quis ullamco qui do aliqua dolore. Ea dolore dolor sint Lorem ut esse ipsum deserunt irure nostrud. Excepteur incididunt ullamco adipisicing sint cillum adipisicing incididunt exercitation magna ipsum sint ad reprehenderit cillum. Ipsum nisi cillum in deserunt aliqua ipsum ex pariatur cupidatat. Labore labore adipisicing cupidatat elit in eiusmod amet consequat officia ut exercitation consectetur excepteur.",
        "registered": "Saturday, January 20, 2018 1:39 AM",
        "latitude": "-67.037672",
        "longitude": "-34.511432",
        "tags": [
            "labore",
            "tempor",
            "tempor",
            "tempor",
            "elit"
        ],
        "range": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        "friends": [{
                "id": 0,
                "name": "Billie Phillips"
            },
            {
                "id": 1,
                "name": "Hess Bowman"
            },
            {
                "id": 2,
                "name": "Hannah Valentine"
            }
        ],
        "greeting": "Hello, Clements! You have 8 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "600b4663ad6f463945c95dcd",
        "index": 4,
        "guid": "f45d2eb4-0d90-4b0b-82c5-92decd2b731f",
        "isActive": true,
        "balance": "$1,903.48",
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "eyeColor": "green",
        "name": {
            "first": "Ina",
            "last": "Guzman"
        },
        "company": "PHOLIO",
        "email": "ina.guzman@pholio.tv",
        "phone": "+1 (965) 410-3629",
        "address": "772 Ridgecrest Terrace, Herlong, Hawaii, 1656",
        "about": "In amet occaecat eiusmod proident excepteur. Sint laboris in esse irure excepteur fugiat in consequat adipisicing commodo sunt esse laborum. Pariatur sit laborum consectetur ut anim incididunt amet deserunt est incididunt magna Lorem labore. Consequat sunt Lorem proident occaecat nostrud sunt ut dolor pariatur duis consequat pariatur. Ipsum veniam consectetur magna nisi laboris in ut ut dolore consequat dolor cupidatat eu non.",
        "registered": "Sunday, January 31, 2016 1:08 PM",
        "latitude": "27.247197",
        "longitude": "136.434338",
        "tags": [
            "minim",
            "reprehenderit",
            "dolore",
            "dolor",
            "ad"
        ],
        "range": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        "friends": [{
                "id": 0,
                "name": "Mccray Heath"
            },
            {
                "id": 1,
                "name": "Downs Paul"
            },
            {
                "id": 2,
                "name": "Mendoza Adkins"
            }
        ],
        "greeting": "Hello, Ina! You have 5 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "600b4663c6e28b014487815b",
        "index": 5,
        "guid": "ed7002f7-c181-4970-856d-58127a701009",
        "isActive": false,
        "balance": "$3,315.28",
        "picture": "http://placehold.it/32x32",
        "age": 31,
        "eyeColor": "blue",
        "name": {
            "first": "Jefferson",
            "last": "Monroe"
        },
        "company": "MOTOVATE",
        "email": "jefferson.monroe@motovate.io",
        "phone": "+1 (978) 502-2785",
        "address": "813 Midwood Street, Greensburg, Ohio, 7850",
        "about": "Ipsum ea laboris laborum minim. Nisi exercitation ut qui aute fugiat dolore velit Lorem aute ut ut mollit deserunt. Laboris et voluptate ullamco voluptate consequat. Deserunt duis magna id adipisicing do aliquip fugiat magna sit laboris in consequat ad.",
        "registered": "Monday, February 6, 2017 4:34 PM",
        "latitude": "-29.146344",
        "longitude": "120.205013",
        "tags": [
            "veniam",
            "veniam",
            "qui",
            "exercitation",
            "proident"
        ],
        "range": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        "friends": [{
                "id": 0,
                "name": "Lucile Roman"
            },
            {
                "id": 1,
                "name": "Sykes Buckley"
            },
            {
                "id": 2,
                "name": "Julianne Rodriquez"
            }
        ],
        "greeting": "Hello, Jefferson! You have 8 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "600b46634084156a30ac9551",
        "index": 6,
        "guid": "81f59ce5-afe5-4a4f-84c0-6149b077ba4f",
        "isActive": true,
        "balance": "$1,564.60",
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "eyeColor": "green",
        "name": {
            "first": "Santana",
            "last": "Morrison"
        },
        "company": "PETICULAR",
        "email": "santana.morrison@peticular.biz",
        "phone": "+1 (834) 507-3168",
        "address": "254 Sumpter Street, Churchill, Indiana, 8171",
        "about": "Sint magna excepteur duis dolore id ex ex nulla ea. Et dolore eu eu eiusmod ipsum reprehenderit amet nisi et anim et enim minim dolore. Mollit dolor sunt minim veniam eiusmod et.",
        "registered": "Sunday, August 3, 2014 3:43 AM",
        "latitude": "-43.546471",
        "longitude": "-36.880491",
        "tags": [
            "consectetur",
            "reprehenderit",
            "amet",
            "anim",
            "veniam"
        ],
        "range": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        "friends": [{
                "id": 0,
                "name": "Barlow Santiago"
            },
            {
                "id": 1,
                "name": "Barber Barber"
            },
            {
                "id": 2,
                "name": "Taylor Mason"
            }
        ],
        "greeting": "Hello, Santana! You have 10 unread messages.",
        "favoriteFruit": "apple"
    }
];

function user(host, port) {
    var start = new Date();

    const socket = io.connect('http://' + host + ':' + port, {
        'forceNew': true,
        'transports': ['websocket']
    });

    socket.on('connect', function() {

        // send loop message
        socket.emit('broadcast', message);

        socket.on('broadcastOk', function() {
            console.log(new Date() - start)
            start = new Date();
            socket.emit('broadcast', message);
        });
    });
};

const host = 'localhost';
const port = '3000';

user(host, port);