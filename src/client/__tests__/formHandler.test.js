// Import the js file to test
import { validation } from "../js/formHandler"

describe("URL Validation function", () => {
    test("it should check if the input provided is valid url or not", () => {
      // actual test
      
      expect(validation('https://www.url1.dev')).toBe(true);
    });
  });

  describe("URL Validation function", () => {
    test("it should check if the input provided is valid url or not", () => {
      // actual test
      
      expect(validation('.url1.dev')).toBe(false);
    });
  });