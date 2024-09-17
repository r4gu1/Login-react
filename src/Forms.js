import './index.css';
import { useState } from "react";

function Forms() {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [rname, setrname] = useState("");

    function handleFname(evt) {
        setfname(evt.target.value);
    }

    function handleLname(evt) {
        setlname(evt.target.value);
    }

    function handlername(evt) {
        evt.preventDefault();
        setrname(`Welcome ${fname} ${lname}!`);
        
    }

    return (
        <>
            <div className="login-container1">
                <form className="login-form">
                    <h2>Login</h2>
                    <div className="input-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            value={fname}
                            onChange={handleFname}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            value={lname}
                            onChange={handleLname}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <button type="submit" className="submit-btn" onClick={handlername}>
                        Submit
                    </button>
                </form>
            </div>

            {/* Conditionally render the welcome container */}
            {rname && (
                <div className="wel">
                    <h1>{rname}</h1>
                </div>
            )}
        </>
    );
}


export default Forms;
