
import { MongoClient } from 'mongodb';


const uri = "";

async function client() {
    return await new MongoClient(uri);
}



export default {client};
