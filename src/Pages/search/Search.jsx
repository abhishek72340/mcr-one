import React, { useState } from 'react'
import './Search.css';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publisher: "HarperCollins",
    currentlyread: true,
    year: 1960,
    image:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41j-s9fHJcL.jpg",
    price: 9.99,
    read: false
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    publisher: "Penguin Books",
    wanttoread: true,
    year: 1949,
    image: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
    price: 8.99,
    read: true
  },
  {
    id: 3,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publisher: "Little, Brown and Company",
    wanttoread: true,
    year: 1951,
    image:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91HPG31dTwL.jpg",
    price: 10.99,
    read: false
  },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publisher: "Scribner",
    currentlyread: true,
    year: 1925,
    image: "https://m.media-amazon.com/images/I/71FTb9X6wsL.jpg",
    price: 7.99,
    read: true
  },
  {
    id: 5,
    title: "Brave New World",
    author: "Aldous Huxley",
    publisher: "Harper Perennial Modern Classics",
    wanttoread: true,
    year: 1932,
    image:
      "https://pagdandi.org/wp-content/uploads/2021/04/Brave-New-World.jpg",
    price: 12.99,
    read: false
  },
  {
    id: 6,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publisher: "Penguin Classics",
    currentlyread: true,
    year: 1813,
    image: "https://m.media-amazon.com/images/I/71Q1tPupKjL.jpg",
    price: 6.99,
    read: true
  }
]
export default function Search() {
  const [allBook, setAllBook] = useState('');
  const navigate = useNavigate();
  const searchHandler = (e) => {
    setAllBook(e.target.value);
  }
  const searchBook = books ? books.filter(data => data.author === allBook) : null
  return (
    <div>
      <nav>
        <span id='arrow-icon' onClick={() => navigate('/')}><AiOutlineArrowLeft /></span>

        <input type="search" onChange={searchHandler} placeholder='search' id='search-input' />

      </nav>

      <div id='all-book'>
        {
          searchBook.map((item) => {
            return (
              <div>
                <img src={item.image} alt="" width='50%' />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
