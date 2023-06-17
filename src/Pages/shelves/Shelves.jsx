import React, { useState } from 'react'
import './Shelves.css';
import { useNavigate } from 'react-router-dom';



const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publisher: "HarperCollins",
    currentlyread: true,
    year: 1960,
    image:
      "https://stunningmotivation.com/wp-content/uploads/2020/04/rich-dad-poor-dad.jpg",
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


export default function Shelves() {
  // const [Books, setBooks] = useState(books);
  const [currentBook, setCurrentBook] = useState([]);
  const [products, setProducts] = useState([]);
  const [readBook, setReadBook] = useState([]);

  const navigate = useNavigate();

  const currentlyRead = books.filter(book => book.currentlyread);
  const wantToRead = books.filter(data => data.wanttoread);
  const read = books.filter(item => item.read);


  ////currently read
  function handleWantdownChange(event) {
    const selectedWantBook = event.target.value;
    setCurrentBook(prevWant => [...prevWant, selectedWantBook]);
  };

  /////want to read add book
  function handleDropdownChange(event) {
    const selectedProduct = event.target.value;
    setProducts(prevProducts => [...prevProducts, selectedProduct]);
  };

  ///read
  function handleReadChange(event) {
    const selectedReadBook = event.target.value;
    setReadBook(prevRead => [...prevRead, selectedReadBook]);
  };

  return (
    <div>


      {/* Currently Read */}
      {/* ////////////////////// */}
<button onClick={()=>navigate('/search')}>Go to Search Page</button>
      <h2 className='heading1'>Currenlty Read</h2>
      {
          products.map((item) => {
            return (
              <>
                <img src={item.image} alt="img" />
              </>
            )
          })
        }
        {/* /////////////////////// */}
        {
          currentBook.map((item) => {
            return (
              <>
                <img src={item.image} alt="img" />
              </>
            )
          })
        }
        {/* ////////////////////// */}
        {
          readBook.map((item) => {
            return (
              <>
                <img src={item.image} alt="img" />
              </>
            )
          })
        }
      <hr />
      <div id='Currenlty-Read-Books'>
        {
          currentlyRead.map((current) => {
            return (
              <div key={current.id}>
                <span> <img src={current.image} alt="img" width='40%' />

                  <select onChange={handleDropdownChange}>
                    <option value="">move to</option>
                    <option disabled value="currentlyread" >currently read</option>
                    <option value="wanttoread" >want to read</option>
                    <option value="read">read</option>
                    <option disabled value="none">none</option>
                  </select>
                  
                </span>
              </div>
            )
          })
        }
      </div>

      {/* Want To Read */}
      {/* ////////////////////// */}
      {/* Addition  Products */}
      <h2 className='heading2'>Want To read</h2>
      <hr />
      <div id='Want-To-Read-Books'>
        {
          products.map((item) => {
            return (
              <>
                <img src={item.image} alt="img" />
              </>
            )
          })
        }
        {/* /////////////////////// */}
        {
          currentBook.map((item) => {
            return (
              <>
                <img src={item.image} alt="img" />
              </>
            )
          })
        }
        {/* ////////////////////// */}
        {
          readBook.map((item) => {
            return (
              <>
                <img src={item.image} alt="img" />
              </>
            )
          })
        }
        {/* ////////////////////////////// */}
        {wantToRead.map((want) => {
          return (
            <div key={want.id}>
              <span><img src={want.image} alt="img" width='40%' />
               <select onChange={handleWantdownChange}>
                  <option value="">move to</option>
                  <option value="currentlyread">currently read</option>
                  <option disabled value="wanttoread">want to read</option>
                  <option value="read">read</option>
                  <option disabled value="none">none</option>
                </select>
              
              </span>

            </div>
          )
        })
        }


      </div>
      {/* Read Books */}
      {/* ////////////////////// */}
      <h2 id='heading3'>Read</h2>
      <hr />
      {
          products.map((item) => {
            return (
              <>
                <img src={item.image} alt="img" />
              </>
            )
          })
        }
        {/* /////////////////////// */}
        {
          currentBook.map((item) => {
            return (
              <>
                <img src={item.image} alt="img" />
              </>
            )
          })
        }
        {/* ////////////////////// */}
        {
          readBook.map((item) => {
            return (
              <>
                <img src={item.image} alt="img" />
              </>
            )
          })
        }
      <div id='read'>
        {
          read.map((item) => {
            return (

              <div key={item.id}>
                <span><img src={item.image} alt="img" width='40%' />
                  <select onChange={handleReadChange}>
                  <option value="">move to</option>
                    <option value="currently-read">currently read</option>
                    <option value="item-to-read">item to read</option>
                    <option disabled value="read">read</option>
                    <option disabled value="none">none</option>
                  </select>
                  
                </span>

              </div>

            )
          })
        }
      </div>
    </div>
  )
}
