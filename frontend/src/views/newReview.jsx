import { useState, useEffect } from "react"
import { useHistory } from "react-router"

function NewReview({  onSubmit }) {

    const [authors, setAuthors] = useState([])

    const [review, setReview] = useState({
        review: '',
        stars: 3,
        authorId: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/users`)
            const users = await response.json()
            setReview({ ...review, authorId: users[0]?.userId})
            setAuthors(users)
        }
        fetchData()
    }, [])

    let authorOptions = authors.map(author => {
        return <option key={author.userId} value={author.userId}>{user.username}</option>
    })

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(review)
        setReview({
            review: '',
            stars: 3,
            authorId: authors[0]?.userId
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-group col-sm-12">
                    <label htmlFor="review">Review</label>
                    <textarea
                        required
                        value={review.review}
                        onChange={e => setReview({ ...review, review: e.target.value })}
                        className="form-control"
                        id="review"
                        name="review"
                    />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-sm-4">
                    <label htmlFor="stars">Star Rating</label>
                    <input
                        value={review.stars}
                        onChange={e => setReview({ ...review, stars: e.target.value })}
                        type="range"
                        step="0.5"
                        min="1"
                        max="5"
                        id="stars"
                        name="stars"
                        className="form-control"
                    />
                </div>
            </div>
            <input className="btn btn-primary" type="submit" value="Add Review" />
        </form>
    )
}

export default NewReview