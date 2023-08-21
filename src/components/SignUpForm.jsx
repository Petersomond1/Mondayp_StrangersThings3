import { useState } from "react";

const COHORT_NAME = '2302-ACC-ET-WEB-PT-E'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
   
    try {
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: 'superman27',
            password: 'krypt0n0rbust' }),
        });
    
        if (response.ok) {
            const result = await response.json();
            console.log(result);
        } else {
            setError("Sign up failed.");
        }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}




// import { useState } from "react";

// export default function UserRegistration () {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

 
//   return (
//     <div>
//       <h1>UserRegistration</h1>
//       {error && <p>{error}</p>} 

//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:{" "}
//           <input
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//         <label>
//           Password:{" "}
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <button>Submit</button>
//       </form>
//     </div>
//   );

// async function handleSubmit(event) {
//     event.preventDefault();
   
//     try {
//         const response = await fetch(`${BASE_URL}/users/register`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ username, password }),
//         });
    
//         if (response.ok) {
//             const result = await response.json();
//             console.log(result);
//         } else {
//             setError("Sign up failed.");
//         }


// //   const registerUser = async () => {
//     // try {
//     //   const response = await fetch(
//     //     `${BASE_URL}/users/register`, {
//     //     method: "POST",
//     //     headers: {
//     //       'Content-Type': 'application/json'
//     //     },
//     //     body: JSON.stringify({
//     //       user: {
//     //         username: 'superman27',
//     //         password: 'krypt0n0rbust'
//     //       }
//     //     })
//     //   });
//     //   const result = await response.json();

//     //   console.log(result)
//     //   return result


//     } catch (err) {
//       console.error(err);
//     }




//   }
// }

//  UserRegistration;
