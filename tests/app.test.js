import request from "supertest";
import app from "../app.js";

describe("Node.js Application", () => {
  test("GET / should return status 200", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
  });

  test("GET / should return correct message", async () => {
    const response = await request(app).get("/");

    expect(response.body).toEqual({
      msg: "Hello from the server - CI/CD Test",
    });
  });
});