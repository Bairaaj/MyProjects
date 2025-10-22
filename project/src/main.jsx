import ReactDOM from 'react-dom/client'

import { Main, NavBar} from './App'
import React from 'react'
import './Components/ImageScroller.css'; // Ensure this is imported for global styles
import './index.css'; // Ensure this is imported for global styles

ReactDOM.createRoot(document.getElementById('nav')).render(<NavBar />)

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)



