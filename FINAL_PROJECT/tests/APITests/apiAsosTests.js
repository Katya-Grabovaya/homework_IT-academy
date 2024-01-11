import axios from "axios";
import { expect } from "chai";
import { Validator } from "jsonschema";
const validate = new Validator();
import locationSchema from "../../testDataForApi/apiAsosSchema.json" assert { type: "json" };
import schemaForPost from "../../testDataForApi/apiAsosSchema_2.json" assert { type: "json" };

describe("API Testing for ASOS", () => {
  describe('API location test for "get", testing for endpoint /location ', function () {
    const baseApiUrl =
      "https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location";
    let response;
    before(async () => {
      response = await axios.get(`${baseApiUrl}`);
    });

    it(`should return status code 200`, async () => {
      expect(response.status).to.equal(200);
    });

    it(`should be valid response body`, async () => {
      const result = validate.validate(response.data, locationSchema);
      expect(result.valid).to.equal(true);
    });
  });

  describe('API test for "post"', function () {
    let response;

    it("should return status code 201", async () => {
      response = await axios.post(
        "https://www.asos.com/bFeYYCDQshrwi/smVb2D7yI/VNfRM/b7uiwmtGYh/OTsqAg/Egl7RhNq/NH0",
        { success: true }
      );
      expect(response.status).to.equal(201);
    });

    it("should return the expected data", async () => {
      const result = validate.validate(response.data, schemaForPost);
      expect(result.valid).to.equal(true);
    });
  });
});
