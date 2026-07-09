const request = require("supertest");
const express = require("express");
const path = require("path");

let server;

// Reference: PR #20 - Static file serving
beforeAll(() => {
  const app = express();
  // Serve static files from ./public as server.js does
  app.use(express.static(path.join(__dirname, "../public")));
  server = app;
});

describe("Static file serving", () => {
  it("should return 200 and HTML for GET /", async () => {
    const res = await request(server).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toMatch(/html/);
  });

  it("should return 200 and HTML for GET /index.html", async () => {
    const res = await request(server).get("/index.html");
    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toMatch(/html/);
  });

  it("should return 404 for GET /nonexistentfile.txt", async () => {
    const res = await request(server).get("/nonexistentfile.txt");
    expect(res.statusCode).toBe(404);
  });
});
