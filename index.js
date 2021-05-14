"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var node_fetch_1 = __importDefault(require("node-fetch"));
var app = express_1.default();
var getNum = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var i, j;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, node_fetch_1.default(url)];
            case 1:
                i = _a.sent();
                return [4 /*yield*/, i.json()];
            case 2:
                j = _a.sent();
                return [2 /*return*/, j];
        }
    });
}); };
function addZero(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}
app.get("/", function (req, res) {
    var url = "https://api.github.com/users/" + req.query.username + "/orgs";
    getNum(url).then(function (val) {
        var data = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"isolation:isolate\" viewBox=\"0 0 100 100\" width=\"100pt\" height=\"100pt\">\n\n        <g clip-path=\"url(#_clipPath_VLb6lfFx0r7CcpSkBZx9S2SpQflF1hEA)\">\n            <circle vector-effect=\"non-scaling-stroke\" cx=\"50\" cy=\"50\" r=\"50\" fill=\"rgb(17,17,17)\" />\n            <g clip-path=\"url(#_clipPath_iDf8JuyXYtaPzeIziYulOYLlWAmEDEqM)\">\n                <text transform=\"matrix(1,0,0,1,30,63)\" style=\"font-family:'Notable';font-weight:400;font-size:36px;font-style:normal;font-variant-ligatures:none;fill:#FFFFFF;stroke:none;\">\n                " + addZero(val.length) + "\n                </text>\n            </g>\n            <defs>\n                <clipPath id=\"_clipPath_iDf8JuyXYtaPzeIziYulOYLlWAmEDEqM\">\n                    <rect x=\"0\" y=\"0\" width=\"47\" height=\"46.8\" transform=\"matrix(1,0,0,1,26.5,26.6)\" />\n                </clipPath>\n            </defs>\n        </g>\n    </svg>";
        res.setHeader("Content-Type", "image/svg+xml");
        res.send(data);
    });
});
app.listen(3000);
