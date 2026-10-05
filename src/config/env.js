import dotenv from "dotenv";

dotenv.config();

const env = {
    port: process.env.PORT || 3000,
    mongoUri: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    redisUrl: process.env.REDIS_URL || "redis://localhost:6379",
};

export default env;