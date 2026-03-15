import {StreamChat} from "stream-chat"
import {ENV} from "./env.js"

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if(!apiKey || !apiSecret)
{
    console.error(" STREAM_API_SECRET or STREAM_API_KEY is missing ");
}

export const chatClient = StreamChat.getInstance(apiKey,apiSecret);

export const upsertStreamUser = async(userData)=>{
    try{
        await chatClient.upsertUser(userData)
        console.log("Stream user upserted succesfully",userData)
    }
    catch(err)
    {
        console.error("Error upserting stream User: ",err);
    }
};

export const deleteStreamUser = async(userId)=>{
    try{
        await chatClient.deleteUser(userId)
        console.log("Stream user deleted succesfully",userId)
    }
    catch(err)
    {
        console.error("Error deleting stream User: ",err);
    }
}