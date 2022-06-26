import { Request, Response } from 'express';
import { QueryResult, } from 'pg'
import { ServiceResponse } from '../abstractions/ServiceResponse';
import { HttpStatusCode as Http } from '../abstractions/HttpStatusCode';
import { pool } from '../config/database';

const getAllUser = async (_req: Request, res: Response): Promise<Response> => {
	try {
		const queryResponse: QueryResult = await pool.query("SELECT * FROM users");
		const serviceResponse = new ServiceResponse(queryResponse.rows, true, "User list successfully obtained.", null);
		return res.status(Http.OK).json(serviceResponse.JSON());
	} catch (error: any) {
		console.error(error);
		const errorServiceResponse = new ServiceResponse(null, true, "Something went wrong", "Internal server error");
		return res.status(Http.INTERNAL_SERVER_ERROR).json(errorServiceResponse.JSON());
	}
};

const getUserById = async (req: Request, res: Response): Promise<Response> => {
	const queryResponse: QueryResult = await pool.query('SELECT * FROM users WHERE id=$1', [+req.params.id]);
	const message = queryResponse.rowCount === 0 ? "User not found." : "User obtained successfully."
	const serviceResponse = new ServiceResponse(queryResponse.rows, true, message, null);
	return res.status(Http.OK).json(serviceResponse.JSON());
};

const createUser = async (req: Request, res: Response): Promise<Response> => {
	const { fullname, username, email } = req.body;
	const queryResponse: QueryResult = await pool.query("INSERT INTO users(fullname, username, email) VALUES($1, $2, $3) RETURNING *", [fullname, username, email]);
	const serviceResponse = new ServiceResponse(queryResponse.rows, true, "User created successfully.", null);
	return res.status(Http.OK).json(serviceResponse.JSON());
};

const updateUser = (_req: Request, res: Response) => {
	return res.json({ msg: "update user" });
};

const deleteUser = async (req: Request, res: Response): Promise<Response> => {
	await pool.query('DELETE FROM users WHERE id=$1', [+req.params.id]);
	const serviceResponse = new ServiceResponse(null, true, "successfully deleted user.", null);
	return res.status(Http.OK).json(serviceResponse.JSON());
};

export {
	getAllUser,
	getUserById,
	createUser,
	updateUser,
	deleteUser
}
