import { describe, expect, it } from "vitest";
import { MicroCMSFilterQuery } from "../src/main";

describe("equals", () => {
  it("name[equals]John", () => {
    const result = new MicroCMSFilterQuery().equals('name', 'John').$execute()

    expect(result).toBe('name[equals]John');
  });
});

describe("contains", () => {
  it("category[contains]1234567", () => {
    const result = new MicroCMSFilterQuery().contains('category', '1234567').$execute()

    expect(result).toBe('category[contains]1234567');
  });
});