// App.jsx
import { Outlet } from 'react-router-dom' 
import'./App.css'

function App() { 
  console.log("ciao")
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