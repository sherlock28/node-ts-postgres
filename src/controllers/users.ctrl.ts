import { Request, Response } from 'express';

const getAllUser = (_req: Request, res: Response) => {
    return res.json({ msg: "all users" });
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