function BookShowPage({book}) {
    return (
      <main>
        <div>
          <img src={book.cover} alt="Book Cover" />
          <div>
            <h1>{book.title}</h1>
            <div>
                <h2>Rating: {book.rating}/5.00</h2>
                <button className="btn-primary">Submit Rating</button>
            </div>
          </div>
        </div>
        <div>
            <h1>Reviews</h1>
        </div>
      </main>
    );
}
  
export default BookShowPage;