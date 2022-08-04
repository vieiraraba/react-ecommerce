import useRegisterAuth from "../../../hooks/useRegisterAuth";

export default function LoginPlain() {
	const {
		userCache,
		setUserCache,
		error,
		onSubmit,
		isLoading,
		setPassword,
		setUsername,
		username,
		password,
	} = useRegisterAuth();

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
