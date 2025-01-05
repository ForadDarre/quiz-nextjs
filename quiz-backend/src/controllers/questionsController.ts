import { Request, Response } from "express";
import pool from "../db/db";

export const getQuestions = async (req: Request, res: Response) => {
    try {
        const result = await pool.query("SELECT * FROM questions");
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
};
