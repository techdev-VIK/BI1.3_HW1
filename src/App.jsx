
import BookAuthor from "./components/BookAuthor"
import AddBookForm from "./components/BookForm"
import Books from "./components/Books"
import BookTitle from "./components/BookTitle"

function App() {

  return (
    <>
      <main>
        <AddBookForm />
        <Books />
        <BookTitle  title = 'Shoe Dog'/>
        <BookAuthor authorName = 'Harper Lee' />
      </main> 
    </>
  )
}

export default App
