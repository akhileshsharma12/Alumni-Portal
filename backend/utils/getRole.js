import db from "../config/db.config.js";

export const getRole = async (user_id) => {
    const db_res = await db.query("SELECT role from users where id = $1", [user_id]);
    return db_res.rows[0].role;
}

