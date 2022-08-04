import { useState, useContext } from "react";
import { LoginVerification, getRandomAvatar } from "../helpers/Utils/Utils";
import { UserDataContext } from "../contexts/UserDataContext";

const useRegisterAuth = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const { userCache, setUserCache } = useContext(UserDataContext);

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

	return {
		userCache,
		setUserCache,
		error,
		onSubmit,
		isLoading,
		setPassword,
		setUsername,
		username,
		password,
	};
};

export default useRegisterAuth;
