const React = require('react')
const Default = require('./layouts/default')

function BookShowPage({book}) {
	console.log(book.title)
	book.getRating()
	const bookRating = Math.round(100*book.averageRating)/100

	const reviewsDisplay = book.reviews.map(review => {
		<div>
			<h3>{review.user.userName}</h3>
			<h4>{review.body}</h4>
		</div>
	})


	
	return(
		<Default>
			<div>
				<img src={book.cover} alt={book.title}/>
				<div>
					<h1>{book.title} ({book.releaseDate})</h1>
					<h2>{book.author}</h2>
					<h2>Rating: {bookRating}/5.00</h2>
					<div>
						<h2>submit Rating</h2>
						<form></form>
					</div>
					
				</div>
			</div>
			<div>
				<div>
					<h2>Reviews</h2>
					<h2>Created Review Button Placeholder</h2>
				</div>
				{reviewsDisplay}
			</div>
		</Default>
	)
  
	
}
  
module.exports = BookShowPage;