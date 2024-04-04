import React, { useState } from 'react'



export default function SearchBar({ setSearchTerm }) {

  const [search, setSearch] = useState("")



  const handleSubmit = (e) => {

    e.preventDefault();

    setSearchTerm(search.replace(/\s/g, '+'))

  }
  return (

    <div>

      <form onSubmit={handleSubmit}>

        <input

          type="text"

          placeholder="Søk etter bøker..."

          value={search}

          onChange={(e) => setSearch(e.target.value)}

        />

        <button type="submit">Søk</button>

      </form>

    </div>

  );

}

