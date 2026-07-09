const request = require("supertest");
const express = require("express");

let server;

// Reference: PR #20 - APIs not mounted
beforeAll(() => {
  const app = express();
  // Only the health endpoint and static are mounted in PR #20
  app.get("/api/health", (req, res) => res.json({ status: "ok" }));
  server = app;
});

describe("Unreachable API endpoints (see PR #20)", () => {
  const endpoints = [
    "/api/auth/register",
    "/api/auth/login",
    "/api/notes",
    "/api/tags",
    "/api/users/me",
  ];

  endpoints.forEach((endpoint) => {
    it.skip(`should return 404 for ${endpoint} (endpoint not mounted, see PR #20)`, async () => {
      const res = await request(server).get(endpoint);
      expect(res.statusCode).toBe(404);
    });
  });
});
