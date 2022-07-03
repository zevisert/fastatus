/*
  HTTP codes
  See HTTP Status Code Registry:
  https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  
  And RFC 2324 - https://tools.ietf.org/html/rfc2324
*/

export enum status {
  HTTP_100_CONTINUE = 100,
  HTTP_101_SWITCHING_PROTOCOLS = 101,
  HTTP_102_PROCESSING = 102,
  HTTP_103_EARLY_HINTS = 103,
  HTTP_200_OK = 200,
  HTTP_201_CREATED = 201,
  HTTP_202_ACCEPTED = 202,
  HTTP_203_NON_AUTHORITATIVE_INFORMATION = 203,
  HTTP_204_NO_CONTENT = 204,
  HTTP_205_RESET_CONTENT = 205,
  HTTP_206_PARTIAL_CONTENT = 206,
  HTTP_207_MULTI_STATUS = 207,
  HTTP_208_ALREADY_REPORTED = 208,
  HTTP_226_IM_USED = 226,
  HTTP_300_MULTIPLE_CHOICES = 300,
  HTTP_301_MOVED_PERMANENTLY = 301,
  HTTP_302_FOUND = 302,
  HTTP_303_SEE_OTHER = 303,
  HTTP_304_NOT_MODIFIED = 304,
  HTTP_305_USE_PROXY = 305,
  HTTP_306_RESERVED = 306,
  HTTP_307_TEMPORARY_REDIRECT = 307,
  HTTP_308_PERMANENT_REDIRECT = 308,
  HTTP_400_BAD_REQUEST = 400,
  HTTP_401_UNAUTHORIZED = 401,
  HTTP_402_PAYMENT_REQUIRED = 402,
  HTTP_403_FORBIDDEN = 403,
  HTTP_404_NOT_FOUND = 404,
  HTTP_405_METHOD_NOT_ALLOWED = 405,
  HTTP_406_NOT_ACCEPTABLE = 406,
  HTTP_407_PROXY_AUTHENTICATION_REQUIRED = 407,
  HTTP_408_REQUEST_TIMEOUT = 408,
  HTTP_409_CONFLICT = 409,
  HTTP_410_GONE = 410,
  HTTP_411_LENGTH_REQUIRED = 411,
  HTTP_412_PRECONDITION_FAILED = 412,
  HTTP_413_REQUEST_ENTITY_TOO_LARGE = 413,
  HTTP_414_REQUEST_URI_TOO_LONG = 414,
  HTTP_415_UNSUPPORTED_MEDIA_TYPE = 415,
  HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE = 416,
  HTTP_417_EXPECTATION_FAILED = 417,
  HTTP_418_IM_A_TEAPOT = 418,
  HTTP_421_MISDIRECTED_REQUEST = 421,
  HTTP_422_UNPROCESSABLE_ENTITY = 422,
  HTTP_423_LOCKED = 423,
  HTTP_424_FAILED_DEPENDENCY = 424,
  HTTP_425_TOO_EARLY = 425,
  HTTP_426_UPGRADE_REQUIRED = 426,
  HTTP_428_PRECONDITION_REQUIRED = 428,
  HTTP_429_TOO_MANY_REQUESTS = 429,
  HTTP_431_REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
  HTTP_451_UNAVAILABLE_FOR_LEGAL_REASONS = 451,
  HTTP_500_INTERNAL_SERVER_ERROR = 500,
  HTTP_501_NOT_IMPLEMENTED = 501,
  HTTP_502_BAD_GATEWAY = 502,
  HTTP_503_SERVICE_UNAVAILABLE = 503,
  HTTP_504_GATEWAY_TIMEOUT = 504,
  HTTP_505_HTTP_VERSION_NOT_SUPPORTED = 505,
  HTTP_506_VARIANT_ALSO_NEGOTIATES = 506,
  HTTP_507_INSUFFICIENT_STORAGE = 507,
  HTTP_508_LOOP_DETECTED = 508,
  HTTP_510_NOT_EXTENDED = 510,
  HTTP_511_NETWORK_AUTHENTICATION_REQUIRED = 511,
  /*
      WebSocket codes
      https://www.iana.org/assignments/websocket/websocket.xml#close-code-number
      https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent
    */
  WS_1000_NORMAL_CLOSURE = 1000,
  WS_1001_GOING_AWAY = 1001,
  WS_1002_PROTOCOL_ERROR = 1002,
  WS_1003_UNSUPPORTED_DATA = 1003,
  WS_1005_NO_STATUS_RCVD = 1005,
  WS_1006_ABNORMAL_CLOSURE = 1006,
  WS_1007_INVALID_FRAME_PAYLOAD_DATA = 1007,
  WS_1008_POLICY_VIOLATION = 1008,
  WS_1009_MESSAGE_TOO_BIG = 1009,
  WS_1010_MANDATORY_EXT = 1010,
  WS_1011_INTERNAL_ERROR = 1011,
  WS_1012_SERVICE_RESTART = 1012,
  WS_1013_TRY_AGAIN_LATER = 1013,
  WS_1014_BAD_GATEWAY = 1014,
  WS_1015_TLS_HANDSHAKE = 1015,
}

export default status;

export enum description {
  /*
    https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml#http-status-codes-1
  */
  HTTP_100_CONTINUE = "Continue",
  HTTP_101_SWITCHING_PROTOCOLS = "Switching Protocols",
  HTTP_102_PROCESSING = "Processing",
  HTTP_103_EARLY_HINTS = "Early Hints",
  HTTP_200_OK = "OK",
  HTTP_201_CREATED = "Created",
  HTTP_202_ACCEPTED = "Accepted",
  HTTP_203_NON_AUTHORITATIVE_INFORMATION = "Non-Authoritative Information",
  HTTP_204_NO_CONTENT = "No Content",
  HTTP_205_RESET_CONTENT = "Reset Content",
  HTTP_206_PARTIAL_CONTENT = "Partial Content",
  HTTP_207_MULTI_STATUS = "Multi-Status",
  HTTP_208_ALREADY_REPORTED = "Already Reported",
  HTTP_226_IM_USED = "IM Used",
  HTTP_300_MULTIPLE_CHOICES = "Multiple Choices",
  HTTP_301_MOVED_PERMANENTLY = "Moved Permanently",
  HTTP_302_FOUND = "Found",
  HTTP_303_SEE_OTHER = "See Other",
  HTTP_304_NOT_MODIFIED = "Not Modified",
  HTTP_305_USE_PROXY = "Use Proxy",
  HTTP_306_RESERVED = "(Unused)",
  HTTP_307_TEMPORARY_REDIRECT = "Temporary Redirect",
  HTTP_308_PERMANENT_REDIRECT = "Permanent Redirect",
  HTTP_400_BAD_REQUEST = "Bad Request",
  HTTP_401_UNAUTHORIZED = "Unauthorized",
  HTTP_402_PAYMENT_REQUIRED = "Payment Required",
  HTTP_403_FORBIDDEN = "Forbidden",
  HTTP_404_NOT_FOUND = "Not Found",
  HTTP_405_METHOD_NOT_ALLOWED = "Method Not Allowed",
  HTTP_406_NOT_ACCEPTABLE = "Not Acceptable",
  HTTP_407_PROXY_AUTHENTICATION_REQUIRED = "Proxy Authentication Required",
  HTTP_408_REQUEST_TIMEOUT = "Request Timeout",
  HTTP_409_CONFLICT = "Conflict",
  HTTP_410_GONE = "Gone",
  HTTP_411_LENGTH_REQUIRED = "Length Required",
  HTTP_412_PRECONDITION_FAILED = "Precondition Failed",
  HTTP_413_REQUEST_ENTITY_TOO_LARGE = "Content Too Large",
  HTTP_414_REQUEST_URI_TOO_LONG = "URI Too Long",
  HTTP_415_UNSUPPORTED_MEDIA_TYPE = "Unsupported Media Type",
  HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE = "Range Not Satisfiable",
  HTTP_417_EXPECTATION_FAILED = "Expectation Failed",
  HTTP_418_IM_A_TEAPOT = "(Unused)",
  HTTP_421_MISDIRECTED_REQUEST = "Misdirected Request",
  HTTP_422_UNPROCESSABLE_ENTITY = "Unprocessable Content",
  HTTP_423_LOCKED = "Locked",
  HTTP_424_FAILED_DEPENDENCY = "Failed Dependency",
  HTTP_425_TOO_EARLY = "Too Early",
  HTTP_426_UPGRADE_REQUIRED = "Upgrade Required",
  HTTP_428_PRECONDITION_REQUIRED = "Precondition Required",
  HTTP_429_TOO_MANY_REQUESTS = "Too Many Requests",
  HTTP_431_REQUEST_HEADER_FIELDS_TOO_LARGE = "Request Header Fields Too Large",
  HTTP_451_UNAVAILABLE_FOR_LEGAL_REASONS = "Unavailable For Legal Reasons",
  HTTP_500_INTERNAL_SERVER_ERROR = "Internal Server Error",
  HTTP_501_NOT_IMPLEMENTED = "Not Implemented",
  HTTP_502_BAD_GATEWAY = "Bad Gateway",
  HTTP_503_SERVICE_UNAVAILABLE = "Service Unavailable",
  HTTP_504_GATEWAY_TIMEOUT = "Gateway Timeout",
  HTTP_505_HTTP_VERSION_NOT_SUPPORTED = "HTTP Version Not Supported",
  HTTP_506_VARIANT_ALSO_NEGOTIATES = "Variant Also Negotiates",
  HTTP_507_INSUFFICIENT_STORAGE = "Insufficient Storage",
  HTTP_508_LOOP_DETECTED = "Loop Detected",
  HTTP_510_NOT_EXTENDED = "Not Extended (OBSOLETED)",
  HTTP_511_NETWORK_AUTHENTICATION_REQUIRED = "Network Authentication Required",
  /*
    https://www.iana.org/assignments/websocket/websocket.xml#close-code-number
  */
  WS_1000_NORMAL_CLOSURE = "Normal Closure",
  WS_1001_GOING_AWAY = "Going Away",
  WS_1002_PROTOCOL_ERROR = "Protocol error",
  WS_1003_UNSUPPORTED_DATA = "Unsupported Data",
  WS_1005_NO_STATUS_RCVD = "No Status Rcvd",
  WS_1006_ABNORMAL_CLOSURE = "Abnormal Closure",
  WS_1007_INVALID_FRAME_PAYLOAD_DATA = "Invalid frame payload data",
  WS_1008_POLICY_VIOLATION = "Policy Violation",
  WS_1009_MESSAGE_TOO_BIG = "Message Too Big",
  WS_1010_MANDATORY_EXT = "Mandatory Ext.",
  WS_1011_INTERNAL_ERROR = "Internal Error",
  WS_1012_SERVICE_RESTART = "Service Restart",
  WS_1013_TRY_AGAIN_LATER = "Try Again Later",
  WS_1014_BAD_GATEWAY = "The server was acting as a gateway or proxy and received an invalid response from the upstream server.",
  WS_1015_TLS_HANDSHAKE = "TLS handshake",
}
