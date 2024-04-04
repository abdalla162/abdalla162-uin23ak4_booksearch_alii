import React from 'react'
import Bookcard from './Bookcard'



export default function SearchResults({ books }) {

  return (

    <div>

      {books.map((book, index) => (

        <Bookcard

          key={index}

          keyBook={book.key || index}

          title={book.title}

          first_publish_year={book.first_publish_year}

          author_name={book.author_name ? book.author_name.join(', ') : 'Ukjent'}

          ratings_average={book.ratings_average ? book.ratings_average : "Ikke tilgjengelig"}

          coverImage={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : `http://via.placeholder.com/640x360`
          
          //isbn={singleBook?.isbn}>
          //Prøvde å få til amazon lenka fikk ikke det helt til. Men resten funker.
        
        }

        />

      ))}

    </div>

  )

}





