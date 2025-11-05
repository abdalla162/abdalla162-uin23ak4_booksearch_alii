import React, { useState, useEffect } from "react";
// import BookList from "./Components/BookList.jsx"; // ikke brukt
import SearchBar from "./Components/SearchBar.jsx";
import SearchResults from "./Components/SearchResults.jsx";
import "./style/main.css";

function BookSearch() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("James bond");

  useEffect(() => {
    let cancelled = false;

    const fetchBooks = async () => {
      const term = (searchTerm || "").trim();
      if (term.length < 1) {
        setBooks([]);
        return;
      }

      try {
        // 1) søk etter verk
        const res = await fetch(
          `https://openlibrary.org/search.json?q=${encodeURIComponent(
            term
          )}&limit=12&fields=key,title,author_name,first_publish_year,cover_i`
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const docs = Array.isArray(data.docs) ? data.docs : [];

        // 2) hent rating for hvert work (/works/OL...W/ratings.json)
        const withRatings = await Promise.all(
          docs.map(async (doc) => {
            if (!doc?.key) return { ...doc, ratings_average: null };
            try {
              const r = await fetch(
                `https://openlibrary.org${doc.key}/ratings.json`
              );
              if (!r.ok) return { ...doc, ratings_average: null };
              const rj = await r.json();
              const avg = rj?.summary?.average ?? null;
              return { ...doc, ratings_average: avg };
            } catch {
              return { ...doc, ratings_average: null };
            }
          })
        );

        if (!cancelled) setBooks(withRatings);
      } catch (err) {
        console.error("Det har skjedd en feil", err);
        if (!cancelled) setBooks([]);
      }
    };

    fetchBooks();
    return () => {
      cancelled = true;
    };
  }, [searchTerm]);

  return (
    <main className="page">
      <div className="container">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SearchResults books={books} />
      </div>
    </main>
  );
}

export default BookSearch;
