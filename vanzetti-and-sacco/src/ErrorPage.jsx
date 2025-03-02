// ErrorPage.jsx
import { useRouteError, Link } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
    </div>
  )
}

export default ErrorPage