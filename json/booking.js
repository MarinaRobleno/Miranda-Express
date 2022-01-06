const bookings = [
  {
    id: 1,
    guest: "Crissy Croisdall",
    orderDate: "09-22-2021",
    checkIn: "07-28-2021",
    checkOut: "11-03-2021",
    special: "Special request number 1",
    roomType: "Plaza",
    room_number: "15",
    status: "in",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 2,
    guest: "Guinna Edlington",
    orderDate: "03-25-2021",
    checkIn: "04-28-2021",
    checkOut: "09-10-2021",
    special: "Special request number 2",
    roomType: "Terrace",
    room_number: "05",
    status: "out",
    photo: [
      "https://st.hzcdn.com/simgs/pictures/bedrooms/cruelty-free-luxury-bedroom-dimare-design-img~7011347f07f3f5aa_9-8849-1-6e7db76.jpg",
      "https://images.squarespace-cdn.com/content/v1/53b5ae62e4b04291a7408706/1473854326018-6O01FR1QH8SSTOIG40AU/4+budget-friendly+master+bedroom+decorating+ideas?format=1000w",
    ],
  },
  {
    id: 3,
    guest: "Evaleen Kernes",
    orderDate: "06-04-2021",
    checkIn: "09-29-2021",
    checkOut: "01-11-2021",
    special: "Special request number 3",
    roomType: "Road",
    room_number: "01",
    status: "out",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 4,
    guest: "Georgianne Lerego",
    orderDate: "05-16-2021",
    checkIn: "11-27-2021",
    checkOut: "12-18-2021",
    special: "Special request number 4",
    roomType: "Place",
    room_number: "10",
    status: "in",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 5,
    guest: "Judon Lyttle",
    orderDate: "04-22-2021",
    checkIn: "05-26-2021",
    checkOut: "10-08-2021",
    special: "Special request number 5",
    roomType: "Hill",
    room_number: "45",
    status: "in",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 6,
    guest: "Eamon Yorke",
    orderDate: "12-04-2021",
    checkIn: "10-06-2021",
    checkOut: "12-11-2021",
    special: "Special request number 6",
    roomType: "Avenue",
    room_number: "36",
    status: "progress",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 7,
    guest: "Farlie Kalb",
    orderDate: "01-13-2021",
    checkIn: "01-14-2021",
    checkOut: "09-08-2021",
    special: "Special request number 7",
    roomType: "Terrace",
    room_number: "80",
    status: "out",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 8,
    guest: "Kimberly Blazeby",
    orderDate: "08-11-2021",
    checkIn: "01-17-2021",
    checkOut: "10-01-2021",
    special: "Special request number 8",
    roomType: "Lane",
    room_number: "23",
    status: "in",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 9,
    guest: "Bail Iacovielli",
    orderDate: "07-05-2021",
    checkIn: "03-23-2021",
    checkOut: "11-02-2021",
    special: "Special request number 9",
    roomType: "Lane",
    room_number: "07",
    status: "progress",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 10,
    guest: "Farris Beardsall",
    orderDate: "07-05-2021",
    checkIn: "03-26-2021",
    checkOut: "08-20-2021",
    special: null,
    roomType: "Alley",
    room_number: "88",
    status: "out",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 11,
    guest: "Crissy Croisdall",
    orderDate: "09-22-2021",
    checkIn: "07-28-2021",
    checkOut: "11-03-2021",
    special: "Special request number 1",
    roomType: "Plaza",
    room_number: "15",
    status: "in",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 12,
    guest: "Guinna Edlington",
    orderDate: "03-25-2021",
    checkIn: "04-28-2021",
    checkOut: "09-10-2021",
    special: "Special request number 2",
    roomType: "Terrace",
    room_number: "05",
    status: "out",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 13,
    guest: "Evaleen Kernes",
    orderDate: "06-04-2021",
    checkIn: "09-29-2021",
    checkOut: "01-11-2021",
    special: "Special request number 3",
    roomType: "Road",
    room_number: "01",
    status: "out",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 14,
    guest: "Georgianne Lerego",
    orderDate: "05-16-2021",
    checkIn: "11-27-2021",
    checkOut: "12-18-2021",
    special: "Special request number 4",
    roomType: "Place",
    room_number: "10",
    status: "in",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 15,
    guest: "Judon Lyttle",
    orderDate: "04-22-2021",
    checkIn: "05-26-2021",
    checkOut: "10-08-2021",
    special: "Special request number 5",
    roomType: "Hill",
    room_number: "45",
    status: "in",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 16,
    guest: "Eamon Yorke",
    orderDate: "12-04-2021",
    checkIn: "10-06-2021",
    checkOut: "12-11-2021",
    special: "Special request number 6",
    roomType: "Avenue",
    room_number: "36",
    status: "progress",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 17,
    guest: "Farlie Kalb",
    orderDate: "01-13-2021",
    checkIn: "01-14-2021",
    checkOut: "09-08-2021",
    special: "Special request number 7",
    roomType: "Terrace",
    room_number: "80",
    status: "out",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 18,
    guest: "Kimberly Blazeby",
    orderDate: "08-11-2021",
    checkIn: "01-17-2021",
    checkOut: "10-01-2021",
    special: "Special request number 8",
    roomType: "Lane",
    room_number: "23",
    status: "in",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 19,
    guest: "Bail Iacovielli",
    orderDate: "07-05-2021",
    checkIn: "03-23-2021",
    checkOut: "11-02-2021",
    special: "Special request number 9",
    roomType: "Lane",
    room_number: "07",
    status: "progress",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 20,
    guest: "Farris Beardsall",
    orderDate: "07-05-2021",
    checkIn: "03-26-2021",
    checkOut: "08-20-2021",
    special: null,
    roomType: "Alley",
    room_number: "88",
    status: "out",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 21,
    guest: "Crissy Croisdall",
    orderDate: "09-22-2021",
    checkIn: "07-28-2021",
    checkOut: "11-03-2021",
    special: "Special request number 1",
    roomType: "Plaza",
    room_number: "15",
    status: "in",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 22,
    guest: "Guinna Edlington",
    orderDate: "03-25-2021",
    checkIn: "04-28-2021",
    checkOut: "09-10-2021",
    special: "Special request number 2",
    roomType: "Terrace",
    room_number: "05",
    status: "out",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 23,
    guest: "Evaleen Kernes",
    orderDate: "06-04-2021",
    checkIn: "09-29-2021",
    checkOut: "01-11-2021",
    special: "Special request number 3",
    roomType: "Road",
    room_number: "01",
    status: "out",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 24,
    guest: "Georgianne Lerego",
    orderDate: "05-16-2021",
    checkIn: "11-27-2021",
    checkOut: "12-18-2021",
    special: "Special request number 4",
    roomType: "Place",
    room_number: "10",
    status: "in",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 25,
    guest: "Judon Lyttle",
    orderDate: "04-22-2021",
    checkIn: "05-26-2021",
    checkOut: "10-08-2021",
    special: "Special request number 5",
    roomType: "Hill",
    room_number: "45",
    status: "in",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 26,
    guest: "Eamon Yorke",
    orderDate: "12-04-2021",
    checkIn: "10-06-2021",
    checkOut: "12-11-2021",
    special: "Special request number 6",
    roomType: "Avenue",
    room_number: "36",
    status: "progress",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 27,
    guest: "Farlie Kalb",
    orderDate: "01-13-2021",
    checkIn: "01-14-2021",
    checkOut: "09-08-2021",
    special: "Special request number 7",
    roomType: "Terrace",
    room_number: "80",
    status: "out",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 28,
    guest: "Kimberly Blazeby",
    orderDate: "08-11-2021",
    checkIn: "01-17-2021",
    checkOut: "10-01-2021",
    special: "Special request number 8",
    roomType: "Lane",
    room_number: "23",
    status: "in",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 29,
    guest: "Bail Iacovielli",
    orderDate: "07-05-2021",
    checkIn: "2-18-2021",
    checkOut: "11-02-2021",
    special: "Special request number 9",
    roomType: "Lane",
    room_number: "07",
    status: "progress",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
  {
    id: 30,
    guest: "Farris Beardsall",
    orderDate: "07-05-2021",
    checkIn: "1-14-2021",
    checkOut: "08-20-2021",
    special: null,
    roomType: "Alley",
    room_number: "88",
    status: "out",
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
  },
];

module.exports = bookings;
