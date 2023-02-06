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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const port = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.get("/", (_req, res) => {
    return res.send("Express Typescript Server for Rebook App!");
});
app.get("/books", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const search = _req.query.search;
    try {
        const booksRes = yield fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
        const booksJson = yield booksRes.json();
        const books = booksJson.items.map((book) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const isBuyLink = ((_a = book === null || book === void 0 ? void 0 : book.saleInfo) === null || _a === void 0 ? void 0 : _a.saleability) === "FOR_SALE";
            return {
                id: book === null || book === void 0 ? void 0 : book.id,
                title: (_b = book === null || book === void 0 ? void 0 : book.volumeInfo) === null || _b === void 0 ? void 0 : _b.title,
                thumbnail: ((_d = (_c = book === null || book === void 0 ? void 0 : book.volumeInfo) === null || _c === void 0 ? void 0 : _c.imageLinks) === null || _d === void 0 ? void 0 : _d.thumbnail) || "",
                authors: (_e = book === null || book === void 0 ? void 0 : book.volumeInfo) === null || _e === void 0 ? void 0 : _e.authors,
                language: (_f = book === null || book === void 0 ? void 0 : book.volumeInfo) === null || _f === void 0 ? void 0 : _f.language,
                saleInfo: Object.assign({ saleability: (_g = book === null || book === void 0 ? void 0 : book.saleInfo) === null || _g === void 0 ? void 0 : _g.saleability }, (isBuyLink && { buyLink: (_h = book === null || book === void 0 ? void 0 : book.saleInfo) === null || _h === void 0 ? void 0 : _h.buyLink })),
            };
        });
        res.status(200).json(books);
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map