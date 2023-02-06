import NoCover from "../../assets/noCover.png";
import { Book } from "../../models";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="w-60 h-[500px] flex flex-col justify-between rounded-lg shadow-lg">
      <img
        className="rounded-t-lg w-60 h-80"
        src={book.thumbnail ? book.thumbnail : NoCover}
        alt="bookimg"
      />
      <div className="flex flex-col flex-1 justify-evenly">
        <h2 className="text-center">{book.title}</h2>
        <div className="flex flex-col">
          {book.authors.map((author: string) => (
            <h3 key={author} className="text-center text-[#888]">
              {author}
            </h3>
          ))}
        </div>
        <h3 className="text-center text-[#ccc]">
          Language: {book.language.toUpperCase()}
        </h3>
      </div>
      <div className="self-center h-12">
        {book.saleInfo.saleability === "FOR_SALE" && (
          <div className="bg-[#ccdef5] py-1 px-10 rounded-full">
            <a href={book.saleInfo.buyLink} target="_blank">
              Buy
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCard;
