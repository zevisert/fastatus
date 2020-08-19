import {HttpStatus, httpStatusTextByCode} from "../src/HttpStatus";

test("textByCode()", () => {
    expect(HttpStatus.OK).toBe(200);
    expect(httpStatusTextByCode(200)).toBe("OK");
    expect(httpStatusTextByCode("200")).toBe("OK");
    expect(() => httpStatusTextByCode("xxxx")).toThrow();
    expect(() => httpStatusTextByCode(9999)).toThrow();
    expect(() => httpStatusTextByCode(undefined as any)).toThrow();
    expect(() => httpStatusTextByCode(null as any)).toThrow();
    expect(() => httpStatusTextByCode({} as any)).toThrow();
});
