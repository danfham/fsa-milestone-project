const React = require( 'react')
const Default = require('./layouts/default')

// will need to pass in users 
function Home({book},{user}){

  return(
    <Default>
      <body>
        <div className='main-container'>
          <label htmlFor="search">Book Search:</label>
          <input type="text" id="search" onInput='' />
        </div>
      </body>
    </Default>

  )
};


export default Home;
