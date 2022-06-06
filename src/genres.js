const genres = [
    {
        "genre": "Fantasy",
        "books":
            [
                {   

                    "id" :  "1",
                    "author": "J. R. R. Tolkien",
                    "title": "The Fellowship of the Ring",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/910DjRN2msL.jpg",
                    "rating": 4.0
                },
                {   
                    "id" :  "2",
                    "author": "J. R. R. Tolkien",
                    "title": "The Two Towers",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/919-2hQNB6L.jpg",
                    "rating": 4.0
                },
                {
                    "id" :  "3",
                    "author": "J. R. R. Tolkien",
                    "title": "The Return of the King",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/91m8vgNyhBL.jpg",
                    "rating": 5.0
                },
                {
                    "id" :  "4",
                    "author": "Patrick Rothfuss",
                    "title": "The Name of the Wind",
                    "image": "https://m.media-amazon.com/images/I/517+fgdv85L._AC_SY580_.jpg",
                    "rating": 0.0
                },
                {
                    "id" :  "5",
                    "author": "Patrick Rothfuss",
                    "title": "The Wise Man's Fear",
                    "image": "https://m.media-amazon.com/images/I/51qKDJ8lPeL.jpg",
                    "rating": 0.0
                }
            ]
    },
    {
        "genre": "Crime story",
        "books":
            [
                {
                    "id" :  "6",
                    "author": "Jo Nesbo",
                    "title": "The Snowman",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/81VZXtide1L.jpg",
                    "rating": 4.0
                },
                {
                    "id" :  "7",
                    "author": "Jo Nesbo",
                    "title": "The Bat",
                    "image": "https://m.media-amazon.com/images/I/5143SsoP0ML._AC_SY350_QL15_.jpg",
                    "rating": 3.5
                },
                {
                    "id" :  "8",
                    "author": "Jo Nesbo",
                    "title": "The Redbreast",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/51plV2w7REL._SX324_BO1,204,203,200_.jpg",
                    "rating": 3.5
                },
                {
                    "id" :  "9",
                    "author": "Agatha Christie",
                    "title": "Murder on the Orient Express",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/51r0M+3m6FL.jpg",
                    "rating": 0.0
                },
                {
                    "id" :  "10",
                    "author": "Agatha Christie",
                    "title": "Death on the Nile",
                    "image": "https://m.media-amazon.com/images/I/413BTJgoyKL._AC_SY1000_.jpg",
                    "rating": 0.0
                }
            ]
    },
    {
        "genre": "Sci-fi",
        "books":
            [
                {
                    "id" :  "11",
                    "author": "Andy Weir",
                    "title": "The Martian",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/91vD1AcmV-L.jpg",
                    "rating": 0.0
                },
                {
                    "id" :  "12",
                    "author": "Frank Herbert",
                    "title": "Dune",
                    "image": "https://m.media-amazon.com/images/I/41XZIsa0OWL._AC_SY1000_.jpg",
                    "rating": 5.0
                },
                {
                    "id" :  "13",
                    "author": "Frank Herbert",
                    "title": "Dune Messiah",
                    "image": "https://m.media-amazon.com/images/I/41ZxMrigytL._AC_SY1000_.jpg",
                    "rating": 4.0
                },
                {
                    "id" :  "14",
                    "author": "Michael Crichton",
                    "title": "Jurssic Park",
                    "image": "https://m.media-amazon.com/images/I/513YRtlvzPL._AC_SY580_.jpg",
                    "rating": 0.0
                },
                {
                    "id" :  "15",
                    "author": "Michael Crichton",
                    "title": "The Lost World",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/71kbIS4TwgL.jpg",
                    "rating": 0.0
                }
            ]
    },
    {
        "genre": "Reports",
        "books":
            [
                {
                    "id" :  "16",
                    "author": "William Dalrymple",
                    "title": "Nine Lives: In Search of the Sacred in Modern India",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/81XT3qFE6kL.jpg",
                    "rating": 0.0
                },
                {
                    "id" :  "17",
                    "author": "Norman Lewis",
                    "title": "The Tomb in Seville: Crossing Spain on the Brink of Civil War",
                    "image": "https://book-assets.openroadmedia.com/9781480433267.jpg",
                    "rating": 0.0
                },
                {
                    "id" :  "18",
                    "author": "Rob Schmitz",
                    "title": "Street of Eternal Happiness: Big City Dreams Along a Shanghai Road",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/81VceREpbDL.jpg",
                    "rating": 0.0
                },
                {
                    "id" :  "19",
                    "author": "Kate Brown",
                    "title": "Manual for Survival: An Environmental History of Chernobyl Disaster",
                    "image": "https://m.media-amazon.com/images/I/51eAsEmDudL.jpg",
                    "rating": 0.0
                },
                {
                    "id" :  "20",
                    "author": "Garett M. Graff",
                    "title": "The Only Plane in the Sky",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/719RXWVhTsL.jpg",
                    "rating": 0.0
                }
            ]
    },
    {
        "genre": "Belles-lettres",
        "books":
            [
                {
                    "id" :  "21",
                    "author": "Reid Taylor Jenkins",
                    "title": "The Seven Husbands of Evelyn Hugo",
                    "image": "https://m.media-amazon.com/images/I/41Ohor4O+rL.jpg",
                    "rating": 5.0
                },
                {
                    "id" :  "22",
                    "author": "Perrin Valerie",
                    "title": "Fresh water for flowers",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/81yAIsm06KL.jpg",
                    "rating": 0.0
                },
                {
                    "id" :  "23",
                    "author": "Owens Delia",
                    "title": "Where The Crawdads Sings",
                    "image": "https://images-na.ssl-images-amazon.com/images/I/81HA6TJ5K-L.jpg",
                    "rating": 0.0
                },
                {
                    "id" :  "24",
                    "author": "Ronney Sally",
                    "title": "Beautiful World, Where Are You",
                    "image": "https://m.media-amazon.com/images/I/41RfHWoMEQS._AC_SY1000_.jpg",
                    "rating": 0.0
                },
                {
                    "id" :  "25",
                    "author": "Miller Madeline",
                    "title": "The Song of Achilles",
                    "image": "https://m.media-amazon.com/images/I/51DVvySduAL.jpg",
                    "rating": 2.5
                }
            ]
    }
]

export default genres