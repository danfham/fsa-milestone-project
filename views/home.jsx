import React from 'react'
const Default = require('./layouts/default')

function Home({books}) {
console.log(books.title)

    return (
      <main>
        <a href="/view">
          <button className="btn-primary">Enter the Library</button>
        </a>
        <li key={books._id} className="form-container" >
            <a href={`/book/${books._id}`}>
                <h2>{books.title}</h2>
            </a>
              <form action={`/book/${book._id}?_method=DELETE`} method='POST'>
                <input type="submit" value="DELETE" className='delete-button'/>
              </form>
        </li>
      </main>
    );
  }
  
  export default Home;