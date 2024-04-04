import React, { useState, useEffect } from 'react'
/* Har noen problemer med å hente filene, den funker med å bytte liten 
 bokstav på components eller til stor hvis den er liten fra før, funker selvom det er error her*/
import BookList from './components/BookList'
import SearchBar from './components/SearchBar'
import'./style/main.css'
import SearchResults from './components/SearchResults'


function BookSearch() {

  const [books, setBooks] = useState([])

  const [searchTerm, setSearchTerm] = useState("James+bond")



  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // Sørg for at searchTerm er minst tre tegn før du utfører søket
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
