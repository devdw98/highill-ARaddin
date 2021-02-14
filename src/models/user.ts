// export interface User {
// 	username: string;
// 	photos: string[];
// 	code: string;
// }

export class User {
	username: string;
	photos: string[];
	code: string;
	constructor(username: string, photos: string[], code: string) {
		this.username = username;
		this.photos = photos;
		this.code = code;
	}
}

export const collection = 'users';
