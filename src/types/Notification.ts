export enum NotificationType {
	NONE = '',
	ALARM = 'ALARM',
	EMAIL = 'EMAIL',
	DRAWER = 'DRAWER',
};

export default interface Notification {
	type: NotificationType;
	// TODO: time
};