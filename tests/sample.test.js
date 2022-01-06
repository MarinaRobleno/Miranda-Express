const app = require("../app");
const mongoose = require("mongoose");
const supertest = require("supertest");

beforeEach((done) => {
  mongoose.connect(
    "mongodb://localhost:27017/JestDB",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => done()
  );
});

afterEach((done) => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done());
  });
});

test("GET /api unauthorized", async () => {
  await supertest(app).get("/api").expect(401);
});

test("GET /api authorized", async () => {
    const token = '?secret_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxZDZjOGU1NWRmZGJmYzE0ODMzMTJmOCIsImVtYWlsIjoiZXhhbXBsZUBleGFtcGxlLmNvbSJ9LCJpYXQiOjE2NDE0NjY1Nzd9.EFY9FgYyRmGR3WVXTgSsEMnlSTDgLyGcHx8199SyGuw'
    await supertest(app).get("/api" + token).expect(200);
});
