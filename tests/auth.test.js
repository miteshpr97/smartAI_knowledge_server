import request from "supertest";
import app from "../index.js"
import mongoose from "mongoose";

describe("Auth API", () => {
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should register a new user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Test User",
        email: "test@example.com",
        password: "password123",
      });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("token");
  });

  it("should login a user", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "test@example.com",
        password: "password123",
      });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  });
});
