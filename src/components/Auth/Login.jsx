import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import './Auth.css'

export default function Login() {

    const { login } = useAuth()
    const navigate = useNavigate()
    
    async function handleAuth() {
        await login()
        navigate('/')
    }

  return (
    <section className="login">
        <article className="mb-5 p-5">
            <h1 className="text-center">Welcome to React ToDo!</h1>
        </article>
        <Container>
            <Card className="m-2 text-center">
                <Card.Header className='text-white'>
                    <h2>Login for full functionality</h2>
                </Card.Header>
                <Card.Body>
                    {/* 3) we need to call upon the login() somewhere within the UI */}
                    <button onClick={handleAuth} className="loginButton">
                        Login w/ GitHub
                    </button>
                </Card.Body>
            </Card>
        </Container>
    </section>
  )
}