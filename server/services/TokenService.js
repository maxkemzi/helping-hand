const DbService = require("./DbService");
const {nanoid} = require("nanoid");

class TokenService {
	static #db = new DbService("tokens");

	static async create(user) {
		const token = await TokenService.#db.create({token: nanoid(), user});
		return token;
	}

	static async createOrUpdate(user) {
		const tokens = await TokenService.#db.getAll();

		const token = tokens.find(el => el.user.id === user.id);
		const tokenExists = token != null;
		if (tokenExists) {
			const updatedToken = await TokenService.#db.updateById(token.id, {
				token: nanoid()
			});
			return updatedToken;
		}

		const createdToken = await TokenService.#db.create({token: nanoid(), user});
		return createdToken;
	}

	static async getByUserId(userId) {
		const tokens = await TokenService.#db.getAll();
		return tokens.filter(el => el.user.id === userId);
	}

	static async getByToken(token) {
		const tokens = await TokenService.#db.getAll();
		return tokens.find(el => el.token === token);
	}

	static async deleteByToken(token) {
		const tokens = await TokenService.#db.getAll();
		const tokenToDelete = tokens.find(el => el.token === token);

		const deletedToken = await TokenService.#db.deleteById(tokenToDelete.id);
		return deletedToken;
	}

	static async isValid(token) {
		const tokens = await TokenService.#db.getAll();
		return tokens.find(el => el.token === token) != null;
	}
}

module.exports = TokenService;
