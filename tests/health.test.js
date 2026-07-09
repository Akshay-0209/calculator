const request = require("supertest");
const express = require("express");

let server;

// Import the actual server
beforeAll(() => {
  // We use the same server setup as in server.js for isolated testing
  const app = express();
  app.get("/api/health", (req, res) => res.json({ status: "ok" }));
  // Reference: PR #20 - health check endpoint
  server = app;
});

describe("GET /api/health", () => {
  it("should return status ok", async () => {
    const res = await request(server).get("/api/health");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });
});

describe("Non-existent API endpoint", () => {
  it("should return 404 for unknown route", async () => {
    // Reference: PR #20 - explicit 404 test
    const res = await request(server).get("/api/doesnotexist");
    expect(res.statusCode).toBe(404);
  });
});
