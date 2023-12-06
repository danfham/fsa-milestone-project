const React = require( 'react')
const Default = require('./layouts/default')

// will need to pass in users 
function Home(){

  return(
    <Default>
      <body>
        <div>
          <label htmlFor="search">Book Search:</label>
          <input type="text" id="search" onInput='' />
        </div>
      </body>
    </Default>

  )
};




export default Home;