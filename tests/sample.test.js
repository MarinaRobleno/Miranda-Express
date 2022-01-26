const app = require("../app");
const mongoose = require("mongoose");
const supertest = require("supertest");
const { serverDb, authToken } = require("../.env");
const request = require('supertest')(app)

beforeEach((done) => {
  mongoose.connect(
    serverDb,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => done()
  );
});

afterEach((done) => {
  const db = mongoose.connection;
  db.dropDatabase(() => {
    db.close(() => done());
  });
});

describe("TESTS", () => {
  test("GET /api unauthorized", async () => {
    await supertest(app).get("/api").expect(401);
  });
  test("GET /api authorized", async () => {
    await request.get("/api").set('Authorization', 'Bearer ' + authToken).expect(200);
  });
  test("GET /rooms", async () => {
    await request.get("/api/rooms").set('Authorization', 'Bearer ' + authToken).expect(200).expect('Content-Type', /json/);
  });
  test("GET /rooms/:id", async () => {
    await request.get("/api/rooms/61ea771bbbd418889cab7899").set('Authorization', 'Bearer ' + authToken).expect(200).expect('Content-Type', /json/);
  });
  /*test("POST /rooms", async () => {
    let data = {
      "photo": [
        "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
        "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
        "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
      ],
      "roomNumber": 9,
      "roomType": "Double Bed",
      "amenities": "Coffee Cup 12oz 5342cd",
      "price": 101078,
      "offer_price": 16092,
      "status": 'available',
      "description":"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
    }
    await request.post("/api/rooms").send(data).set('Authorization', 'Bearer ' + authToken).expect(200).expect('Content-Type', /json/);
  });
  test("UPDATE /rooms", async () => {
    let data = {
      "photo": [
        "https://tecnohotelnews.com/wp-content/uploads/2020/01/Room-Mate-Olivia-Suite-1.jpg",
        "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
        "https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-king-50668318?$XlargeViewport100pct$",
      ],
      "roomNumber": 26,
      "roomType": "Single Bed",
      "amenities": "Coffee Cup 12oz 5342cd",
      "price": 101078,
      "offer_price": 16092,
      "status": 'available',
      "description":"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
    }
    await request.patch("/api/rooms/61ec0a9e3a10151f2478a640").send(data).set('Authorization', 'Bearer ' + authToken).expect(200).expect('Content-Type', 'text/html; charset=utf-8');
  });
  test("DELETE /rooms", async () => {
    await request.delete("/api/rooms/61ec0a9e3a10151f2478a640").set('Authorization', 'Bearer ' + authToken).expect(200).expect('Content-Type', 'text/html; charset=utf-8');
  });*/
  test("Get home", async () => {
    await supertest(app).get("/").expect(200);
  });
});
