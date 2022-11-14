import { Component, JSX, createContext, useContext, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import User from "../types/User";

export interface UserContextModel {
	get: User[];
	set: (users: User[]) => void;
	getActive: () => string;
	setActive: (userUID: string) => void;
}

export const UserContext = createContext<UserContextModel>();

export const UserProvider: Component<{
	value: User[],
	children?: JSX.Element,
}> = (props) => {
	const [users, setUsers] = createStore<User[]>(props.value);
	const [activeUser, setActiveUser] = createSignal<string>('');
	const store: UserContextModel = {
		get: users,
		set: setUsers,
		getActive: activeUser,
		setActive: setActiveUser,
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