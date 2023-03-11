import {useState} from 'react'

const Signup = ()  => {
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [password,setPassword] =  useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(email,password)
    }
    return (
        <form onSubmit={handleSubmit} className='auth'>
            <h3>Signup</h3>
            <label>Username:</label>
            <input
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={email}
            />
            <label>Email:</label>
            <input
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
            <label>Password:</label>
            <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
            <button>Sign up</button>
        </form>
    )
}
export default Signup