import React, { useState, useEffect } from 'react'

import BookList from "./Components/BookList.jsx";
import SearchBar from "./Components/SearchBar.jsx";
import SearchResults from "./Components/SearchResults.jsx";
import "./style/main.css";



function BookSearch() {

  const [books, setBooks] = useState([])

  const [searchTerm, setSearchTerm] = useState("James+bond")



  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // SearchTerm er minst tre tegn før søket utføres
        if (searchTerm.length >= 3) {
          const response = await fetch(`https://openlibrary.org/search.json?q=${searchTerm}&limit=10`)
          const data = await response.json()
          setBooks(data.docs);
        } else {
          // Hvis searchTerm er mindre enn tre tegn, så tømmes resultatene
          setBooks([])
        }
      } catch (error) {
        console.error("Det har skjedd en feil", error)
        setBooks([])
      }
    }

    fetchBooks()
  }, [searchTerm])
  return (

    <>
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    <SearchResults books={books} />

   

    </>

  )

}

export default BookSearch

// https://covers.openlibrary.org/b/isbn/0385472579-S.jpg Her er bilde for bøkene.
