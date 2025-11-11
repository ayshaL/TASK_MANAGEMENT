import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

/* 
    Login component structure:
    - username input + password input
    - Submit -> validate (backend call)
    - forget password link (not implemented)
    - create account link (not implemented)
    - props needed : onLoginSuccess (obligatoire)
*/

function TextExample() {
  
}


export default function Login({onLoginSuccess}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Call backend API for login
        const isValid = await fakeLoginAPI(username, password);
        if (isValid) {
            onLoginSuccess();
        } else {
            alert('Login failed');
        }
    };

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
    );

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
}