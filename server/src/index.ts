import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  return res.send("Express Typescript Server for Rebook App!");
});

app.get("/books", async (_req: Request, res: Response) => {
  const search = _req.query.search;
  try {
    const booksRes = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}`
    );
    const booksJson = await booksRes.json();

    const books = booksJson.items.map((book: any) => {
      const isBuyLink = book?.saleInfo?.saleability === "FOR_SALE";
      return {
        id: book?.id,
        title: book?.volumeInfo?.title,
        thumbnail: book?.volumeInfo?.imageLinks?.thumbnail || "",
        authors: book?.volumeInfo?.authors,
        language: book?.volumeInfo?.language,
        saleInfo: {
          saleability: book?.saleInfo?.saleability,
          ...(isBuyLink && { buyLink: book?.saleInfo?.buyLink }),
        },
      };
    });

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
