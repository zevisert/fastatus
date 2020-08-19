import {HttpStatus} from "../src/HttpStatus";

test("textByCode()", () => {
    expect(HttpStatus.textByCode(200)).toBe("OK");
    expect(HttpStatus.textByCode("200")).toBe("OK");
    expect(() => HttpStatus.textByCode("xxxx")).toThrow();
    expect(() => HttpStatus.textByCode(9999)).toThrow();
    expect(() => HttpStatus.textByCode(undefined as any)).toThrow();
    expect(() => HttpStatus.textByCode(null as any)).toThrow();
    expect(() => HttpStatus.textByCode({} as any)).toThrow();
});
