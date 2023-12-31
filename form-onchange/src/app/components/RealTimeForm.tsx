import React, {useState} from 'react'


const RealTimeForm = () => {
    const [firstName, setFirstName]: [
      firstName: string,
      setFirstName: React.Dispatch<React.SetStateAction<string>>
    ] = useState("");
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    
    return (
      <div>
        <div>
          <form>
            <div>
              <label>First Name</label>
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
              ></input>
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <label>Password</label>
              <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <label>Confirm Password</label>
              <input
                type="text"
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>
          </form>
        </div>
        <div>
          <p>
            First Name: <span>{firstName}</span>
          </p>
          <p>
            Last Name: <span>{lastName}</span>
          </p>
          <p>
            Email: <span>{email}</span>
          </p>
          <p>
            Password: <span>{password}</span>
          </p>
          <p>
            Confirm Password: <span>{confirmPassword}</span>
          </p>
        </div>
      </div>
    );
}

export default RealTimeForm