/* Exports useful constants to be used across the serializers tests. */

/**
 * The mocked value for the "x-total-count" header.
 */
const TOTAL_RECORDS_MOCK = "100";

/**
 * Mocked server response. It mocks jqXHR's method "getResponseHeader", which is called inside the normalizeResponse
 * method in the serializer. It also mocks the response data.
 */
const SERVER_RESPONSE_MOCK =  {
  jqXHR: {
    getResponseHeader: () => TOTAL_RECORDS_MOCK,
  },
  response: [
    {
      "userId": 2,
      "id": 19,
      "title": "mocked_title",
      "body": "mocked_body",
      "user": {
        "id": 2,
        "name": "Johnny cash",
        "username": "aint_no_grave",
        "email": "johnny@foobar.com",
        "address": {
          "street": "Heaven",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "XXX-XXX-XXXX x09125",
        "website": "johnnycash.com",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      }
    },
  ],
};

export {
  SERVER_RESPONSE_MOCK,
  TOTAL_RECORDS_MOCK,
};
