// https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
export abstract class HttpStatus {
    static CONTINUE = 100;
    static SWITCHING_PROTOCOLS = 101;
    static PROCESSING = 102;
    static EARLY_HINTS = 103;
    static OK = 200;
    static CREATED = 201;
    static ACCEPTED = 202;
    static NON_AUTHORITATIVE_INFORMATION = 203;
    static NO_CONTENT = 204;
    static RESET_CONTENT = 205;
    static PARTIAL_CONTENT = 206;
    static MULTI_STATUS = 207;
    static ALREADY_REPORTED = 208;
    static IM_USED = 226;
    static MULTIPLE_CHOICES = 300;
    static MOVED_PERMANENTLY = 301;
    static FOUND = 302;
    static SEE_OTHER = 303;
    static NOT_MODIFIED = 304;
    static USE_PROXY = 305;
    static TEMPORARY_REDIRECT = 307;
    static PERMANENT_REDIRECT = 308;
    static BAD_REQUEST = 400;
    static UNAUTHORIZED = 401;
    static PAYMENT_REQUIRED = 402;
    static FORBIDDEN = 403;
    static NOT_FOUND = 404;
    static METHOD_NOT_ALLOWED = 405;
    static NOT_ACCEPTABLE = 406;
    static PROXY_AUTHENTICATION_REQUIRED = 407;
    static REQUEST_TIMEOUT = 408;
    static CONFLICT = 409;
    static GONE = 410;
    static LENGTH_REQUIRED = 411;
    static PRECONDITION_FAILED = 412;
    static PAYLOAD_TOO_LARGE = 413;
    static URI_TOO_LONG = 414;
    static UNSUPPORTED_MEDIA_TYPE = 415;
    static RANGE_NOT_SATISFIABLE = 416;
    static EXPECTATION_FAILED = 417;
    static MISDIRECTED_REQUEST = 421;
    static UNPROCESSABLE_ENTITY = 422;
    static LOCKED = 423;
    static FAILED_DEPENDENCY = 424;
    static TOO_EARLY = 425;
    static UPGRADE_REQUIRED = 426;
    static PRECONDITION_REQUIRED = 428;
    static TOO_MANY_REQUESTS = 429;
    static REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
    static UNAVAILABLE_FOR_LEGAL_REASONS = 451;
    static INTERNAL_SERVER_ERROR = 500;
    static NOT_IMPLEMENTED = 501;
    static BAD_GATEWAY = 502;
    static SERVICE_UNAVAILABLE = 503;
    static GATEWAY_TIMEOUT = 504;
    static HTTP_VERSION_NOT_SUPPORTED = 505;
    static VARIANT_ALSO_NEGOTIATES = 506;
    static INSUFFICIENT_STORAGE = 507;
    static LOOP_DETECTED = 508;
    static NOT_EXTENDED = 510;
    static NETWORK_AUTHENTICATION_REQUIRED = 511;

    private static httpStatusText: Record<string, string> = {
        [HttpStatus.CONTINUE]: "Continue",
        [HttpStatus.SWITCHING_PROTOCOLS]: "Switching Protocols",
        [HttpStatus.PROCESSING]: "Processing",
        [HttpStatus.EARLY_HINTS]: "Early Hints",
        [HttpStatus.OK]: "OK",
        [HttpStatus.CREATED]: "Created",
        [HttpStatus.ACCEPTED]: "Accepted",
        [HttpStatus.NON_AUTHORITATIVE_INFORMATION]: "Non-Authoritative Information",
        [HttpStatus.NO_CONTENT]: "No Content",
        [HttpStatus.RESET_CONTENT]: "Reset Content",
        [HttpStatus.PARTIAL_CONTENT]: "Partial Content",
        [HttpStatus.MULTI_STATUS]: "Multi-Status",
        [HttpStatus.ALREADY_REPORTED]: "Already Reported",
        [HttpStatus.IM_USED]: "IM Used",
        [HttpStatus.MULTIPLE_CHOICES]: "Multiple Choices",
        [HttpStatus.MOVED_PERMANENTLY]: "Moved Permanently",
        [HttpStatus.FOUND]: "Found",
        [HttpStatus.SEE_OTHER]: "See Other",
        [HttpStatus.NOT_MODIFIED]: "Not Modified",
        [HttpStatus.USE_PROXY]: "Use Proxy",
        [HttpStatus.TEMPORARY_REDIRECT]: "Temporary Redirect",
        [HttpStatus.PERMANENT_REDIRECT]: "Permanent Redirect",
        [HttpStatus.BAD_REQUEST]: "Bad Request",
        [HttpStatus.UNAUTHORIZED]: "Unauthorized",
        [HttpStatus.PAYMENT_REQUIRED]: "Payment Required",
        [HttpStatus.FORBIDDEN]: "Forbidden",
        [HttpStatus.NOT_FOUND]: "Not Found",
        [HttpStatus.METHOD_NOT_ALLOWED]: "Method Not Allowed",
        [HttpStatus.NOT_ACCEPTABLE]: "Not Acceptable",
        [HttpStatus.PROXY_AUTHENTICATION_REQUIRED]: "Proxy Authentication Required",
        [HttpStatus.REQUEST_TIMEOUT]: "Request Timeout",
        [HttpStatus.CONFLICT]: "Conflict",
        [HttpStatus.GONE]: "Gone",
        [HttpStatus.LENGTH_REQUIRED]: "Length Required",
        [HttpStatus.PRECONDITION_FAILED]: "Precondition Failed",
        [HttpStatus.PAYLOAD_TOO_LARGE]: "Payload Too Large",
        [HttpStatus.URI_TOO_LONG]: "URI Too Long",
        [HttpStatus.UNSUPPORTED_MEDIA_TYPE]: "Unsupported Media Type",
        [HttpStatus.RANGE_NOT_SATISFIABLE]: "Range Not Satisfiable",
        [HttpStatus.EXPECTATION_FAILED]: "Expectation Failed",
        [HttpStatus.MISDIRECTED_REQUEST]: "Misdirected Request",
        [HttpStatus.UNPROCESSABLE_ENTITY]: "Unprocessable Entity",
        [HttpStatus.LOCKED]: "Locked",
        [HttpStatus.FAILED_DEPENDENCY]: "Failed Dependency",
        [HttpStatus.TOO_EARLY]: "Too Early",
        [HttpStatus.UPGRADE_REQUIRED]: "Upgrade Required",
        [HttpStatus.PRECONDITION_REQUIRED]: "Precondition Required",
        [HttpStatus.TOO_MANY_REQUESTS]: "Too Many Requests",
        [HttpStatus.REQUEST_HEADER_FIELDS_TOO_LARGE]: "Request Header Fields Too Large",
        [HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS]: "Unavailable For Legal Reasons",
        [HttpStatus.INTERNAL_SERVER_ERROR]: "Internal Server Error",
        [HttpStatus.NOT_IMPLEMENTED]: "Not Implemented",
        [HttpStatus.BAD_GATEWAY]: "Bad Gateway",
        [HttpStatus.SERVICE_UNAVAILABLE]: "Service Unavailable",
        [HttpStatus.GATEWAY_TIMEOUT]: "Gateway Timeout",
        [HttpStatus.HTTP_VERSION_NOT_SUPPORTED]: "HTTP Version Not Supported",
        [HttpStatus.VARIANT_ALSO_NEGOTIATES]: "Variant Also Negotiates",
        [HttpStatus.INSUFFICIENT_STORAGE]: "Insufficient Storage",
        [HttpStatus.LOOP_DETECTED]: "Loop Detected",
        [HttpStatus.NOT_EXTENDED]: "Not Extended",
        [HttpStatus.NETWORK_AUTHENTICATION_REQUIRED]: "Network Authentication Required",
    }

    static textByCode(httpStatusCode: number | string): string {
        if (!httpStatusCode || !httpStatusCode.toString) {
            // Not a number or a string
            throw new Error("Invalid httpStatusCode");
        }

        for (const key of Object.keys(HttpStatus.httpStatusText)) {
            if (key === httpStatusCode.toString()) {
                return HttpStatus.httpStatusText[key];
            }
        }

        throw new Error("Invalid httpStatusCode");
    }
}
