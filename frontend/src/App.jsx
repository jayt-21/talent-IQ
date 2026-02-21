
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import './App.css'

function App() {


  return (
    <>
    <h1> welcome to Talent IQ</h1>
    <SignedOut>
    <SignInButton mode="modal">
      <button className='sign-in-button'>Sign In</button>
    </SignInButton>
    </SignedOut>

    <SignedIn>
      <SignOutButton/>
    </SignedIn>

    <UserButton/>
    </>
  )
}

export default App
