const React = require('react')


function Default(html) {

  return (
    <html>
    <head>
      <title>Default</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
      <link rel="stylesheet" href="/main.css"></link>
    </head>
    <body>
      <nav className="navbar navbar-expand-xxl bg-dark navbar-dark py-3 justify-content-between justify-content-xxl-start">
        <div className="container-fluid">
          <a className="navbar-brand" href="/book"><h1>Home</h1></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#idCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="idCollapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/login"><h2>Login</h2></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signup"><h2>Sign Up</h2></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
          {html.children}
      </div>
     

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
    </body>

  </html>
  )
}

module.exports = Default