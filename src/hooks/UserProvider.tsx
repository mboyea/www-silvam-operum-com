import { Component, JSX, createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import User from "../types/User";

export interface UserContextModel {
	get: User;
	set: (user: User) => void;
}

export const UserContext = createContext<UserContextModel>();

export const UserProvider: Component<{
	value: User,
	children?: JSX.Element,
}> = (props) => {
	const [user, setUser] = createStore<User>(props.value);
	const store: UserContextModel = {
		get: user,
		set: setUser,
	};
	return (
		<UserContext.Provider value={store}>
			{props.children}
		</UserContext.Provider>
	);
}

export const useUser = () => {
	return useContext(UserContext);
}