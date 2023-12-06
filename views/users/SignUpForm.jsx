import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router"

function SignUpForm() {

	const history = useHistory()

	const [user, setUser] = useState({
		username: '',
		password: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(``, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})

		history.push(`/`)
	}

	return (
		<main>
			<h1>Sign Up</h1>
            {errorMessage !== null
                ? (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )
                : null
            }
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="">
						<label htmlFor="username">Choose a Username</label>
						<input
							required
							value={user.username}
							onChange={e => setUser({ ...user, username: e.target.value })}
							className="form-control"
							id="username"
							name="username"
						/>
                    </div>
				</div>
				<div className="row">
					<div className="">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							required
							value={user.password}
							onChange={e => setUser({ ...user, password: e.target.value })}
							className="form-control"
							id="password"
							name="password"
						/>
					</div>
				</div>
				<input className="" type="submit" value="Sign Up" />
			</form>
		</main>
	)
}

export default SignUpForm