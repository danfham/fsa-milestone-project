const React = require('react')
const Default = require("../layouts/default")

function LoginForm() {

    return (
        <Default>
            <h1>Login to your account</h1>
            <main className='main-container'>
                <form>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />

                    <button type="button" onClick="submit">Login</button>
                </form>
            </main>
        </Default>

    )
}

export default LoginForm