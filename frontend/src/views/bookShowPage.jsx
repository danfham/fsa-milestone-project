import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


function BookShowPage({book}) {

	const history = useNavigate()
	
	const [books, setBooks] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5000/book`)
			const resData = await response.json()
			setBooks(resData)
		}
		fetchData()
	}, [])

  
	let booksFormatted = books.map((book) => {
		return (
			<div className="col-sm-6" key={book.bookId}>
				<h2>
					<a href="#" onClick={() => history.push(`/view/${book.bookId}`)} >
						{book.title}
					</a>
				</h2>
				<p className="text-center">
					Written in {book.author}, {place.releaseDate}
				</p>
			</div>
		)
	})
	return (
		<main>
			<h1>Library</h1>
			<div className="row">
				{booksFormatted}
			</div>
		</main>
	)
}
  
export default BookShowPage;