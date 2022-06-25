import { Request, Response } from 'express';
import { QueryResult } from 'pg'
import { ServiceResponse } from '../abstractions/ServiceResponse';
import { HttpStatusCode as Http } from '../abstractions/HttpStatusCode';
import { pool } from '../config/database';

const getAllUser = async (_req: Request, res: Response) => {
	const queryResponse: QueryResult = await pool.query("SELECT * FROM users");
	const serviceResponse = new ServiceResponse(queryResponse.rows, true, "User list successfully obtained.", null);
	return res.status(Http.OK).json(serviceResponse.JSON());
};

const getUserById = (_req: Request, res: Response) => {
	return res.json({ msg: "user by id" });
};

const createUser = (_req: Request, res: Response) => {
	return res.json({ msg: "create user" });
};

const updateUser = (_req: Request, res: Response) => {
	return res.json({ msg: "update user" });
};

const deleteUser = (_req: Request, res: Response) => {
	return res.json({ msg: "delte user" });
};

export {
	getAllUser,
	getUserById,
	createUser,
	updateUser,
	deleteUser
}
