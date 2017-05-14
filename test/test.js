"use strict";

const supertest = require('supertest'),
    should = require('should'),
    server = supertest.agent("http://localhost:4000");

describe("Sample unit test", () => {
    it("should return the index page", (done) => {
        server
            .get("/")
            .expect("Content-type", /text/)
            .expect(200)
            .end((err, res) => {
                //HTTP status should be 200
                res.status.should.equal(200);
                done();
            });
    });
});