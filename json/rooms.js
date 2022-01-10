const rooms = [
  {
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
    roomNumber: 01,
    roomType: "Double Bed",
    amenities: "Pork Casing",
    price: 899338,
    offer_price: 29190,
    status: 'booked'
  },
  {
    photo: [
      "https://st.hzcdn.com/simgs/pictures/bedrooms/cruelty-free-luxury-bedroom-dimare-design-img~7011347f07f3f5aa_9-8849-1-6e7db76.jpg",
      "https://images.squarespace-cdn.com/content/v1/53b5ae62e4b04291a7408706/1473854326018-6O01FR1QH8SSTOIG40AU/4+budget-friendly+master+bedroom+decorating+ideas?format=1000w",
    ],
    roomNumber: 02,
    roomType: "Double Bed",
    amenities: "Wine - Penfolds Koonuga Hill",
    price: 200615,
    offer_price: 35367,
    status: 'available'
  },
  {
    photo:
      ["https://media-cdn.tripadvisor.com/media/photo-s/13/d8/ea/1b/a-room-at-the-beach.jpg"],
    roomNumber: 03,
    roomType: "Double Bed",
    amenities: "Oil - Avocado",
    price: 291857,
    offer_price: 36288,
    status: 'available'
  },
  {
    photo:
      ["https://media-cdn.tripadvisor.com/media/photo-s/13/d8/ea/1b/a-room-at-the-beach.jpg"],
    roomNumber: 04,
    roomType: "Double Bed",
    amenities: "Lobster - Live",
    price: 596753,
    offer_price: 27889,
    status: 'available'
  },
  {
    photo:
      ["https://media-cdn.tripadvisor.com/media/photo-s/13/d8/ea/1b/a-room-at-the-beach.jpg"],
    roomNumber: 05,
    roomType: "Double Bed",
    amenities: "Roe - White Fish",
    price: 909786,
    offer_price: 23398,
    status: 'booked'
  },
  {
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
    roomNumber: 06,
    roomType: "Double Bed",
    amenities: "Vinegar - Red Wine",
    price: 741437,
    offer_price: 25946,
    status: 'available'
  },
  {
    photo:
      ["https://media-cdn.tripadvisor.com/media/photo-s/13/d8/ea/1b/a-room-at-the-beach.jpg"],
    roomNumber: 07,
    roomType: "Double Bed",
    amenities: "Bagel - Plain",
    price: 133375,
    offer_price: 32999,
    status: 'booked'
  },
  {
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
    roomNumber: 08,
    roomType: "Double Bed",
    amenities: "Compound - Rum",
    price: 783278,
    offer_price: 47943,
    status: 'booked'
  },
  {
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
    roomNumber: 09,
    roomType: "Double Bed",
    amenities: "Coffee Cup 12oz 5342cd",
    price: 101078,
    offer_price: 16092,
    status: 'available'
  },
  {
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
    roomNumber: 10,
    roomType: "Double Bed",
    amenities: "Dip - Tapenade",
    price: 58088,
    offer_price: 30479,
    status: 'available'
  },
  {
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
    roomNumber: 11,
    roomType: "Double Bed",
    amenities: "Pork Casing",
    price: 899338,
    offer_price: 29190,
    status: 'booked'
  },
  {
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
    roomNumber: 12,
    roomType: "Double Bed",
    amenities: "Wine - Penfolds Koonuga Hill",
    price: 200615,
    offer_price: 35367,
    status: 'available'
  },
  {
    photo:
      ["https://media-cdn.tripadvisor.com/media/photo-s/13/d8/ea/1b/a-room-at-the-beach.jpg"],
    roomNumber: 13,
    roomType: "Double Bed",
    amenities: "Oil - Avocado",
    price: 291857,
    offer_price: 36288,
    status: 'available'
  },
  {
    photo:
      ["https://media-cdn.tripadvisor.com/media/photo-s/13/d8/ea/1b/a-room-at-the-beach.jpg"],
    roomNumber: 14,
    roomType: "Double Bed",
    amenities: "Lobster - Live",
    price: 596753,
    offer_price: 27889,
    status: 'available'
  },
  {
    photo:
      ["https://media-cdn.tripadvisor.com/media/photo-s/13/d8/ea/1b/a-room-at-the-beach.jpg"],
    roomNumber: 15,
    roomType: "Double Bed",
    amenities: "Roe - White Fish",
    price: 909786,
    offer_price: 23398,
    status: 'booked'
  },
  {
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
    roomNumber: 16,
    roomType: "Double Bed",
    amenities: "Vinegar - Red Wine",
    price: 741437,
    offer_price: 25946,
    status: 'available'
  },
  {
    photo:
      ["https://media-cdn.tripadvisor.com/media/photo-s/13/d8/ea/1b/a-room-at-the-beach.jpg"],
    roomNumber: 17,
    roomType: "Double Bed",
    amenities: "Bagel - Plain",
    price: 133375,
    offer_price: 32999,
    status: 'booked'
  },
  {
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
    roomNumber: 18,
    roomType: "Double Bed",
    amenities: "Compound - Rum",
    price: 783278,
    offer_price: 47943,
    status: 'booked'
  },
  {
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
    roomNumber: 19,
    roomType: "Double Bed",
    amenities: "Coffee Cup 12oz 5342cd",
    price: 101078,
    offer_price: 16092,
    status: 'available'
  },
  {
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
    roomNumber: 20,
    roomType: "Double Bed",
    amenities: "Dip - Tapenade",
    price: 58088,
    offer_price: 30479,
    status: 'available'
  },
  {
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
    roomNumber: 21,
    roomType: "Double Bed",
    amenities: "Pork Casing",
    price: 899338,
    offer_price: 29190,
    status: 'booked'
  },
  {
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
    roomNumber: 22,
    roomType: "Double Bed",
    amenities: "Wine - Penfolds Koonuga Hill",
    price: 200615,
    offer_price: 35367,
    status: 'available'
  },
  {
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
    roomNumber: 23,
    roomType: "Double Bed",
    amenities: "Oil - Avocado",
    price: 291857,
    offer_price: 36288,
    status: 'available'
  },
  {
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],    
    roomNumber: 24,
    roomType: "Double Bed",
    amenities: "Lobster - Live",
    price: 596753,
    offer_price: 27889,
    status: 'available'
  },
  {
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
    roomNumber: 25,
    roomType: "Double Bed",
    amenities: "Roe - White Fish",
    price: 909786,
    offer_price: 23398,
    status: 'booked'
  },
  {
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
    roomNumber: 26,
    roomType: "Double Bed",
    amenities: "Vinegar - Red Wine",
    price: 741437,
    offer_price: 25946,
    status: 'available'
  },
  {
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
    roomNumber: 27,
    roomType: "Double Bed",
    amenities: "Bagel - Plain",
    price: 133375,
    offer_price: 32999,
    status: 'booked'
  },
  {
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
    roomNumber: 28,
    roomType: "Double Bed",
    amenities: "Compound - Rum",
    price: 783278,
    offer_price: 47943,
    status: 'booked'
  },
  {
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
    roomNumber: 29,
    roomType: "Double Bed",
    amenities: "Coffee Cup 12oz 5342cd",
    price: 101078,
    offer_price: 16092,
    status: 'available'
  },
  {
    photo: [
      "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
    ],
    roomNumber: 30,
    roomType: "Double Bed",
    amenities: "Dip - Tapenade",
    price: 58088,
    offer_price: 30479,
    status: 'available'
  },
];

module.exports = rooms;