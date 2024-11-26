import { useEffect } from 'react'
import './App.css'
import { auth } from './firebase-config';
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth';


function App() {

  useEffect(() => {
    signInAnonymously(auth);
    onAuthStateChanged(auth, user => {
      if (user) {
        console.log("User signed in ", user.uid);
      }
    })
  },[])

  return (
    <div className='App'>
      <header>
        <h1> Docs Pro </h1>
      </header>
    </div>
  )
}

export default App
