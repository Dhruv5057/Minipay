import env from "./src/config/env.js";
import app from "./src/app.js";
import connectToDB from "./src/config/db.js";

const startServer = async () => {
    try {
        await connectToDB();

        app.listen(env.port, () => {
            console.log(`Server running on port ${env.port}`);
        });
    } catch (error) {
        console.error("Server startup failed:", error.message);
        process.exit(1);
    }
};

startServer();