import mongoose from 'mongoose';
import { uri } from "./config.js";

export async function DBConnection() {
    try {
        const db = await mongoose.connect(uri);
        console.log('Conexión establecida ' + db.connection.name);
    } catch (error) {
            console.log(error);
    }

}




