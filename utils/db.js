import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: process.env.DB_FILE_NAME // database file
});

/**
 * Connect to the database
 */
export async function initDB() {
  try {
    await sequelize.sync(); // test connection
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
  }
}

export default sequelize;
