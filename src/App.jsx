import {books} from './books'
import Book from "./book"
import './App.css'

function App() {
  const getBooks = (id) =>{
    const book = books.find((book) => book.id === id)
    console.log(book)
  }
  return (
    <>
      <h1>Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) =>{
          return <Book {...book} key={book.id} number={index} getBook={getBooks}/>
        })}
      </section>
    </>
  )
}

export default App
