export default async function Login () {
    
  

    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: 'superman27',
            password: 'krypt0n0rbust'
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return (
        <div className="Login">
          <h1>Login</h1>
        </div>
      );
    } catch (err) {
      console.error(err);
    }
  }

 
    async function handleClick() {
      try {
        const response = await fetch(
            `${BASE_URL}/users/login`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const result = await response.json();
        setSuccessMessage(result.message);
      } catch (error) {
        setError(error.message);
      }
    }
  
    export function Authenticate({ token }) {
        const [successMessage, setSuccessMessage] = useState(null);
        const [error, setError] = useState(null);
      
    return (
      <div>
        <h2>Authenticate</h2>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Token!</button>
      </div>
    );
  }

