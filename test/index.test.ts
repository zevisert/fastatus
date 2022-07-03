import { status } from "../src";
import { description } from "../src";
import _default from "../src";

test("can lookup status", () => {
  expect(status.HTTP_200_OK).toBe(200);
  expect(status.HTTP_418_IM_A_TEAPOT).toBe(418);
  expect(status["HTTP_302_FOUND"]).toBe(302);
  expect(status[303]).toBe("HTTP_303_SEE_OTHER");
});

test("can lookup descriptions", () => {
  expect(description.HTTP_101_SWITCHING_PROTOCOLS).toBe("Switching Protocols");
  expect(description.HTTP_206_PARTIAL_CONTENT).toBe("Partial Content");
  expect(description["HTTP_304_NOT_MODIFIED"]).toBe("Not Modified");
});

function keys(e: Record<string, unknown>, prefix = ""): string[] {
  return Object.keys(e).filter((key) => key.startsWith(prefix));
}

test("is fully described", () => {
  // 63 HTTP codes
  expect(keys(status, "HTTP").length).toBe(63);

  // 15 websocket codes
  expect(keys(status, "WS").length).toBe(15);

  // Times 2 because of TS enum implementation of reverse mapping for non-string enums
  expect(keys(status).length).toBe((63 + 15) * 2);

  // Same number of descriptions as codes
  expect(keys(status).length / 2).toBe(keys(description).length);
});
