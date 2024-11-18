import { useState } from "react";
import useFetch from "../useFetch";


export default function Books(){

    const [successMessage, setSuccessMessage] = useState('');

    const {data, loading, error} = useFetch(`https://be-4-assignment1-omega.vercel.app/allbooks`)

    // console.log(data);

    const handleDelete = async (bookId) => {
        try {
            const response = await fetch(`https://be-4-assignment1-omega.vercel.app/books/delBook/${bookId}`,{
                method: "DELETE"
            },
        )

        if(!response.ok){
            throw "Failed to delete book."
        }

        const data = await response.json();

        if(data){
            setSuccessMessage('Book deleted successfully.')
            window.location.reload();
        }

        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <h2>All Books</h2>
            {loading && <p>Loading...</p>}
            {data?.error && <p>data?.error</p>}
            <ul>
                {data?.map((book) => (
                    <li key={book._id}>{book.title} <button onClick={() => handleDelete(book._id)}>Delete</button></li>
                ))}
            </ul>
            <p>{successMessage}</p>
        </div>
    )
}
