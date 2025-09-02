const { v4: uuid } = require('uuid');

const hotels = {
  "data": [
    {
      "id": "d0cf0dcc-72f4-4c32-beda-a7897c63089b",
      "name": "Mountain View Chalet",
      "category": "Mountain Resort",
      "image": "https://example.com/images/mountainviewchalet.jpg",
      "imageArr": [
        "https://example.com/images/mountainviewchalet1.jpg",
        "https://example.com/images/mountainviewchalet2.jpg"
      ],
      "address": "463 Hill View",
      "city": "Leh",
      "state": "Ladakh",
      "country": "India",
      "price": 3348,
      "rating": 4.6,
      "numberOfBathrooms": 1,
      "numberOfBeds": 3,
      "numberOfGuests": 6,
      "numberOfBedrooms": 3,
      "numberOfStudies": 1,
      "hostName": "Kavita",
      "hostJoinedOn": "March 2023",
      "amenities": [
        "Swimming Pool",
        "Bar"
      ]
    },
    {
      "id": "3d0bc443-829b-4790-9217-75f606c8e4fb",
      "name": "Golden Sands Resort",
      "category": "National Parks",
      "image": "https://example.com/images/goldensandsresort.jpg",
      "imageArr": [
        "https://example.com/images/goldensandsresort1.jpg",
        "https://example.com/images/goldensandsresort2.jpg"
      ],
      "address": "705 Main Street",
      "city": "Ooty",
      "state": "Rajasthan",
      "country": "India",
      "price": 4449,
      "rating": 4.0,
      "numberOfBathrooms": 1,
      "numberOfBeds": 3,
      "numberOfGuests": 5,
      "numberOfBedrooms": 3,
      "numberOfStudies": 0,
      "hostName": "Pooja",
      "hostJoinedOn": "October 2019",
      "amenities": [
        "Heater",
        "Balcony"
      ]
    },
    {
      "id": "80a808c6-9446-4638-b002-1c7a30ea9932",
      "name": "Snowy Peaks Lodge",
      "category": "Lakeside",
      "image": "https://example.com/images/snowypeakslodge.jpg",
      "imageArr": [
        "https://example.com/images/snowypeakslodge1.jpg",
        "https://example.com/images/snowypeakslodge2.jpg"
      ],
      "address": "259 Hill View",
      "city": "Shimla",
      "state": "Uttarakhand",
      "country": "India",
      "price": 3353,
      "rating": 3.0,
      "numberOfBathrooms": 2,
      "numberOfBeds": 1,
      "numberOfGuests": 5,
      "numberOfBedrooms": 3,
      "numberOfStudies": 1,
      "hostName": "Salim",
      "hostJoinedOn": "October 2022",
      "amenities": [
        "Air Conditioning",
        "Sea View"
      ]
    },
    {
      "id": "ccb947e3-0da9-4ede-b77b-b0fba6b03807",
      "name": "Mountain View Chalet",
      "category": "Lakeside",
      "image": "https://example.com/images/mountainviewchalet.jpg",
      "imageArr": [
        "https://example.com/images/mountainviewchalet1.jpg",
        "https://example.com/images/mountainviewchalet2.jpg"
      ],
      "address": "148 Mall Road",
      "city": "Darjeeling",
      "state": "Tamil Nadu",
      "country": "India",
      "price": 5628,
      "rating": 4.9,
      "numberOfBathrooms": 1,
      "numberOfBeds": 2,
      "numberOfGuests": 6,
      "numberOfBedrooms": 2,
      "numberOfStudies": 0,
      "hostName": "Divya",
      "hostJoinedOn": "October 2022",
      "amenities": [
        "Campfire",
        "Live Music",
        "Traditional Food"
      ]
    },
    {
      "id": "5eac7490-a487-4e73-ba90-eebba299f631",
      "name": "Desert Mirage Camp",
      "category": "National Parks",
      "image": "https://example.com/images/desertmiragecamp.jpg",
      "imageArr": [
        "https://example.com/images/desertmiragecamp1.jpg",
        "https://example.com/images/desertmiragecamp2.jpg"
      ],
      "address": "253 Main Street",
      "city": "Ooty",
      "state": "Rajasthan",
      "country": "India",
      "price": 2727,
      "rating": 4.0,
      "numberOfBathrooms": 2,
      "numberOfBeds": 3,
      "numberOfGuests": 5,
      "numberOfBedrooms": 2,
      "numberOfStudies": 0,
      "hostName": "Divya",
      "hostJoinedOn": "June 2018",
      "amenities": [
        "Parking",
        "Garden View"
      ]
    },
    {
      "id": "63a15bdb-c935-44d5-9858-16c5a520ffa7",
      "name": "Mountain View Chalet",
      "category": "National Parks",
      "image": "https://example.com/images/mountainviewchalet.jpg",
      "imageArr": [
        "https://example.com/images/mountainviewchalet1.jpg",
        "https://example.com/images/mountainviewchalet2.jpg"
      ],
      "address": "857 Mall Road",
      "city": "Jaisalmer",
      "state": "Uttarakhand",
      "country": "India",
      "price": 3846,
      "rating": 4.5,
      "numberOfBathrooms": 2,
      "numberOfBeds": 2,
      "numberOfGuests": 3,
      "numberOfBedrooms": 1,
      "numberOfStudies": 0,
      "hostName": "Kavita",
      "hostJoinedOn": "January 2019",
      "amenities": [
        "Wifi",
        "Kitchen",
        "Pets Allowed"
      ]
    },
    {
      "id": "ad90bf18-9f72-4bd2-865d-2328de44e371",
      "name": "Mountain View Chalet",
      "category": "Desert Retreat",
      "image": "https://example.com/images/mountainviewchalet.jpg",
      "imageArr": [
        "https://example.com/images/mountainviewchalet1.jpg",
        "https://example.com/images/mountainviewchalet2.jpg"
      ],
      "address": "162 Main Street",
      "city": "Rishikesh",
      "state": "West Bengal",
      "country": "India",
      "price": 4564,
      "rating": 4.1,
      "numberOfBathrooms": 1,
      "numberOfBeds": 2,
      "numberOfGuests": 3,
      "numberOfBedrooms": 2,
      "numberOfStudies": 0,
      "hostName": "Kavita",
      "hostJoinedOn": "March 2023",
      "amenities": [
        "Campfire",
        "Live Music",
        "Traditional Food"
      ]
    },
    {
      "id": "65fd6dbe-db63-4914-91ad-410cda18baee",
      "name": "Rainforest Haven",
      "category": "Desert Retreat",
      "image": "https://example.com/images/rainforesthaven.jpg",
      "imageArr": [
        "https://example.com/images/rainforesthaven1.jpg",
        "https://example.com/images/rainforesthaven2.jpg"
      ],
      "address": "945 Main Street",
      "city": "Ooty",
      "state": "Goa",
      "country": "India",
      "price": 4071,
      "rating": 4.4,
      "numberOfBathrooms": 3,
      "numberOfBeds": 3,
      "numberOfGuests": 3,
      "numberOfBedrooms": 1,
      "numberOfStudies": 1,
      "hostName": "Amit",
      "hostJoinedOn": "June 2023",
      "amenities": [
        "Air Conditioning",
        "Sea View"
      ]
    },
    {
      "id": "dc17cb00-3d13-40b7-b21b-63bf493d4636",
      "name": "Jungle Retreat",
      "category": "Mountain Resort",
      "image": "https://example.com/images/jungleretreat.jpg",
      "imageArr": [
        "https://example.com/images/jungleretreat1.jpg",
        "https://example.com/images/jungleretreat2.jpg"
      ],
      "address": "687 Hill View",
      "city": "Jaisalmer",
      "state": "Kerala",
      "country": "India",
      "price": 4195,
      "rating": 3.6,
      "numberOfBathrooms": 2,
      "numberOfBeds": 1,
      "numberOfGuests": 6,
      "numberOfBedrooms": 3,
      "numberOfStudies": 0,
      "hostName": "Amit",
      "hostJoinedOn": "January 2024",
      "amenities": [
        "Parking",
        "Garden View"
      ]
    },
    {
      "id": "171e3fca-bce6-4268-9274-65e422924f45",
      "name": "Valley Vista",
      "category": "Beachside",
      "image": "https://example.com/images/valleyvista.jpg",
      "imageArr": [
        "https://example.com/images/valleyvista1.jpg",
        "https://example.com/images/valleyvista2.jpg"
      ],
      "address": "774 Mall Road",
      "city": "Ooty",
      "state": "Ladakh",
      "country": "India",
      "price": 2876,
      "rating": 3.8,
      "numberOfBathrooms": 1,
      "numberOfBeds": 3,
      "numberOfGuests": 6,
      "numberOfBedrooms": 3,
      "numberOfStudies": 0,
      "hostName": "Rohit",
      "hostJoinedOn": "June 2018",
      "amenities": [
        "Heater",
        "Balcony"
      ]
    },
    {
      "id": "80d14575-4d22-44f9-b3db-f5367b77dfb6",
      "name": "Mountain View Chalet",
      "category": "Lakeside",
      "image": "https://example.com/images/mountainviewchalet.jpg",
      "imageArr": [
        "https://example.com/images/mountainviewchalet1.jpg",
        "https://example.com/images/mountainviewchalet2.jpg"
      ],
      "address": "216 Mall Road",
      "city": "Munnar",
      "state": "Ladakh",
      "country": "India",
      "price": 3198,
      "rating": 4.6,
      "numberOfBathrooms": 2,
      "numberOfBeds": 2,
      "numberOfGuests": 3,
      "numberOfBedrooms": 2,
      "numberOfStudies": 1,
      "hostName": "Rohit",
      "hostJoinedOn": "January 2019",
      "amenities": [
        "Wifi",
        "Kitchen",
        "Pets Allowed"
      ]
    },
    {
      "id": "3f025a1a-c9a2-4171-b969-426b6fa04cdb",
      "name": "Snowy Peaks Lodge",
      "category": "Lakeside",
      "image": "https://example.com/images/snowypeakslodge.jpg",
      "imageArr": [
        "https://example.com/images/snowypeakslodge1.jpg",
        "https://example.com/images/snowypeakslodge2.jpg"
      ],
      "address": "115 Main Street",
      "city": "Shimla",
      "state": "Tamil Nadu",
      "country": "India",
      "price": 4747,
      "rating": 4.3,
      "numberOfBathrooms": 3,
      "numberOfBeds": 3,
      "numberOfGuests": 2,
      "numberOfBedrooms": 2,
      "numberOfStudies": 1,
      "hostName": "Pooja",
      "hostJoinedOn": "October 2019",
      "amenities": [
        "Parking",
        "Garden View"
      ]
    },
    {
      "id": "9ee6b864-25fd-45f9-b2be-7028e1ae79e9",
      "name": "Golden Sands Resort",
      "category": "Lakeside",
      "image": "https://example.com/images/goldensandsresort.jpg",
      "imageArr": [
        "https://example.com/images/goldensandsresort1.jpg",
        "https://example.com/images/goldensandsresort2.jpg"
      ],
      "address": "738 Main Street",
      "city": "Rishikesh",
      "state": "Tamil Nadu",
      "country": "India",
      "price": 4454,
      "rating": 4.9,
      "numberOfBathrooms": 2,
      "numberOfBeds": 2,
      "numberOfGuests": 2,
      "numberOfBedrooms": 2,
      "numberOfStudies": 1,
      "hostName": "Nikhil",
      "hostJoinedOn": "June 2019",
      "amenities": [
        "Parking",
        "Garden View"
      ]
    },
    {
      "id": "c4d181af-13d3-414c-a5c1-f7f8abc48038",
      "name": "Valley Vista",
      "category": "Lakeside",
      "image": "https://example.com/images/valleyvista.jpg",
      "imageArr": [
        "https://example.com/images/valleyvista1.jpg",
        "https://example.com/images/valleyvista2.jpg"
      ],
      "address": "175 Main Street",
      "city": "Udaipur",
      "state": "Tamil Nadu",
      "country": "India",
      "price": 5607,
      "rating": 3.4,
      "numberOfBathrooms": 1,
      "numberOfBeds": 1,
      "numberOfGuests": 4,
      "numberOfBedrooms": 1,
      "numberOfStudies": 0,
      "hostName": "Sunil",
      "hostJoinedOn": "March 2023",
      "amenities": [
        "Parking",
        "Garden View"
      ]
    },
    {
      "id": "9b73f8fd-34b1-4067-bae2-e8af978dface",
      "name": "Jungle Retreat",
      "category": "National Parks",
      "image": "https://example.com/images/jungleretreat.jpg",
      "imageArr": [
        "https://example.com/images/jungleretreat1.jpg",
        "https://example.com/images/jungleretreat2.jpg"
      ],
      "address": "516 Hill View",
      "city": "Udaipur",
      "state": "Kerala",
      "country": "India",
      "price": 5780,
      "rating": 4.0,
      "numberOfBathrooms": 1,
      "numberOfBeds": 3,
      "numberOfGuests": 4,
      "numberOfBedrooms": 1,
      "numberOfStudies": 0,
      "hostName": "Sunil",
      "hostJoinedOn": "October 2020",
      "amenities": [
        "Parking",
        "Garden View"
      ]
    },
    {
      "id": "0e168ff5-46d4-4e54-b749-fde0dbca26e1",
      "name": "Ocean Breeze Resort",
      "category": "Mountain Resort",
      "image": "https://example.com/images/oceanbreezeresort.jpg",
      "imageArr": [
        "https://example.com/images/oceanbreezeresort1.jpg",
        "https://example.com/images/oceanbreezeresort2.jpg"
      ],
      "address": "409 Mall Road",
      "city": "Munnar",
      "state": "Tamil Nadu",
      "country": "India",
      "price": 5753,
      "rating": 5.0,
      "numberOfBathrooms": 2,
      "numberOfBeds": 3,
      "numberOfGuests": 5,
      "numberOfBedrooms": 2,
      "numberOfStudies": 0,
      "hostName": "Rohit",
      "hostJoinedOn": "June 2023",
      "amenities": [
        "Parking",
        "Garden View"
      ]
    },
    {
      "id": "5066e7b8-838c-40b9-963f-98c257ba8fd6",
      "name": "Mountain View Chalet",
      "category": "Lakeside",
      "image": "https://example.com/images/mountainviewchalet.jpg",
      "imageArr": [
        "https://example.com/images/mountainviewchalet1.jpg",
        "https://example.com/images/mountainviewchalet2.jpg"
      ],
      "address": "385 Main Street",
      "city": "Shimla",
      "state": "Kerala",
      "country": "India",
      "price": 3096,
      "rating": 3.5,
      "numberOfBathrooms": 1,
      "numberOfBeds": 1,
      "numberOfGuests": 2,
      "numberOfBedrooms": 3,
      "numberOfStudies": 1,
      "hostName": "Salim",
      "hostJoinedOn": "January 2018",
      "amenities": [
        "Campfire",
        "Live Music",
        "Traditional Food"
      ]
    },
    {
      "id": "0077eb24-e19a-4c66-be12-da35b39fb1bb",
      "name": "Lakeview Inn",
      "category": "Mountain Resort",
      "image": "https://example.com/images/lakeviewinn.jpg",
      "imageArr": [
        "https://example.com/images/lakeviewinn1.jpg",
        "https://example.com/images/lakeviewinn2.jpg"
      ],
      "address": "208 Hill View",
      "city": "Munnar",
      "state": "Goa",
      "country": "India",
      "price": 3315,
      "rating": 4.7,
      "numberOfBathrooms": 1,
      "numberOfBeds": 1,
      "numberOfGuests": 5,
      "numberOfBedrooms": 1,
      "numberOfStudies": 0,
      "hostName": "Meera",
      "hostJoinedOn": "January 2018",
      "amenities": [
        "Heater",
        "Balcony"
      ]
    },
    {
      "id": "78a0dae8-8510-4c05-bd4a-6bd4fa9cae57",
      "name": "Desert Mirage Camp",
      "category": "City Stay",
      "image": "https://example.com/images/desertmiragecamp.jpg",
      "imageArr": [
        "https://example.com/images/desertmiragecamp1.jpg",
        "https://example.com/images/desertmiragecamp2.jpg"
      ],
      "address": "679 Main Street",
      "city": "Leh",
      "state": "West Bengal",
      "country": "India",
      "price": 2531,
      "rating": 3.2,
      "numberOfBathrooms": 2,
      "numberOfBeds": 2,
      "numberOfGuests": 4,
      "numberOfBedrooms": 1,
      "numberOfStudies": 1,
      "hostName": "Rohit",
      "hostJoinedOn": "October 2021",
      "amenities": [
        "Parking",
        "Garden View"
      ]
    },
    {
      "id": "1d9dec67-bec3-4cc8-96b2-261ebb57b88d",
      "name": "Urban Escape Hotel",
      "category": "City Stay",
      "image": "https://example.com/images/urbanescapehotel.jpg",
      "imageArr": [
        "https://example.com/images/urbanescapehotel1.jpg",
        "https://example.com/images/urbanescapehotel2.jpg"
      ],
      "address": "228 Main Street",
      "city": "Goa",
      "state": "Tamil Nadu",
      "country": "India",
      "price": 5823,
      "rating": 3.4,
      "numberOfBathrooms": 1,
      "numberOfBeds": 2,
      "numberOfGuests": 6,
      "numberOfBedrooms": 2,
      "numberOfStudies": 0,
      "hostName": "Kavita",
      "hostJoinedOn": "June 2021",
      "amenities": [
        "Parking",
        "Garden View"
      ]
    },
    {
      "id": "c8700568-9933-4d5f-ba36-f78b9f389e4c",
      "name": "Rainforest Haven",
      "category": "National Parks",
      "image": "https://example.com/images/rainforesthaven.jpg",
      "imageArr": [
        "https://example.com/images/rainforesthaven1.jpg",
        "https://example.com/images/rainforesthaven2.jpg"
      ],
      "address": "471 Mall Road",
      "city": "Rishikesh",
      "state": "West Bengal",
      "country": "India",
      "price": 2004,
      "rating": 4.6,
      "numberOfBathrooms": 2,
      "numberOfBeds": 3,
      "numberOfGuests": 2,
      "numberOfBedrooms": 1,
      "numberOfStudies": 1,
      "hostName": "Rohit",
      "hostJoinedOn": "January 2018",
      "amenities": [
        "Air Conditioning",
        "Sea View"
      ]
    },
    {
      "id": "21e36b81-f809-43eb-8052-5ac8ca424bc6",
      "name": "Urban Escape Hotel",
      "category": "City Stay",
      "image": "https://example.com/images/urbanescapehotel.jpg",
      "imageArr": [
        "https://example.com/images/urbanescapehotel1.jpg",
        "https://example.com/images/urbanescapehotel2.jpg"
      ],
      "address": "922 Main Street",
      "city": "Munnar",
      "state": "Goa",
      "country": "India",
      "price": 5279,
      "rating": 4.3,
      "numberOfBathrooms": 3,
      "numberOfBeds": 2,
      "numberOfGuests": 2,
      "numberOfBedrooms": 2,
      "numberOfStudies": 1,
      "hostName": "Divya",
      "hostJoinedOn": "March 2021",
      "amenities": [
        "Air Conditioning",
        "Sea View"
      ]
    },
    {
      "id": "7a5bbfb0-fbbd-4235-879e-d87e84f28ff7",
      "name": "Golden Sands Resort",
      "category": "City Stay",
      "image": "https://example.com/images/goldensandsresort.jpg",
      "imageArr": [
        "https://example.com/images/goldensandsresort1.jpg",
        "https://example.com/images/goldensandsresort2.jpg"
      ],
      "address": "747 Mall Road",
      "city": "Shimla",
      "state": "Himachal Pradesh",
      "country": "India",
      "price": 2062,
      "rating": 5.0,
      "numberOfBathrooms": 3,
      "numberOfBeds": 3,
      "numberOfGuests": 5,
      "numberOfBedrooms": 2,
      "numberOfStudies": 0,
      "hostName": "Sunil",
      "hostJoinedOn": "October 2020",
      "amenities": [
        "Wifi",
        "Kitchen",
        "Pets Allowed"
      ]
    },
    {
      "id": "f9686949-1638-4870-91ec-c58e3fa77f5c",
      "name": "Rainforest Haven",
      "category": "National Parks",
      "image": "https://example.com/images/rainforesthaven.jpg",
      "imageArr": [
        "https://example.com/images/rainforesthaven1.jpg",
        "https://example.com/images/rainforesthaven2.jpg"
      ],
      "address": "158 Hill View",
      "city": "Darjeeling",
      "state": "West Bengal",
      "country": "India",
      "price": 5106,
      "rating": 4.3,
      "numberOfBathrooms": 2,
      "numberOfBeds": 1,
      "numberOfGuests": 3,
      "numberOfBedrooms": 1,
      "numberOfStudies": 1,
      "hostName": "Nikhil",
      "hostJoinedOn": "January 2018",
      "amenities": [
        "Wifi",
        "Kitchen",
        "Pets Allowed"
      ]
    },
    {
      "id": "541159d5-0766-4c01-a286-50642c3da62c",
      "name": "Valley Vista",
      "category": "Desert Retreat",
      "image": "https://example.com/images/valleyvista.jpg",
      "imageArr": [
        "https://example.com/images/valleyvista1.jpg",
        "https://example.com/images/valleyvista2.jpg"
      ],
      "address": "484 Hill View",
      "city": "Munnar",
      "state": "Goa",
      "country": "India",
      "price": 5740,
      "rating": 3.8,
      "numberOfBathrooms": 2,
      "numberOfBeds": 1,
      "numberOfGuests": 5,
      "numberOfBedrooms": 2,
      "numberOfStudies": 1,
      "hostName": "Meera",
      "hostJoinedOn": "October 2019",
      "amenities": [
        "Swimming Pool",
        "Bar"
      ]
    },
    {
      "id": "88bcfcdf-baff-4ea6-88f5-fcb464afda14",
      "name": "Rainforest Haven",
      "category": "Hill Station",
      "image": "https://example.com/images/rainforesthaven.jpg",
      "imageArr": [
        "https://example.com/images/rainforesthaven1.jpg",
        "https://example.com/images/rainforesthaven2.jpg"
      ],
      "address": "136 Hill View",
      "city": "Ooty",
      "state": "Himachal Pradesh",
      "country": "India",
      "price": 2350,
      "rating": 4.1,
      "numberOfBathrooms": 3,
      "numberOfBeds": 3,
      "numberOfGuests": 2,
      "numberOfBedrooms": 2,
      "numberOfStudies": 0,
      "hostName": "Amit",
      "hostJoinedOn": "October 2022",
      "amenities": [
        "Heater",
        "Balcony"
      ]
    },
    {
      "id": "adccea5c-a12f-40f1-b926-fc6b752ea484",
      "name": "Snowy Peaks Lodge",
      "category": "Desert Retreat",
      "image": "https://example.com/images/snowypeakslodge.jpg",
      "imageArr": [
        "https://example.com/images/snowypeakslodge1.jpg",
        "https://example.com/images/snowypeakslodge2.jpg"
      ],
      "address": "672 Hill View",
      "city": "Shimla",
      "state": "Goa",
      "country": "India",
      "price": 2643,
      "rating": 4.5,
      "numberOfBathrooms": 2,
      "numberOfBeds": 3,
      "numberOfGuests": 2,
      "numberOfBedrooms": 2,
      "numberOfStudies": 0,
      "hostName": "Kavita",
      "hostJoinedOn": "January 2022",
      "amenities": [
        "Air Conditioning",
        "Sea View"
      ]
    },
    {
      "id": "a39c668d-23ea-4da9-a156-ab1b3039c646",
      "name": "Ocean Breeze Resort",
      "category": "City Stay",
      "image": "https://example.com/images/oceanbreezeresort.jpg",
      "imageArr": [
        "https://example.com/images/oceanbreezeresort1.jpg",
        "https://example.com/images/oceanbreezeresort2.jpg"
      ],
      "address": "210 Main Street",
      "city": "Darjeeling",
      "state": "Ladakh",
      "country": "India",
      "price": 2617,
      "rating": 3.0,
      "numberOfBathrooms": 3,
      "numberOfBeds": 1,
      "numberOfGuests": 3,
      "numberOfBedrooms": 1,
      "numberOfStudies": 0,
      "hostName": "Nikhil",
      "hostJoinedOn": "January 2020",
      "amenities": [
        "Swimming Pool",
        "Bar"
      ]
    },
    {
      "id": "cfccfd8c-6d39-4939-9b43-a2ccc162d41c",
      "name": "Desert Mirage Camp",
      "category": "National Parks",
      "image": "https://example.com/images/desertmiragecamp.jpg",
      "imageArr": [
        "https://example.com/images/desertmiragecamp1.jpg",
        "https://example.com/images/desertmiragecamp2.jpg"
      ],
      "address": "961 Main Street",
      "city": "Jaisalmer",
      "state": "Tamil Nadu",
      "country": "India",
      "price": 5428,
      "rating": 3.1,
      "numberOfBathrooms": 3,
      "numberOfBeds": 2,
      "numberOfGuests": 3,
      "numberOfBedrooms": 2,
      "numberOfStudies": 0,
      "hostName": "Rohit",
      "hostJoinedOn": "March 2021",
      "amenities": [
        "Air Conditioning",
        "Sea View"
      ]
    },
    {
      "id": "afdd2b81-75b9-42a6-83ed-d2b48193fb12",
      "name": "Lakeview Inn",
      "category": "Mountain Resort",
      "image": "https://example.com/images/lakeviewinn.jpg",
      "imageArr": [
        "https://example.com/images/lakeviewinn1.jpg",
        "https://example.com/images/lakeviewinn2.jpg"
      ],
      "address": "945 Hill View",
      "city": "Darjeeling",
      "state": "West Bengal",
      "country": "India",
      "price": 2144,
      "rating": 3.5,
      "numberOfBathrooms": 2,
      "numberOfBeds": 3,
      "numberOfGuests": 5,
      "numberOfBedrooms": 1,
      "numberOfStudies": 1,
      "hostName": "Salim",
      "hostJoinedOn": "March 2021",
      "amenities": [
        "Air Conditioning",
        "Sea View"
      ]
    },
    {
      "id": "ea88fda8-d342-428a-b224-253661ea1f39",
      "name": "Desert Mirage Camp",
      "category": "National Parks",
      "image": "https://example.com/images/desertmiragecamp.jpg",
      "imageArr": [
        "https://example.com/images/desertmiragecamp1.jpg",
        "https://example.com/images/desertmiragecamp2.jpg"
      ],
      "address": "497 Hill View",
      "city": "Udaipur",
      "state": "Kerala",
      "country": "India",
      "price": 4414,
      "rating": 3.1,
      "numberOfBathrooms": 2,
      "numberOfBeds": 2,
      "numberOfGuests": 5,
      "numberOfBedrooms": 3,
      "numberOfStudies": 1,
      "hostName": "Arjun",
      "hostJoinedOn": "October 2022",
      "amenities": [
        "Swimming Pool",
        "Bar"
      ]
    },
    {
      "id": "24090536-c6d5-471e-92d8-3bd84c8984cf",
      "name": "Rainforest Haven",
      "category": "City Stay",
      "image": "https://example.com/images/rainforesthaven.jpg",
      "imageArr": [
        "https://example.com/images/rainforesthaven1.jpg",
        "https://example.com/images/rainforesthaven2.jpg"
      ],
      "address": "432 Hill View",
      "city": "Rishikesh",
      "state": "Goa",
      "country": "India",
      "price": 5124,
      "rating": 4.2,
      "numberOfBathrooms": 1,
      "numberOfBeds": 3,
      "numberOfGuests": 2,
      "numberOfBedrooms": 1,
      "numberOfStudies": 0,
      "hostName": "Arjun",
      "hostJoinedOn": "June 2024",
      "amenities": [
        "Wifi",
        "Kitchen",
        "Pets Allowed"
      ]
    },
    {
      "id": "c2eb7b08-ede4-4e26-bf08-a5d0d7e0cf16",
      "name": "Ocean Breeze Resort",
      "category": "Hill Station",
      "image": "https://example.com/images/oceanbreezeresort.jpg",
      "imageArr": [
        "https://example.com/images/oceanbreezeresort1.jpg",
        "https://example.com/images/oceanbreezeresort2.jpg"
      ],
      "address": "930 Mall Road",
      "city": "Ooty",
      "state": "Kerala",
      "country": "India",
      "price": 3772,
      "rating": 3.6,
      "numberOfBathrooms": 2,
      "numberOfBeds": 1,
      "numberOfGuests": 3,
      "numberOfBedrooms": 1,
      "numberOfStudies": 0,
      "hostName": "Nikhil",
      "hostJoinedOn": "June 2024",
      "amenities": [
        "Campfire",
        "Live Music",
        "Traditional Food"
      ]
    },
    {
      "id": "4b3cc008-a150-4da1-8072-9b6120158d99",
      "name": "Valley Vista",
      "category": "Hill Station",
      "image": "https://example.com/images/valleyvista.jpg",
      "imageArr": [
        "https://example.com/images/valleyvista1.jpg",
        "https://example.com/images/valleyvista2.jpg"
      ],
      "address": "643 Main Street",
      "city": "Leh",
      "state": "Himachal Pradesh",
      "country": "India",
      "price": 4507,
      "rating": 4.7,
      "numberOfBathrooms": 3,
      "numberOfBeds": 1,
      "numberOfGuests": 5,
      "numberOfBedrooms": 3,
      "numberOfStudies": 0,
      "hostName": "Rohit",
      "hostJoinedOn": "October 2020",
      "amenities": [
        "Wifi",
        "Kitchen",
        "Pets Allowed"
      ]
    },
    {
      "id": "eeb26cf9-afba-453e-9755-0114c661a949",
      "name": "Jungle Retreat",
      "category": "National Parks",
      "image": "https://example.com/images/jungleretreat.jpg",
      "imageArr": [
        "https://example.com/images/jungleretreat1.jpg",
        "https://example.com/images/jungleretreat2.jpg"
      ],
      "address": "209 Main Street",
      "city": "Shimla",
      "state": "Himachal Pradesh",
      "country": "India",
      "price": 2748,
      "rating": 3.9,
      "numberOfBathrooms": 2,
      "numberOfBeds": 3,
      "numberOfGuests": 3,
      "numberOfBedrooms": 3,
      "numberOfStudies": 0,
      "hostName": "Nikhil",
      "hostJoinedOn": "October 2022",
      "amenities": [
        "Wifi",
        "Kitchen",
        "Pets Allowed"
      ]
    },
    {
      "id": "83911a29-d322-41a9-8f69-59b3c5739f38",
      "name": "Mountain View Chalet",
      "category": "Desert Retreat",
      "image": "https://example.com/images/mountainviewchalet.jpg",
      "imageArr": [
        "https://example.com/images/mountainviewchalet1.jpg",
        "https://example.com/images/mountainviewchalet2.jpg"
      ],
      "address": "132 Main Street",
      "city": "Udaipur",
      "state": "Himachal Pradesh",
      "country": "India",
      "price": 2382,
      "rating": 4.0,
      "numberOfBathrooms": 3,
      "numberOfBeds": 2,
      "numberOfGuests": 2,
      "numberOfBedrooms": 3,
      "numberOfStudies": 1,
      "hostName": "Nikhil",
      "hostJoinedOn": "January 2024",
      "amenities": [
        "Parking",
        "Garden View"
      ]
    },
    {
      "id": "7fea3b30-a36b-49d1-823b-f40c576195a7",
      "name": "Snowy Peaks Lodge",
      "category": "Desert Retreat",
      "image": "https://example.com/images/snowypeakslodge.jpg",
      "imageArr": [
        "https://example.com/images/snowypeakslodge1.jpg",
        "https://example.com/images/snowypeakslodge2.jpg"
      ],
      "address": "996 Hill View",
      "city": "Leh",
      "state": "West Bengal",
      "country": "India",
      "price": 4438,
      "rating": 4.2,
      "numberOfBathrooms": 2,
      "numberOfBeds": 2,
      "numberOfGuests": 3,
      "numberOfBedrooms": 2,
      "numberOfStudies": 1,
      "hostName": "Amit",
      "hostJoinedOn": "October 2023",
      "amenities": [
        "Air Conditioning",
        "Sea View"
      ]
    },
    {
      "id": "f2ada07b-2464-4c47-9aa0-3bdb985059fc",
      "name": "Ocean Breeze Resort",
      "category": "City Stay",
      "image": "https://example.com/images/oceanbreezeresort.jpg",
      "imageArr": [
        "https://example.com/images/oceanbreezeresort1.jpg",
        "https://example.com/images/oceanbreezeresort2.jpg"
      ],
      "address": "925 Mall Road",
      "city": "Munnar",
      "state": "Tamil Nadu",
      "country": "India",
      "price": 5427,
      "rating": 4.0,
      "numberOfBathrooms": 2,
      "numberOfBeds": 3,
      "numberOfGuests": 6,
      "numberOfBedrooms": 1,
      "numberOfStudies": 1,
      "hostName": "Pooja",
      "hostJoinedOn": "January 2019",
      "amenities": [
        "Swimming Pool",
        "Bar"
      ]
    },
    {
      "id": "73266118-ebb4-46a7-a65c-f720a1634dcd",
      "name": "Ocean Breeze Resort",
      "category": "Hill Station",
      "image": "https://example.com/images/oceanbreezeresort.jpg",
      "imageArr": [
        "https://example.com/images/oceanbreezeresort1.jpg",
        "https://example.com/images/oceanbreezeresort2.jpg"
      ],
      "address": "302 Mall Road",
      "city": "Manali",
      "state": "Rajasthan",
      "country": "India",
      "price": 4706,
      "rating": 4.8,
      "numberOfBathrooms": 2,
      "numberOfBeds": 2,
      "numberOfGuests": 3,
      "numberOfBedrooms": 2,
      "numberOfStudies": 1,
      "hostName": "Amit",
      "hostJoinedOn": "June 2022",
      "amenities": [
        "Air Conditioning",
        "Sea View"
      ]
    },
    {
      "id": "afdee6bc-1d9c-49ea-8528-d2454449a29e",
      "name": "Mountain View Chalet",
      "category": "Hill Station",
      "image": "https://example.com/images/mountainviewchalet.jpg",
      "imageArr": [
        "https://example.com/images/mountainviewchalet1.jpg",
        "https://example.com/images/mountainviewchalet2.jpg"
      ],
      "address": "861 Mall Road",
      "city": "Goa",
      "state": "Ladakh",
      "country": "India",
      "price": 3839,
      "rating": 4.8,
      "numberOfBathrooms": 2,
      "numberOfBeds": 3,
      "numberOfGuests": 3,
      "numberOfBedrooms": 3,
      "numberOfStudies": 0,
      "hostName": "Arjun",
      "hostJoinedOn": "October 2022",
      "amenities": [
        "Air Conditioning",
        "Sea View"
      ]
    },
    {
      "id": "44fce232-8aae-45e3-8815-e7e97a449f40",
      "name": "Lakeview Inn",
      "category": "Beachside",
      "image": "https://example.com/images/lakeviewinn.jpg",
      "imageArr": [
        "https://example.com/images/lakeviewinn1.jpg",
        "https://example.com/images/lakeviewinn2.jpg"
      ],
      "address": "666 Main Street",
      "city": "Jaisalmer",
      "state": "Kerala",
      "country": "India",
      "price": 2606,
      "rating": 3.8,
      "numberOfBathrooms": 1,
      "numberOfBeds": 3,
      "numberOfGuests": 6,
      "numberOfBedrooms": 1,
      "numberOfStudies": 0,
      "hostName": "Arjun",
      "hostJoinedOn": "March 2021",
      "amenities": [
        "Campfire",
        "Live Music",
        "Traditional Food"
      ]
    },
    {
      "id": "becb4b7e-bef6-4526-8620-d24b89e22505",
      "name": "Golden Sands Resort",
      "category": "Beachside",
      "image": "https://example.com/images/goldensandsresort.jpg",
      "imageArr": [
        "https://example.com/images/goldensandsresort1.jpg",
        "https://example.com/images/goldensandsresort2.jpg"
      ],
      "address": "442 Hill View",
      "city": "Ooty",
      "state": "Kerala",
      "country": "India",
      "price": 2169,
      "rating": 5.0,
      "numberOfBathrooms": 2,
      "numberOfBeds": 2,
      "numberOfGuests": 2,
      "numberOfBedrooms": 2,
      "numberOfStudies": 1,
      "hostName": "Rohit",
      "hostJoinedOn": "October 2023",
      "amenities": [
        "Air Conditioning",
        "Sea View"
      ]
    },
    {
      "id": "ddafdcf5-b3ed-4d8a-82f8-135ae9d0959c",
      "name": "Golden Sands Resort",
      "category": "City Stay",
      "image": "https://example.com/images/goldensandsresort.jpg",
      "imageArr": [
        "https://example.com/images/goldensandsresort1.jpg",
        "https://example.com/images/goldensandsresort2.jpg"
      ],
      "address": "366 Hill View",
      "city": "Shimla",
      "state": "Himachal Pradesh",
      "country": "India",
      "price": 2564,
      "rating": 3.4,
      "numberOfBathrooms": 2,
      "numberOfBeds": 3,
      "numberOfGuests": 6,
      "numberOfBedrooms": 3,
      "numberOfStudies": 1,
      "hostName": "Salim",
      "hostJoinedOn": "October 2023",
      "amenities": [
        "Campfire",
        "Live Music",
        "Traditional Food"
      ]
    },
    {
      "id": "a0cd080c-61ec-4660-91f8-7b0a9760a1e6",
      "name": "Mountain View Chalet",
      "category": "Mountain Resort",
      "image": "https://example.com/images/mountainviewchalet.jpg",
      "imageArr": [
        "https://example.com/images/mountainviewchalet1.jpg",
        "https://example.com/images/mountainviewchalet2.jpg"
      ],
      "address": "770 Main Street",
      "city": "Goa",
      "state": "Kerala",
      "country": "India",
      "price": 4075,
      "rating": 4.8,
      "numberOfBathrooms": 2,
      "numberOfBeds": 2,
      "numberOfGuests": 4,
      "numberOfBedrooms": 3,
      "numberOfStudies": 0,
      "hostName": "Sunil",
      "hostJoinedOn": "January 2021",
      "amenities": [
        "Parking",
        "Garden View"
      ]
    },
    {
      "id": "3dc570db-fc11-4f68-86e5-8a5e7fbfd1f8",
      "name": "Valley Vista",
      "category": "Hill Station",
      "image": "https://example.com/images/valleyvista.jpg",
      "imageArr": [
        "https://example.com/images/valleyvista1.jpg",
        "https://example.com/images/valleyvista2.jpg"
      ],
      "address": "251 Main Street",
      "city": "Rishikesh",
      "state": "Rajasthan",
      "country": "India",
      "price": 4829,
      "rating": 4.9,
      "numberOfBathrooms": 1,
      "numberOfBeds": 2,
      "numberOfGuests": 2,
      "numberOfBedrooms": 1,
      "numberOfStudies": 1,
      "hostName": "Amit",
      "hostJoinedOn": "October 2019",
      "amenities": [
        "Parking",
        "Garden View"
      ]
    },
    {
      "id": "0f70ee36-7ece-4329-b4b4-51b08c4b13f4",
      "name": "Golden Sands Resort",
      "category": "Hill Station",
      "image": "https://example.com/images/goldensandsresort.jpg",
      "imageArr": [
        "https://example.com/images/goldensandsresort1.jpg",
        "https://example.com/images/goldensandsresort2.jpg"
      ],
      "address": "196 Mall Road",
      "city": "Rishikesh",
      "state": "Rajasthan",
      "country": "India",
      "price": 2653,
      "rating": 4.9,
      "numberOfBathrooms": 3,
      "numberOfBeds": 2,
      "numberOfGuests": 6,
      "numberOfBedrooms": 1,
      "numberOfStudies": 1,
      "hostName": "Rohit",
      "hostJoinedOn": "June 2020",
      "amenities": [
        "Parking",
        "Garden View"
      ]
    },
    {
      "id": "598fd365-312e-4870-bb55-fa7ec8a110a9",
      "name": "Golden Sands Resort",
      "category": "National Parks",
      "image": "https://example.com/images/goldensandsresort.jpg",
      "imageArr": [
        "https://example.com/images/goldensandsresort1.jpg",
        "https://example.com/images/goldensandsresort2.jpg"
      ],
      "address": "223 Hill View",
      "city": "Ooty",
      "state": "Rajasthan",
      "country": "India",
      "price": 4328,
      "rating": 4.0,
      "numberOfBathrooms": 2,
      "numberOfBeds": 3,
      "numberOfGuests": 6,
      "numberOfBedrooms": 3,
      "numberOfStudies": 0,
      "hostName": "Rohit",
      "hostJoinedOn": "October 2024",
      "amenities": [
        "Campfire",
        "Live Music",
        "Traditional Food"
      ]
    },
    {
      "id": "0594ad76-1332-47b3-82c2-5d76abe18a2e",
      "name": "Urban Escape Hotel",
      "category": "Hill Station",
      "image": "https://example.com/images/urbanescapehotel.jpg",
      "imageArr": [
        "https://example.com/images/urbanescapehotel1.jpg",
        "https://example.com/images/urbanescapehotel2.jpg"
      ],
      "address": "107 Hill View",
      "city": "Ooty",
      "state": "Uttarakhand",
      "country": "India",
      "price": 3377,
      "rating": 4.8,
      "numberOfBathrooms": 2,
      "numberOfBeds": 1,
      "numberOfGuests": 3,
      "numberOfBedrooms": 1,
      "numberOfStudies": 1,
      "hostName": "Divya",
      "hostJoinedOn": "March 2018",
      "amenities": [
        "Wifi",
        "Kitchen",
        "Pets Allowed"
      ]
    },
    {
      "id": "0a4ded50-09e1-4620-b46d-3ab0bbaca977",
      "name": "Valley Vista",
      "category": "Beachside",
      "image": "https://example.com/images/valleyvista.jpg",
      "imageArr": [
        "https://example.com/images/valleyvista1.jpg",
        "https://example.com/images/valleyvista2.jpg"
      ],
      "address": "195 Main Street",
      "city": "Shimla",
      "state": "Ladakh",
      "country": "India",
      "price": 2729,
      "rating": 4.8,
      "numberOfBathrooms": 3,
      "numberOfBeds": 2,
      "numberOfGuests": 3,
      "numberOfBedrooms": 3,
      "numberOfStudies": 0,
      "hostName": "Rohit",
      "hostJoinedOn": "March 2020",
      "amenities": [
        "Parking",
        "Garden View"
      ]
    },
    {
      "id": "289157ca-130f-428d-9639-3e3d23d54b24",
      "name": "Mountain View Chalet",
      "category": "Lakeside",
      "image": "https://example.com/images/mountainviewchalet.jpg",
      "imageArr": [
        "https://example.com/images/mountainviewchalet1.jpg",
        "https://example.com/images/mountainviewchalet2.jpg"
      ],
      "address": "754 Mall Road",
      "city": "Ooty",
      "state": "Himachal Pradesh",
      "country": "India",
      "price": 2652,
      "rating": 3.5,
      "numberOfBathrooms": 2,
      "numberOfBeds": 1,
      "numberOfGuests": 6,
      "numberOfBedrooms": 3,
      "numberOfStudies": 0,
      "hostName": "Meera",
      "hostJoinedOn": "March 2024",
      "amenities": [
        "Campfire",
        "Live Music",
        "Traditional Food"
      ]
    },
    {
      "id": "da24270b-767d-4578-ae94-491dbd2a9879",
      "name": "Desert Mirage Camp",
      "category": "Mountain Resort",
      "image": "https://example.com/images/desertmiragecamp.jpg",
      "imageArr": [
        "https://example.com/images/desertmiragecamp1.jpg",
        "https://example.com/images/desertmiragecamp2.jpg"
      ],
      "address": "639 Mall Road",
      "city": "Jaisalmer",
      "state": "Himachal Pradesh",
      "country": "India",
      "price": 5121,
      "rating": 4.2,
      "numberOfBathrooms": 3,
      "numberOfBeds": 3,
      "numberOfGuests": 4,
      "numberOfBedrooms": 1,
      "numberOfStudies": 0,
      "hostName": "Sunil",
      "hostJoinedOn": "October 2022",
      "amenities": [
        "Air Conditioning",
        "Sea View"
      ]
    },
    {
      "id": "0b9b7261-3a7f-40e4-a19a-a0c949be3107",
      "name": "Snowy Peaks Lodge",
      "category": "Lakeside",
      "image": "https://example.com/images/snowypeakslodge.jpg",
      "imageArr": [
        "https://example.com/images/snowypeakslodge1.jpg",
        "https://example.com/images/snowypeakslodge2.jpg"
      ],
      "address": "106 Mall Road",
      "city": "Manali",
      "state": "Himachal Pradesh",
      "country": "India",
      "price": 2322,
      "rating": 4.9,
      "numberOfBathrooms": 3,
      "numberOfBeds": 3,
      "numberOfGuests": 5,
      "numberOfBedrooms": 1,
      "numberOfStudies": 1,
      "hostName": "Rohit",
      "hostJoinedOn": "October 2021",
      "amenities": [
        "Parking",
        "Garden View"
      ]
    },
    {
      "id": "04a31627-f3e6-4669-bc34-6d27d35a624a",
      "name": "Valley Vista",
      "category": "Hill Station",
      "image": "https://example.com/images/valleyvista.jpg",
      "imageArr": [
        "https://example.com/images/valleyvista1.jpg",
        "https://example.com/images/valleyvista2.jpg"
      ],
      "address": "175 Main Street",
      "city": "Rishikesh",
      "state": "Himachal Pradesh",
      "country": "India",
      "price": 4042,
      "rating": 3.5,
      "numberOfBathrooms": 1,
      "numberOfBeds": 3,
      "numberOfGuests": 4,
      "numberOfBedrooms": 3,
      "numberOfStudies": 0,
      "hostName": "Sunil",
      "hostJoinedOn": "June 2024",
      "amenities": [
        "Swimming Pool",
        "Bar"
      ]
    },
    {
      "id": "183a08e4-0a14-46d3-bc74-1d8105e6cb62",
      "name": "Mountain View Chalet",
      "category": "City Stay",
      "image": "https://example.com/images/mountainviewchalet.jpg",
      "imageArr": [
        "https://example.com/images/mountainviewchalet1.jpg",
        "https://example.com/images/mountainviewchalet2.jpg"
      ],
      "address": "189 Main Street",
      "city": "Rishikesh",
      "state": "Goa",
      "country": "India",
      "price": 5920,
      "rating": 3.1,
      "numberOfBathrooms": 3,
      "numberOfBeds": 3,
      "numberOfGuests": 6,
      "numberOfBedrooms": 1,
      "numberOfStudies": 1,
      "hostName": "Nikhil",
      "hostJoinedOn": "March 2022",
      "amenities": [
        "Air Conditioning",
        "Sea View"
      ]
    },
    {
      "id": "b1637628-1e8b-4efb-8a12-3d8dafa856e1",
      "name": "Rainforest Haven",
      "category": "Mountain Resort",
      "image": "https://example.com/images/rainforesthaven.jpg",
      "imageArr": [
        "https://example.com/images/rainforesthaven1.jpg",
        "https://example.com/images/rainforesthaven2.jpg"
      ],
      "address": "234 Main Street",
      "city": "Leh",
      "state": "Himachal Pradesh",
      "country": "India",
      "price": 3066,
      "rating": 4.1,
      "numberOfBathrooms": 1,
      "numberOfBeds": 2,
      "numberOfGuests": 5,
      "numberOfBedrooms": 2,
      "numberOfStudies": 1,
      "hostName": "Amit",
      "hostJoinedOn": "June 2023",
      "amenities": [
        "Swimming Pool",
        "Bar"
      ]
    },
    {
      "id": "1d27c9a7-5292-42cb-bbb4-c71cb9949304",
      "name": "Ocean Breeze Resort",
      "category": "Mountain Resort",
      "image": "https://example.com/images/oceanbreezeresort.jpg",
      "imageArr": [
        "https://example.com/images/oceanbreezeresort1.jpg",
        "https://example.com/images/oceanbreezeresort2.jpg"
      ],
      "address": "822 Hill View",
      "city": "Darjeeling",
      "state": "Tamil Nadu",
      "country": "India",
      "price": 4421,
      "rating": 3.5,
      "numberOfBathrooms": 1,
      "numberOfBeds": 3,
      "numberOfGuests": 4,
      "numberOfBedrooms": 3,
      "numberOfStudies": 0,
      "hostName": "Kavita",
      "hostJoinedOn": "June 2019",
      "amenities": [
        "Campfire",
        "Live Music",
        "Traditional Food"
      ]
    },
    {
      "id": "b98270e4-4224-44ac-8552-fc6de0fe66c1",
      "name": "Mountain View Chalet",
      "category": "Mountain Resort",
      "image": "https://example.com/images/mountainviewchalet.jpg",
      "imageArr": [
        "https://example.com/images/mountainviewchalet1.jpg",
        "https://example.com/images/mountainviewchalet2.jpg"
      ],
      "address": "849 Mall Road",
      "city": "Manali",
      "state": "West Bengal",
      "country": "India",
      "price": 5725,
      "rating": 3.0,
      "numberOfBathrooms": 3,
      "numberOfBeds": 1,
      "numberOfGuests": 2,
      "numberOfBedrooms": 2,
      "numberOfStudies": 1,
      "hostName": "Arjun",
      "hostJoinedOn": "January 2024",
      "amenities": [
        "Air Conditioning",
        "Sea View"
      ]
    },
    {
      "id": "efb63da7-94b2-40c6-8dc7-25c6227d0ea2",
      "name": "Ocean Breeze Resort",
      "category": "Desert Retreat",
      "image": "https://example.com/images/oceanbreezeresort.jpg",
      "imageArr": [
        "https://example.com/images/oceanbreezeresort1.jpg",
        "https://example.com/images/oceanbreezeresort2.jpg"
      ],
      "address": "916 Mall Road",
      "city": "Munnar",
      "state": "Kerala",
      "country": "India",
      "price": 4927,
      "rating": 3.9,
      "numberOfBathrooms": 1,
      "numberOfBeds": 3,
      "numberOfGuests": 4,
      "numberOfBedrooms": 1,
      "numberOfStudies": 0,
      "hostName": "Amit",
      "hostJoinedOn": "October 2018",
      "amenities": [
        "Swimming Pool",
        "Bar"
      ]
    },
    {
      "id": "8b4b62b5-5ebe-454b-bfaa-dee75486a3f5",
      "name": "Jungle Retreat",
      "category": "City Stay",
      "image": "https://example.com/images/jungleretreat.jpg",
      "imageArr": [
        "https://example.com/images/jungleretreat1.jpg",
        "https://example.com/images/jungleretreat2.jpg"
      ],
      "address": "947 Hill View",
      "city": "Darjeeling",
      "state": "Kerala",
      "country": "India",
      "price": 2932,
      "rating": 4.9,
      "numberOfBathrooms": 1,
      "numberOfBeds": 2,
      "numberOfGuests": 3,
      "numberOfBedrooms": 2,
      "numberOfStudies": 1,
      "hostName": "Kavita",
      "hostJoinedOn": "October 2024",
      "amenities": [
        "Wifi",
        "Kitchen",
        "Pets Allowed"
      ]
    },
    {
      "id": "c84d288a-2e57-4932-882c-d3ad674b4ff9",
      "name": "Jungle Retreat",
      "category": "Mountain Resort",
      "image": "https://example.com/images/jungleretreat.jpg",
      "imageArr": [
        "https://example.com/images/jungleretreat1.jpg",
        "https://example.com/images/jungleretreat2.jpg"
      ],
      "address": "894 Main Street",
      "city": "Goa",
      "state": "West Bengal",
      "country": "India",
      "price": 4674,
      "rating": 4.7,
      "numberOfBathrooms": 2,
      "numberOfBeds": 1,
      "numberOfGuests": 4,
      "numberOfBedrooms": 1,
      "numberOfStudies": 1,
      "hostName": "Salim",
      "hostJoinedOn": "June 2019",
      "amenities": [
        "Heater",
        "Balcony"
      ]
    },
    {
      "id": "07d4ebc2-6b84-4bd4-b342-17433c67941f",
      "name": "Urban Escape Hotel",
      "category": "Hill Station",
      "image": "https://example.com/images/urbanescapehotel.jpg",
      "imageArr": [
        "https://example.com/images/urbanescapehotel1.jpg",
        "https://example.com/images/urbanescapehotel2.jpg"
      ],
      "address": "710 Mall Road",
      "city": "Darjeeling",
      "state": "Goa",
      "country": "India",
      "price": 4916,
      "rating": 3.8,
      "numberOfBathrooms": 1,
      "numberOfBeds": 2,
      "numberOfGuests": 2,
      "numberOfBedrooms": 2,
      "numberOfStudies": 1,
      "hostName": "Arjun",
      "hostJoinedOn": "March 2023",
      "amenities": [
        "Parking",
        "Garden View"
      ]
    },
    {
      "id": "f809ddb0-347d-4e97-9e56-6ca778e4f7bf",
      "name": "Valley Vista",
      "category": "Lakeside",
      "image": "https://example.com/images/valleyvista.jpg",
      "imageArr": [
        "https://example.com/images/valleyvista1.jpg",
        "https://example.com/images/valleyvista2.jpg"
      ],
      "address": "461 Mall Road",
      "city": "Leh",
      "state": "Ladakh",
      "country": "India",
      "price": 3239,
      "rating": 4.7,
      "numberOfBathrooms": 1,
      "numberOfBeds": 2,
      "numberOfGuests": 4,
      "numberOfBedrooms": 2,
      "numberOfStudies": 0,
      "hostName": "Kavita",
      "hostJoinedOn": "January 2024",
      "amenities": [
        "Swimming Pool",
        "Bar"
      ]
    },
    {
      "id": "abcef3ed-f9da-48d3-8e84-7291fb37fdfb",
      "name": "Valley Vista",
      "category": "City Stay",
      "image": "https://example.com/images/valleyvista.jpg",
      "imageArr": [
        "https://example.com/images/valleyvista1.jpg",
        "https://example.com/images/valleyvista2.jpg"
      ],
      "address": "281 Mall Road",
      "city": "Ooty",
      "state": "Kerala",
      "country": "India",
      "price": 2924,
      "rating": 4.0,
      "numberOfBathrooms": 3,
      "numberOfBeds": 3,
      "numberOfGuests": 2,
      "numberOfBedrooms": 1,
      "numberOfStudies": 1,
      "hostName": "Pooja",
      "hostJoinedOn": "June 2024",
      "amenities": [
        "Air Conditioning",
        "Sea View"
      ]
    },
    {
      "id": "bb733ede-a8f9-40c2-9d4c-31a6e58a57f4",
      "name": "Golden Sands Resort",
      "category": "Hill Station",
      "image": "https://example.com/images/goldensandsresort.jpg",
      "imageArr": [
        "https://example.com/images/goldensandsresort1.jpg",
        "https://example.com/images/goldensandsresort2.jpg"
      ],
      "address": "445 Mall Road",
      "city": "Manali",
      "state": "Tamil Nadu",
      "country": "India",
      "price": 3088,
      "rating": 3.1,
      "numberOfBathrooms": 3,
      "numberOfBeds": 3,
      "numberOfGuests": 2,
      "numberOfBedrooms": 1,
      "numberOfStudies": 0,
      "hostName": "Meera",
      "hostJoinedOn": "October 2018",
      "amenities": [
        "Air Conditioning",
        "Sea View"
      ]
    },
    {
      "id": "b8167896-8548-4009-8098-0279a86eaa2f",
      "name": "Golden Sands Resort",
      "category": "Mountain Resort",
      "image": "https://example.com/images/goldensandsresort.jpg",
      "imageArr": [
        "https://example.com/images/goldensandsresort1.jpg",
        "https://example.com/images/goldensandsresort2.jpg"
      ],
      "address": "619 Mall Road",
      "city": "Jaisalmer",
      "state": "Tamil Nadu",
      "country": "India",
      "price": 4846,
      "rating": 3.3,
      "numberOfBathrooms": 1,
      "numberOfBeds": 1,
      "numberOfGuests": 5,
      "numberOfBedrooms": 3,
      "numberOfStudies": 1,
      "hostName": "Pooja",
      "hostJoinedOn": "January 2018",
      "amenities": [
        "Swimming Pool",
        "Bar"
      ]
    },
    {
      "id": "6fe3ac1e-3262-4f11-a149-111c6a94cddd",
      "name": "Jungle Retreat",
      "category": "Hill Station",
      "image": "https://example.com/images/jungleretreat.jpg",
      "imageArr": [
        "https://example.com/images/jungleretreat1.jpg",
        "https://example.com/images/jungleretreat2.jpg"
      ],
      "address": "383 Mall Road",
      "city": "Munnar",
      "state": "Goa",
      "country": "India",
      "price": 3370,
      "rating": 5.0,
      "numberOfBathrooms": 3,
      "numberOfBeds": 2,
      "numberOfGuests": 5,
      "numberOfBedrooms": 3,
      "numberOfStudies": 0,
      "hostName": "Kavita",
      "hostJoinedOn": "October 2020",
      "amenities": [
        "Wifi",
        "Kitchen",
        "Pets Allowed"
      ]
    },
    {
      "id": "32aaeed8-0f40-436c-9ab4-4f0f6709da9d",
      "name": "Valley Vista",
      "category": "Mountain Resort",
      "image": "https://example.com/images/valleyvista.jpg",
      "imageArr": [
        "https://example.com/images/valleyvista1.jpg",
        "https://example.com/images/valleyvista2.jpg"
      ],
      "address": "591 Main Street",
      "city": "Manali",
      "state": "Uttarakhand",
      "country": "India",
      "price": 3424,
      "rating": 3.2,
      "numberOfBathrooms": 2,
      "numberOfBeds": 2,
      "numberOfGuests": 2,
      "numberOfBedrooms": 3,
      "numberOfStudies": 0,
      "hostName": "Divya",
      "hostJoinedOn": "June 2020",
      "amenities": [
        "Heater",
        "Balcony"
      ]
    },
    {
      "id": "e9b008ea-fac3-4f0c-801c-fd773eb545d3",
      "name": "Rainforest Haven",
      "category": "National Parks",
      "image": "https://example.com/images/rainforesthaven.jpg",
      "imageArr": [
        "https://example.com/images/rainforesthaven1.jpg",
        "https://example.com/images/rainforesthaven2.jpg"
      ],
      "address": "141 Main Street",
      "city": "Jaisalmer",
      "state": "Rajasthan",
      "country": "India",
      "price": 5508,
      "rating": 4.7,
      "numberOfBathrooms": 2,
      "numberOfBeds": 2,
      "numberOfGuests": 2,
      "numberOfBedrooms": 2,
      "numberOfStudies": 0,
      "hostName": "Meera",
      "hostJoinedOn": "January 2018",
      "amenities": [
        "Swimming Pool",
        "Bar"
      ]
    },
    {
      "id": "cf7d9a1b-fab0-4287-a76c-77a72d2d80f3",
      "name": "Valley Vista",
      "category": "City Stay",
      "image": "https://example.com/images/valleyvista.jpg",
      "imageArr": [
        "https://example.com/images/valleyvista1.jpg",
        "https://example.com/images/valleyvista2.jpg"
      ],
      "address": "450 Mall Road",
      "city": "Shimla",
      "state": "Uttarakhand",
      "country": "India",
      "price": 2896,
      "rating": 3.8,
      "numberOfBathrooms": 3,
      "numberOfBeds": 1,
      "numberOfGuests": 3,
      "numberOfBedrooms": 1,
      "numberOfStudies": 1,
      "hostName": "Nikhil",
      "hostJoinedOn": "June 2018",
      "amenities": [
        "Campfire",
        "Live Music",
        "Traditional Food"
      ]
    },
    {
      "id": "0b3947a0-1898-4a08-ad1c-e8db4d93bda1",
      "name": "Urban Escape Hotel",
      "category": "City Stay",
      "image": "https://example.com/images/urbanescapehotel.jpg",
      "imageArr": [
        "https://example.com/images/urbanescapehotel1.jpg",
        "https://example.com/images/urbanescapehotel2.jpg"
      ],
      "address": "790 Hill View",
      "city": "Jaisalmer",
      "state": "Ladakh",
      "country": "India",
      "price": 5704,
      "rating": 3.3,
      "numberOfBathrooms": 2,
      "numberOfBeds": 3,
      "numberOfGuests": 5,
      "numberOfBedrooms": 3,
      "numberOfStudies": 1,
      "hostName": "Salim",
      "hostJoinedOn": "October 2021",
      "amenities": [
        "Campfire",
        "Live Music",
        "Traditional Food"
      ]
    },
    {
      "id": "c89df115-a852-4db4-a1eb-6d926bc1fabe",
      "name": "Golden Sands Resort",
      "category": "Lakeside",
      "image": "https://example.com/images/goldensandsresort.jpg",
      "imageArr": [
        "https://example.com/images/goldensandsresort1.jpg",
        "https://example.com/images/goldensandsresort2.jpg"
      ],
      "address": "351 Hill View",
      "city": "Munnar",
      "state": "Goa",
      "country": "India",
      "price": 3450,
      "rating": 3.6,
      "numberOfBathrooms": 3,
      "numberOfBeds": 2,
      "numberOfGuests": 3,
      "numberOfBedrooms": 3,
      "numberOfStudies": 1,
      "hostName": "Rohit",
      "hostJoinedOn": "January 2019",
      "amenities": [
        "Swimming Pool",
        "Bar"
      ]
    },
    {
      "id": "fc33dff7-2f8e-4ab8-8e7c-bdb934b485f4",
      "name": "Snowy Peaks Lodge",
      "category": "Desert Retreat",
      "image": "https://example.com/images/snowypeakslodge.jpg",
      "imageArr": [
        "https://example.com/images/snowypeakslodge1.jpg",
        "https://example.com/images/snowypeakslodge2.jpg"
      ],
      "address": "768 Hill View",
      "city": "Rishikesh",
      "state": "Uttarakhand",
      "country": "India",
      "price": 2854,
      "rating": 4.1,
      "numberOfBathrooms": 2,
      "numberOfBeds": 1,
      "numberOfGuests": 5,
      "numberOfBedrooms": 1,
      "numberOfStudies": 0,
      "hostName": "Rohit",
      "hostJoinedOn": "January 2024",
      "amenities": [
        "Wifi",
        "Kitchen",
        "Pets Allowed"
      ]
    },
    {
      "id": "012f67b8-5a09-4454-99ba-86ef4a087591",
      "name": "Mountain View Chalet",
      "category": "Hill Station",
      "image": "https://example.com/images/mountainviewchalet.jpg",
      "imageArr": [
        "https://example.com/images/mountainviewchalet1.jpg",
        "https://example.com/images/mountainviewchalet2.jpg"
      ],
      "address": "333 Main Street",
      "city": "Leh",
      "state": "Ladakh",
      "country": "India",
      "price": 2343,
      "rating": 4.9,
      "numberOfBathrooms": 3,
      "numberOfBeds": 3,
      "numberOfGuests": 3,
      "numberOfBedrooms": 3,
      "numberOfStudies": 1,
      "hostName": "Amit",
      "hostJoinedOn": "March 2018",
      "amenities": [
        "Parking",
        "Garden View"
      ]
    },
    {
      "id": "6d0575d0-5413-4a0a-86c7-2de6be2e5eac",
      "name": "Ocean Breeze Resort",
      "category": "Mountain Resort",
      "image": "https://example.com/images/oceanbreezeresort.jpg",
      "imageArr": [
        "https://example.com/images/oceanbreezeresort1.jpg",
        "https://example.com/images/oceanbreezeresort2.jpg"
      ],
      "address": "902 Hill View",
      "city": "Shimla",
      "state": "West Bengal",
      "country": "India",
      "price": 5357,
      "rating": 3.6,
      "numberOfBathrooms": 3,
      "numberOfBeds": 2,
      "numberOfGuests": 6,
      "numberOfBedrooms": 2,
      "numberOfStudies": 1,
      "hostName": "Amit",
      "hostJoinedOn": "October 2021",
      "amenities": [
        "Swimming Pool",
        "Bar"
      ]
    },
    {
      "id": "b991904f-9d63-45f7-8a2a-e8e645675a4a",
      "name": "Lakeview Inn",
      "category": "Mountain Resort",
      "image": "https://example.com/images/lakeviewinn.jpg",
      "imageArr": [
        "https://example.com/images/lakeviewinn1.jpg",
        "https://example.com/images/lakeviewinn2.jpg"
      ],
      "address": "215 Hill View",
      "city": "Munnar",
      "state": "Tamil Nadu",
      "country": "India",
      "price": 2367,
      "rating": 3.2,
      "numberOfBathrooms": 2,
      "numberOfBeds": 3,
      "numberOfGuests": 3,
      "numberOfBedrooms": 2,
      "numberOfStudies": 0,
      "hostName": "Kavita",
      "hostJoinedOn": "October 2018",
      "amenities": [
        "Parking",
        "Garden View"
      ]
    },
    {
      "id": "ccc02438-709f-4243-86f2-a83fd6f824a5",
      "name": "Jungle Retreat",
      "category": "Mountain Resort",
      "image": "https://example.com/images/jungleretreat.jpg",
      "imageArr": [
        "https://example.com/images/jungleretreat1.jpg",
        "https://example.com/images/jungleretreat2.jpg"
      ],
      "address": "189 Hill View",
      "city": "Shimla",
      "state": "West Bengal",
      "country": "India",
      "price": 5534,
      "rating": 3.7,
      "numberOfBathrooms": 1,
      "numberOfBeds": 1,
      "numberOfGuests": 5,
      "numberOfBedrooms": 3,
      "numberOfStudies": 1,
      "hostName": "Nikhil",
      "hostJoinedOn": "June 2019",
      "amenities": [
        "Parking",
        "Garden View"
      ]
    },
    {
      "id": "cb743ffe-454b-424b-ae28-e647f8608b33",
      "name": "Jungle Retreat",
      "category": "Beachside",
      "image": "https://example.com/images/jungleretreat.jpg",
      "imageArr": [
        "https://example.com/images/jungleretreat1.jpg",
        "https://example.com/images/jungleretreat2.jpg"
      ],
      "address": "478 Main Street",
      "city": "Goa",
      "state": "Tamil Nadu",
      "country": "India",
      "price": 3947,
      "rating": 4.1,
      "numberOfBathrooms": 1,
      "numberOfBeds": 2,
      "numberOfGuests": 3,
      "numberOfBedrooms": 1,
      "numberOfStudies": 1,
      "hostName": "Amit",
      "hostJoinedOn": "January 2021",
      "amenities": [
        "Swimming Pool",
        "Bar"
      ]
    },
    {
      "id": "8b2ca79e-b960-4191-8605-6b5b3b8938ea",
      "name": "Golden Sands Resort",
      "category": "National Parks",
      "image": "https://example.com/images/goldensandsresort.jpg",
      "imageArr": [
        "https://example.com/images/goldensandsresort1.jpg",
        "https://example.com/images/goldensandsresort2.jpg"
      ],
      "address": "977 Mall Road",
      "city": "Manali",
      "state": "Ladakh",
      "country": "India",
      "price": 4766,
      "rating": 3.3,
      "numberOfBathrooms": 2,
      "numberOfBeds": 1,
      "numberOfGuests": 3,
      "numberOfBedrooms": 2,
      "numberOfStudies": 1,
      "hostName": "Rohit",
      "hostJoinedOn": "October 2022",
      "amenities": [
        "Air Conditioning",
        "Sea View"
      ]
    },
    {
      "id": "bca63d23-4763-4ca1-8d81-46f90f29d357",
      "name": "Desert Mirage Camp",
      "category": "Desert Retreat",
      "image": "https://example.com/images/desertmiragecamp.jpg",
      "imageArr": [
        "https://example.com/images/desertmiragecamp1.jpg",
        "https://example.com/images/desertmiragecamp2.jpg"
      ],
      "address": "728 Mall Road",
      "city": "Shimla",
      "state": "Kerala",
      "country": "India",
      "price": 4161,
      "rating": 4.1,
      "numberOfBathrooms": 2,
      "numberOfBeds": 2,
      "numberOfGuests": 2,
      "numberOfBedrooms": 2,
      "numberOfStudies": 1,
      "hostName": "Sunil",
      "hostJoinedOn": "January 2018",
      "amenities": [
        "Campfire",
        "Live Music",
        "Traditional Food"
      ]
    },
    {
      "id": "29ab8e4d-c43f-4db1-92bf-3be986ba19fb",
      "name": "Golden Sands Resort",
      "category": "Desert Retreat",
      "image": "https://example.com/images/goldensandsresort.jpg",
      "imageArr": [
        "https://example.com/images/goldensandsresort1.jpg",
        "https://example.com/images/goldensandsresort2.jpg"
      ],
      "address": "824 Mall Road",
      "city": "Darjeeling",
      "state": "West Bengal",
      "country": "India",
      "price": 2298,
      "rating": 3.5,
      "numberOfBathrooms": 1,
      "numberOfBeds": 3,
      "numberOfGuests": 5,
      "numberOfBedrooms": 2,
      "numberOfStudies": 0,
      "hostName": "Sunil",
      "hostJoinedOn": "October 2022",
      "amenities": [
        "Swimming Pool",
        "Bar"
      ]
    },
    {
      "id": "20ed42e6-16d6-4716-a067-de4a321e1d02",
      "name": "Rainforest Haven",
      "category": "Mountain Resort",
      "image": "https://example.com/images/rainforesthaven.jpg",
      "imageArr": [
        "https://example.com/images/rainforesthaven1.jpg",
        "https://example.com/images/rainforesthaven2.jpg"
      ],
      "address": "389 Main Street",
      "city": "Jaisalmer",
      "state": "Uttarakhand",
      "country": "India",
      "price": 2892,
      "rating": 4.5,
      "numberOfBathrooms": 1,
      "numberOfBeds": 1,
      "numberOfGuests": 4,
      "numberOfBedrooms": 1,
      "numberOfStudies": 1,
      "hostName": "Pooja",
      "hostJoinedOn": "October 2023",
      "amenities": [
        "Air Conditioning",
        "Sea View"
      ]
    },
    {
      "id": "4e90a6b0-3d00-4e04-9f68-3b03cca25286",
      "name": "Desert Mirage Camp",
      "category": "City Stay",
      "image": "https://example.com/images/desertmiragecamp.jpg",
      "imageArr": [
        "https://example.com/images/desertmiragecamp1.jpg",
        "https://example.com/images/desertmiragecamp2.jpg"
      ],
      "address": "444 Main Street",
      "city": "Manali",
      "state": "Goa",
      "country": "India",
      "price": 5975,
      "rating": 3.6,
      "numberOfBathrooms": 2,
      "numberOfBeds": 1,
      "numberOfGuests": 5,
      "numberOfBedrooms": 3,
      "numberOfStudies": 0,
      "hostName": "Meera",
      "hostJoinedOn": "October 2022",
      "amenities": [
        "Air Conditioning",
        "Sea View"
      ]
    },
    {
      "id": "d32e47a2-9cd3-44de-8eea-2454d55df34e",
      "name": "Valley Vista",
      "category": "Mountain Resort",
      "image": "https://example.com/images/valleyvista.jpg",
      "imageArr": [
        "https://example.com/images/valleyvista1.jpg",
        "https://example.com/images/valleyvista2.jpg"
      ],
      "address": "644 Main Street",
      "city": "Leh",
      "state": "Goa",
      "country": "India",
      "price": 4374,
      "rating": 4.3,
      "numberOfBathrooms": 3,
      "numberOfBeds": 2,
      "numberOfGuests": 2,
      "numberOfBedrooms": 1,
      "numberOfStudies": 0,
      "hostName": "Rohit",
      "hostJoinedOn": "June 2020",
      "amenities": [
        "Heater",
        "Balcony"
      ]
    },
    {
      "id": "3f9d367d-dc42-4f92-888d-3348fb12a527",
      "name": "Mountain View Chalet",
      "category": "National Parks",
      "image": "https://example.com/images/mountainviewchalet.jpg",
      "imageArr": [
        "https://example.com/images/mountainviewchalet1.jpg",
        "https://example.com/images/mountainviewchalet2.jpg"
      ],
      "address": "282 Mall Road",
      "city": "Darjeeling",
      "state": "Uttarakhand",
      "country": "India",
      "price": 4716,
      "rating": 3.3,
      "numberOfBathrooms": 2,
      "numberOfBeds": 3,
      "numberOfGuests": 3,
      "numberOfBedrooms": 2,
      "numberOfStudies": 1,
      "hostName": "Amit",
      "hostJoinedOn": "June 2023",
      "amenities": [
        "Campfire",
        "Live Music",
        "Traditional Food"
      ]
    },
    {
      "id": "3f006974-41b7-4bb7-97e5-84f8c37785a9",
      "name": "Urban Escape Hotel",
      "category": "City Stay",
      "image": "https://example.com/images/urbanescapehotel.jpg",
      "imageArr": [
        "https://example.com/images/urbanescapehotel1.jpg",
        "https://example.com/images/urbanescapehotel2.jpg"
      ],
      "address": "629 Hill View",
      "city": "Goa",
      "state": "Rajasthan",
      "country": "India",
      "price": 4352,
      "rating": 4.8,
      "numberOfBathrooms": 1,
      "numberOfBeds": 2,
      "numberOfGuests": 2,
      "numberOfBedrooms": 2,
      "numberOfStudies": 0,
      "hostName": "Kavita",
      "hostJoinedOn": "March 2020",
      "amenities": [
        "Air Conditioning",
        "Sea View"
      ]
    },
    {
      "id": "801df1bb-edef-4124-b748-db6157bcce32",
      "name": "Urban Escape Hotel",
      "category": "Desert Retreat",
      "image": "https://example.com/images/urbanescapehotel.jpg",
      "imageArr": [
        "https://example.com/images/urbanescapehotel1.jpg",
        "https://example.com/images/urbanescapehotel2.jpg"
      ],
      "address": "823 Main Street",
      "city": "Shimla",
      "state": "Rajasthan",
      "country": "India",
      "price": 3894,
      "rating": 4.5,
      "numberOfBathrooms": 3,
      "numberOfBeds": 3,
      "numberOfGuests": 4,
      "numberOfBedrooms": 2,
      "numberOfStudies": 1,
      "hostName": "Sunil",
      "hostJoinedOn": "October 2019",
      "amenities": [
        "Wifi",
        "Kitchen",
        "Pets Allowed"
      ]
    },
    {
      "id": "7723003b-fe4f-4409-95ba-93159b4ae322",
      "name": "Urban Escape Hotel",
      "category": "City Stay",
      "image": "https://example.com/images/urbanescapehotel.jpg",
      "imageArr": [
        "https://example.com/images/urbanescapehotel1.jpg",
        "https://example.com/images/urbanescapehotel2.jpg"
      ],
      "address": "820 Mall Road",
      "city": "Rishikesh",
      "state": "Himachal Pradesh",
      "country": "India",
      "price": 2989,
      "rating": 4.6,
      "numberOfBathrooms": 3,
      "numberOfBeds": 3,
      "numberOfGuests": 2,
      "numberOfBedrooms": 2,
      "numberOfStudies": 1,
      "hostName": "Amit",
      "hostJoinedOn": "October 2019",
      "amenities": [
        "Wifi",
        "Kitchen",
        "Pets Allowed"
      ]
    },
    {
      "id": "fcf2f8b4-9d5b-4495-b771-1300e4f5cad5",
      "name": "Golden Sands Resort",
      "category": "Beachside",
      "image": "https://example.com/images/goldensandsresort.jpg",
      "imageArr": [
        "https://example.com/images/goldensandsresort1.jpg",
        "https://example.com/images/goldensandsresort2.jpg"
      ],
      "address": "422 Main Street",
      "city": "Udaipur",
      "state": "Kerala",
      "country": "India",
      "price": 5693,
      "rating": 4.7,
      "numberOfBathrooms": 3,
      "numberOfBeds": 1,
      "numberOfGuests": 6,
      "numberOfBedrooms": 1,
      "numberOfStudies": 0,
      "hostName": "Kavita",
      "hostJoinedOn": "June 2024",
      "amenities": [
        "Heater",
        "Balcony"
      ]
    },
    {
      "id": "05f161d5-c525-4e5a-9918-d9591c4e432e",
      "name": "Ocean Breeze Resort",
      "category": "National Parks",
      "image": "https://example.com/images/oceanbreezeresort.jpg",
      "imageArr": [
        "https://example.com/images/oceanbreezeresort1.jpg",
        "https://example.com/images/oceanbreezeresort2.jpg"
      ],
      "address": "640 Main Street",
      "city": "Rishikesh",
      "state": "Tamil Nadu",
      "country": "India",
      "price": 4564,
      "rating": 3.1,
      "numberOfBathrooms": 2,
      "numberOfBeds": 2,
      "numberOfGuests": 5,
      "numberOfBedrooms": 3,
      "numberOfStudies": 1,
      "hostName": "Divya",
      "hostJoinedOn": "January 2024",
      "amenities": [
        "Swimming Pool",
        "Bar"
      ]
    },
    {
      "id": "bc71d573-a6cb-4459-b7c1-002384f1316e",
      "name": "Rainforest Haven",
      "category": "Desert Retreat",
      "image": "https://example.com/images/rainforesthaven.jpg",
      "imageArr": [
        "https://example.com/images/rainforesthaven1.jpg",
        "https://example.com/images/rainforesthaven2.jpg"
      ],
      "address": "873 Hill View",
      "city": "Shimla",
      "state": "Rajasthan",
      "country": "India",
      "price": 3255,
      "rating": 3.1,
      "numberOfBathrooms": 1,
      "numberOfBeds": 3,
      "numberOfGuests": 3,
      "numberOfBedrooms": 2,
      "numberOfStudies": 0,
      "hostName": "Rohit",
      "hostJoinedOn": "June 2018",
      "amenities": [
        "Heater",
        "Balcony"
      ]
    },
    {
      "id": "322df85d-bc9c-4c0e-9e1c-64846cf52539",
      "name": "Ocean Breeze Resort",
      "category": "Lakeside",
      "image": "https://example.com/images/oceanbreezeresort.jpg",
      "imageArr": [
        "https://example.com/images/oceanbreezeresort1.jpg",
        "https://example.com/images/oceanbreezeresort2.jpg"
      ],
      "address": "681 Hill View",
      "city": "Rishikesh",
      "state": "Uttarakhand",
      "country": "India",
      "price": 5870,
      "rating": 3.5,
      "numberOfBathrooms": 1,
      "numberOfBeds": 2,
      "numberOfGuests": 4,
      "numberOfBedrooms": 2,
      "numberOfStudies": 1,
      "hostName": "Salim",
      "hostJoinedOn": "January 2021",
      "amenities": [
        "Swimming Pool",
        "Bar"
      ]
    },
    {
      "id": "d98b14da-0a82-4b2f-a81e-067dcc1325e4",
      "name": "Golden Sands Resort",
      "category": "Hill Station",
      "image": "https://example.com/images/goldensandsresort.jpg",
      "imageArr": [
        "https://example.com/images/goldensandsresort1.jpg",
        "https://example.com/images/goldensandsresort2.jpg"
      ],
      "address": "756 Hill View",
      "city": "Goa",
      "state": "Himachal Pradesh",
      "country": "India",
      "price": 5120,
      "rating": 4.8,
      "numberOfBathrooms": 1,
      "numberOfBeds": 1,
      "numberOfGuests": 4,
      "numberOfBedrooms": 2,
      "numberOfStudies": 0,
      "hostName": "Pooja",
      "hostJoinedOn": "March 2024",
      "amenities": [
        "Air Conditioning",
        "Sea View"
      ]
    },
    {
      "id": "424655c5-8ccd-4f27-a3de-44a478c1d171",
      "name": "Ocean Breeze Resort",
      "category": "City Stay",
      "image": "https://example.com/images/oceanbreezeresort.jpg",
      "imageArr": [
        "https://example.com/images/oceanbreezeresort1.jpg",
        "https://example.com/images/oceanbreezeresort2.jpg"
      ],
      "address": "709 Main Street",
      "city": "Darjeeling",
      "state": "Rajasthan",
      "country": "India",
      "price": 5475,
      "rating": 3.7,
      "numberOfBathrooms": 3,
      "numberOfBeds": 1,
      "numberOfGuests": 3,
      "numberOfBedrooms": 3,
      "numberOfStudies": 0,
      "hostName": "Nikhil",
      "hostJoinedOn": "October 2022",
      "amenities": [
        "Parking",
        "Garden View"
      ]
    },
    {
      "id": "ed195b10-9094-4f2b-897f-061564d9e504",
      "name": "Lakeview Inn",
      "category": "Desert Retreat",
      "image": "https://example.com/images/lakeviewinn.jpg",
      "imageArr": [
        "https://example.com/images/lakeviewinn1.jpg",
        "https://example.com/images/lakeviewinn2.jpg"
      ],
      "address": "558 Hill View",
      "city": "Munnar",
      "state": "Kerala",
      "country": "India",
      "price": 3967,
      "rating": 3.7,
      "numberOfBathrooms": 1,
      "numberOfBeds": 1,
      "numberOfGuests": 5,
      "numberOfBedrooms": 3,
      "numberOfStudies": 1,
      "hostName": "Arjun",
      "hostJoinedOn": "March 2018",
      "amenities": [
        "Swimming Pool",
        "Bar"
      ]
    },
    {
      "id": "bf4236b2-db6b-4fea-ade9-dfe038f408af",
      "name": "Urban Escape Hotel",
      "category": "Desert Retreat",
      "image": "https://example.com/images/urbanescapehotel.jpg",
      "imageArr": [
        "https://example.com/images/urbanescapehotel1.jpg",
        "https://example.com/images/urbanescapehotel2.jpg"
      ],
      "address": "410 Hill View",
      "city": "Rishikesh",
      "state": "West Bengal",
      "country": "India",
      "price": 5229,
      "rating": 3.6,
      "numberOfBathrooms": 3,
      "numberOfBeds": 1,
      "numberOfGuests": 2,
      "numberOfBedrooms": 3,
      "numberOfStudies": 1,
      "hostName": "Divya",
      "hostJoinedOn": "October 2019",
      "amenities": [
        "Swimming Pool",
        "Bar"
      ]
    },
    {
      "id": "14d68407-49ea-4efb-8039-b140c3e85fcc",
      "name": "Desert Mirage Camp",
      "category": "Hill Station",
      "image": "https://example.com/images/desertmiragecamp.jpg",
      "imageArr": [
        "https://example.com/images/desertmiragecamp1.jpg",
        "https://example.com/images/desertmiragecamp2.jpg"
      ],
      "address": "437 Main Street",
      "city": "Goa",
      "state": "Kerala",
      "country": "India",
      "price": 4746,
      "rating": 3.1,
      "numberOfBathrooms": 1,
      "numberOfBeds": 3,
      "numberOfGuests": 4,
      "numberOfBedrooms": 2,
      "numberOfStudies": 0,
      "hostName": "Rohit",
      "hostJoinedOn": "October 2024",
      "amenities": [
        "Campfire",
        "Live Music",
        "Traditional Food"
      ]
    },
    {
      "id": "5ec2bcda-d6a4-4dd8-ace2-28aaeb84a979",
      "name": "Urban Escape Hotel",
      "category": "City Stay",
      "image": "https://example.com/images/urbanescapehotel.jpg",
      "imageArr": [
        "https://example.com/images/urbanescapehotel1.jpg",
        "https://example.com/images/urbanescapehotel2.jpg"
      ],
      "address": "782 Mall Road",
      "city": "Jaisalmer",
      "state": "Rajasthan",
      "country": "India",
      "price": 2979,
      "rating": 3.9,
      "numberOfBathrooms": 1,
      "numberOfBeds": 1,
      "numberOfGuests": 2,
      "numberOfBedrooms": 3,
      "numberOfStudies": 0,
      "hostName": "Pooja",
      "hostJoinedOn": "June 2020",
      "amenities": [
        "Heater",
        "Balcony"
      ]
    },
    {
      "id": "26ad4ce7-6e01-491a-a84c-7133534a7f11",
      "name": "Golden Sands Resort",
      "category": "Hill Station",
      "image": "https://example.com/images/goldensandsresort.jpg",
      "imageArr": [
        "https://example.com/images/goldensandsresort1.jpg",
        "https://example.com/images/goldensandsresort2.jpg"
      ],
      "address": "295 Main Street",
      "city": "Ooty",
      "state": "Rajasthan",
      "country": "India",
      "price": 3980,
      "rating": 3.1,
      "numberOfBathrooms": 2,
      "numberOfBeds": 2,
      "numberOfGuests": 5,
      "numberOfBedrooms": 2,
      "numberOfStudies": 0,
      "hostName": "Pooja",
      "hostJoinedOn": "March 2024",
      "amenities": [
        "Air Conditioning",
        "Sea View"
      ]
    },
    {
      "id": "0958d197-f16d-4990-b240-8638e06322b5",
      "name": "Mountain View Chalet",
      "category": "Hill Station",
      "image": "https://example.com/images/mountainviewchalet.jpg",
      "imageArr": [
        "https://example.com/images/mountainviewchalet1.jpg",
        "https://example.com/images/mountainviewchalet2.jpg"
      ],
      "address": "273 Hill View",
      "city": "Udaipur",
      "state": "Goa",
      "country": "India",
      "price": 4503,
      "rating": 4.0,
      "numberOfBathrooms": 1,
      "numberOfBeds": 3,
      "numberOfGuests": 4,
      "numberOfBedrooms": 3,
      "numberOfStudies": 1,
      "hostName": "Arjun",
      "hostJoinedOn": "June 2018",
      "amenities": [
        "Campfire",
        "Live Music",
        "Traditional Food"
      ]
    },
    {
      "id": "d1f90d41-5f6f-4ac4-ab68-11812d412079",
      "name": "Rainforest Haven",
      "category": "National Parks",
      "image": "https://example.com/images/rainforesthaven.jpg",
      "imageArr": [
        "https://example.com/images/rainforesthaven1.jpg",
        "https://example.com/images/rainforesthaven2.jpg"
      ],
      "address": "978 Hill View",
      "city": "Manali",
      "state": "Goa",
      "country": "India",
      "price": 4133,
      "rating": 3.0,
      "numberOfBathrooms": 3,
      "numberOfBeds": 3,
      "numberOfGuests": 2,
      "numberOfBedrooms": 3,
      "numberOfStudies": 1,
      "hostName": "Divya",
      "hostJoinedOn": "October 2022",
      "amenities": [
        "Campfire",
        "Live Music",
        "Traditional Food"
      ]
    }
  ]
};

module.exports = hotels;

module.exports = hotels;