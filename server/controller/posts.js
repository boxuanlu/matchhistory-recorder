import PostMessage from '../models/postMessage.js';



export const getPosts = async (req, res) => {
    
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        res.status(200).jason(postMessages);
    }catch (error) {
        res.stauts(404).json({message: error.message});
    }
}
export const createPost = (req, res) => {
    res.send('Post Creation');
}