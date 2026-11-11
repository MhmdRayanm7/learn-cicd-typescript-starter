import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns the API key when the header is valid", () => {
    const headers = {
      authorization: "ApiKey my-secret-key",
    };

    expect(getAPIKey(headers)).toBe("my-secret-key");
  });

  test("returns null when authorization is missing", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("returns null when authentication type is invalid", () => {
    const headers = {
      authorization: "Bearer my-secret-key",
    };

    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when the API key is missing", () => {
    const headers = {
      authorization: "ApiKey",
    };

    expect(getAPIKey(headers)).toBeNull();
  });
});
