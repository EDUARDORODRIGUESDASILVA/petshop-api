import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGO_DB_CONNECTION_STRING;
const client = new MongoClient(uri);

async function listarPosts() {
  try {
    await client.connect();

    const database = client.db("blog");
    const posts = await database.collection("posts").find({}).toArray(); 
    console.log(posts);
    return posts;

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

async function createPost(post) {
  try {
    await client.connect();
  

    const database = client.db("blog");
    const inserted = await database.collection("posts").insertOne(post);
    const id =inserted.insertedId;
    const posts = await database.collection("posts").findOne(inserted.insertedId);   
    return  posts ;
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

}
async function listarPostPorId(postId) {
  try {
    await client.connect();   
    const database = client.db("blog");
    const id = {'_id': ObjectId(postId)};
    const post = await database.collection("posts").findOne(id);
    return  post ;
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

}

async function createComentario(postId, comentario) {
  try {
    await client.connect();

   
    const database = client.db("blog");
    const id = {'_id': ObjectId(postId)};
    const post = await database.collection("posts").findOne(id);
    if (!post.comentarios) {
      post.comentarios = [];
    }
    post.comentarios.push(comentario);
    const posted = await database.collection("posts").updateOne(id,{
      $set: {"comentarios": post.comentarios}
    } );   
    return  post ;
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

}

export default { listarPosts, createPost, listarPostPorId, createComentario };
