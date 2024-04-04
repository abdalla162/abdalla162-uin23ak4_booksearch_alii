export default function Bookcard({ title, first_publish_year, author_name, coverImage, ratings_average, isbn }) {
    return (

      <div className="book-card">

        <h3>{title}</h3>

        {coverImage && <img src={coverImage} alt={`Cover of ${title}`} style={{ width: "200px", height: "250px" }} />}

        <p>Utgivelsesår: {first_publish_year}</p>

        <p>Forfatter: {author_name}</p>

        <p>Rating: {ratings_average}</p>
        
        {isbn == null ? "" : <a href={`https://www.amazon.com/s?k=${isbn?.[0]}`}>Show in Amazon</a>}

      </div>

    );

  }

  

