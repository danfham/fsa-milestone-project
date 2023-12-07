const React = require( 'react')
const Default = require('./layouts/default')

// will need to pass in users 
function Home(){

  return(
    <Default>
      <body>
        <div className='main-container'>
          <form action="/book/search" method='GET'>
            <label htmlFor="search">Book Search:</label>
            <input type="text" id="title" name='title' />
            <button type="button" onclick="submit">Search!</button>
          </form>
          
        </div>
      </body>
    </Default>

  )
};


export default Home;
