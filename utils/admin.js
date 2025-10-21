import bcrypt from "bcrypt";
import { User } from "../models/index.js";

export async function createDefaultAdmin() {
    const adminEmail = "admin@admin.com";

    const existingAdmin = await User.findOne({ where: { email: adminEmail } });
    if (!existingAdmin) {
        const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

        await User.create({
        name: "Admin",
        email: adminEmail,
        password: hashedPassword,
        isAdmin: true,
        });
    }
}


// Call it after syncing database
