import React, { useState } from "react";
import { LoginVerification, getRandomAvatar } from "../Utils/Utils";

export default function LoginPlain({ userCache, setUserCache }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const onSubmit = async (e) => {
		e.preventDefault();
		setError("");


		try {
			await LoginVerification({ username, password });
			const url = await getRandomAvatar();

			setUsername("");
			setPassword("");
			setError("");
			setUserCache({ username: username, avatar: url });
		} catch (error) {
			setError("Incorrect username or password!");
		}
		setIsLoading(false);
	};

	return (
		<div className='Login'>
			<div className='Login-container'>
				{userCache?.username ? (
					<>
						<h1> Hello {userCache.username}!</h1>
						<button onClick={() => setUserCache({})}>Log Out</button>
					</>
				) : (
					<form className='form' onSubmit={onSubmit}>
						{error && <p className='error'>{error}</p>}
						<p>Please Login!</p>
						<input
							type='text'
							placeholder='username'
							autoComplete='new-username'
							value={username}
							onChange={(e) => setUsername(e.currentTarget.value)}
						/>
						<input
							type='password'
							placeholder='password'
							autoComplete='new-password'
							value={password}
							onChange={(e) => setPassword(e.currentTarget.value)}
						/>
						<button className='submit' type='submit' disabled={isLoading}>
							{isLoading ? "Logging in..." : "Login In"}
						</button>
					</form>
				)}
			</div>
		</div>
	);
}