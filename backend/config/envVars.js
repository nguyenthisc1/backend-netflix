import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file in development
if (process.env.NODE_ENV !== 'production') {
	dotenv.config({ path: path.join(__dirname, '../../.env') });
}

// Validate required environment variables
const requiredEnvVars = ['MONGO_URI', 'JWT_SECRET', 'TMDB_API_KEY'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
	console.error('Missing required environment variables:', missingEnvVars.join(', '));
	if (process.env.NODE_ENV === 'production') {
		throw new Error('Required environment variables are missing');
	}
}

export const ENV_VARS = {
	MONGO_URI: process.env.MONGO_URI,
	PORT: process.env.PORT || 5000,
	JWT_SECRET: process.env.JWT_SECRET,
	NODE_ENV: process.env.NODE_ENV || 'development',
	TMDB_API_KEY: process.env.TMDB_API_KEY,
};
