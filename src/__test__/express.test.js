import 'regenerator-runtime/runtime';
const st = require('supertest');

  describe("Test / endpoint", () => {
      let server;
    beforeEach(function () {
        server = require('../server/server');
      });
      afterEach(function () {
        server.close();
      });
    test("GET / -> Homepage", async done => {
      await st(server).get("/").expect(200);
      done()
    });
    test("GET / -> 404", async done => {
        await st(server).get("/api").expect(404);
        done()
      });
});