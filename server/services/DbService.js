const fs = require("fs");
const fsPromise = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid");

class DbService {
	#DB_FILE_PATH = path.resolve(__dirname, "../db.json");
	#entityKey;

	constructor(entityKey) {
		this.#entityKey = entityKey;
		this.#addEntity();
	}

	#addEntity() {
		const db = JSON.parse(fs.readFileSync(this.#DB_FILE_PATH, "utf-8"));

		const entityAlreadyExists = Object.hasOwn(db, this.#entityKey);
		if (entityAlreadyExists) {
			return;
		}

		fs.writeFileSync(
			this.#DB_FILE_PATH,
			JSON.stringify({...db, [this.#entityKey]: []}, null, 2),
			"utf-8"
		);
	}

	async create(data) {
		const db = await this.#getDb();

		const newEntity = {id: nanoid(), ...data};
		const updatedDb = {
			...db,
			[this.#entityKey]: [...db[this.#entityKey], newEntity]
		};
		await fsPromise.writeFile(
			this.#DB_FILE_PATH,
			JSON.stringify(updatedDb, null, 2),
			"utf-8"
		);

		return newEntity;
	}

	async updateById(id, data) {
		const db = await this.#getDb();

		const updatedDb = {
			...db,
			[this.#entityKey]: db[this.#entityKey].map(el =>
				el.id === id ? {...el, ...data} : el
			)
		};
		await fsPromise.writeFile(
			this.#DB_FILE_PATH,
			JSON.stringify(updatedDb, null, 2),
			"utf-8"
		);

		const updatedEntity = await this.getById(id);
		return updatedEntity;
	}

	async getById(id) {
		const db = await this.#getDb();
		const entities = db[this.#entityKey];

		const entity = entities.find(el => el.id === id) || null;

		return entity;
	}

	async getAll() {
		const db = await this.#getDb();
		return db[this.#entityKey];
	}

	async #getDb() {
		const data = await fsPromise.readFile(this.#DB_FILE_PATH, "utf-8");
		return JSON.parse(data);
	}
}

module.exports = DbService;