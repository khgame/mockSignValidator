import {Application} from "../src";
import * as request from "supertest";
import {assert} from "chai";
import * as Path from "path";
import {Global} from "../src/global";

describe('validate', function () {
    process.env.NODE_ENV = "production";

    Global.setConf(Path.resolve(__dirname, `../src/conf.default.json`), false);
    const server = new Application().server;

    it('mock data returned', function (done) {
        request(server).post('/validate')
            .set('Accept', 'application/json')
            .send({
                "validatorIdentity": "dark_hole",
                "userIdentity": "the_mock_user",
                "loginToken": "i_have_no_idea",
                "secret": "the_encrypted_data",
                "algorithm": "monkey_encode"
            })
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    done(err);
                }
                assert.equal(res.body.statusCode, 200);
                assert.equal(res.body.result, true);
                done();
            })
    });
});
