const React = require('react')

function BookShowPage({book}) {
	console.log(book.title)
	bookRating = Math.round(100*book.rating)/100
	
	return(
		<div>
			<img src={book.cover} alt={book.title}/>
			<div>
				<h1>{book.title}</h1>
				<script></script>
				<h2>Rating: {bookRating}</h2>
			</div>
		</div>
		
	)
  
	
}
  
module.exports = BookShowPage;