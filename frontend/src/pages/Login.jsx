import {useState} from 'react'
import {useLogin} from '../hooks/useLogin'
const Login = ()  => {
    const [email,setEmail] = useState('')
    const [password,setPassword] =  useState('')
    const {error,isLoading,login} = useLogin()
    const handleSubmit = async (e) =>{
        e.preventDefault()
        await login(email,password)
    }
    return (
        <form onSubmit={handleSubmit} className='auth'>
            <h3>Login</h3>
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
            required={true}
            />
            <button>Log in</button>
            {error && <div>{error}</div>}
        </form>
    )
}
export default Login