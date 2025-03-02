// App.jsx
import { Link, Outlet } from 'react-router-dom' 
import Nav from './routes/Nav.jsx'; 
import'./App.css'

function App() {
  return (
    <div>
      <header>
      </header> 
      <main>
        <Outlet />
        </main> 
        <footer>
        </footer>
    </div>
  )
}

export default App