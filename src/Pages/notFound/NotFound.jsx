import './notFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section>
      <div className="container notfount__container">
        <h2>Page Not Found</h2>
        <button><Link to="/">Go back Home</Link></button>
      </div>
    </section>
  )
}

export default NotFound