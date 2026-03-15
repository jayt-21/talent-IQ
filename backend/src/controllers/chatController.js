import { chatClient } from "../lib/stream.js"

export async function getStreamToken(req,res){
try{
    //use clerk id not mongo db id as it should match id in stream dashboard
    const token = chatClient.createToken(req.user.clerkId);
    res.status(200).json(
        {
            token,
            userId:req.user.clerkId,
            userName:req.user.name,
            userImage:req.user.image
        }
    )
}
catch(err)
{
res.status(500).json({message: "Internal server Error"});
}
}