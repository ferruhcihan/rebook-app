import { useState } from "react";
import BookCard from "./components/bookCard";
import Pagination from "./components/pagination";
import usePagination from "./hooks/usePagination";
import { useKey } from "./hooks/useKey";
import LoadingSpinner from "./components/loadingSpinner";
import BookSearch from "./assets/bookSearch.png";
import { Book } from "./models";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const PER_PAGE = 4;
  const totalPages = Math.ceil(books.length / PER_PAGE);

  const fetchBooks = async (query: string) => {
    setLoading(true);
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}books?search=${query}`
    );
    const books = await res.json();
    setBooks(books);
    setLoading(false);
  };

  const booksData = usePagination<Book>(books, PER_PAGE);

  const handlePagination = (p: number) => {
    setPage(p);
    booksData.jump(p);
  };

  const handleSearch = () => {
    searchText ? fetchBooks(searchText) : setBooks([]);
  };
  useKey("Enter", handleSearch);

  return (
    <div className="h-screen">
      <nav className="container flex items-center justify-center mx-auto h-28">
        <div className="bg-white w-[500px] flex border-2 border-[#d9d9d9] rounded-full">
          <input
            type="text"
            className="flex-1 mx-4 my-2 align-middle outline-none"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search a book..."
          />
          <button
            className="bg-[#ccdef5] min-h-full px-4 py-2 rounded-r-full w-24"
            onClick={handleSearch}
            disabled={loading}
          >
            {loading ? <LoadingSpinner /> : "Search"}
          </button>
        </div>
      </nav>
      {books.length ? (
        <div>
          {totalPages > 1 && (
            <Pagination
              total={totalPages}
              current={page}
              pagination={(crPage: number) => handlePagination(crPage)}
            />
          )}
          <div className="container flex flex-wrap gap-6 mx-auto mt-10 justify-evenly">
            {booksData.currentData().map((book: Book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      ) : (
        <div className="container flex items-center justify-center mx-auto">
          <img
            src={BookSearch}
            alt="bookSearch"
            className="h-[500px] rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
