import useFetch from "../useFetch";


const BookTitle = ({title}) => {

    const {data, loading, error} = useFetch(`http://localhost:3000/books/${title}`)

    console.log(data);

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error loading book data</p>;

    return (
        data ? (<div>
     
                <h2>{data.title}</h2>
                <p><strong>Author: </strong>{data.author}</p>
                <p><strong>Release Year: </strong>{data.publishedYear}</p>
                <p><strong>Genre: </strong>{data.genre.join(', ')}</p>
        </div>) : loading && <p>Loading...</p>
        
    )
}

export default BookTitle;
