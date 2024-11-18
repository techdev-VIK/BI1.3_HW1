import useFetch from "../useFetch";


const BookAuthor = ({authorName}) => {
    const {data, loading, error} = useFetch(`http://localhost:3000/books/author/${authorName}`)

    console.log(data);

    return (
        data? (<div>
            <h2>Books By {data[0].author}</h2>
             <ul>
                {data.map((book) => (
                    <li>{book.title}</li>
                ))}
             </ul>
           </div>) : loading && <p>Loading....</p>
       
    )
}

export default BookAuthor;