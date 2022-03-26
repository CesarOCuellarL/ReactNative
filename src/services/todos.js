import { API, graphqlOperation } from "aws-amplify";
import { getBlog,getComment,getPost,listBlogs,listPosts,listComments } from "../graphql/queries";
import { createBlog,createComment,createPost,updateBlog,updateComment,updatePost } from "../graphql/mutations";
import {onCreateBlog,onCreateComment,onCreatePost} from "../graphql/subscriptions";

const listBlogs = async() => {
    try{
        const blogs = await API.graphql(graphqlOperation(listBlogs));
        return blogs.data.listBlogs.items;
    }catch(error){

    }
}

const listComments = async() => {
    try{
        const comments = await API.graphql(graphqlOperation(listComments));
        return comments.data.listComments.items;
    }catch(error){

    }
}

const listPosts = async() => {
    try{
        const posts = await API.graphql(graphqlOperation(listPosts));
        return posts.data.listPosts.items;
    }catch(error){
        console.log({error});
    }
}

const createBlog = async(Blog)=>{
    try {
        const newBlog = await API.graphql(graphqlOperation(createBlog,{input: Blog}));
        return newBlog;
    } catch (error) {
        console.log({error})
    }
}

const createComment = async(Comment)=>{
    try {
        const newComment = await API.graphql(graphqlOperation(createComment,{input: Comment}));
        return newComment;
    } catch (error) {
        console.log({error})
    }
}

const createPost = async(Post)=>{
    try {
        const newPost = await API.graphql(graphqlOperation(createPost,{input: Post}));
        return newPost;
    } catch (error) {
        console.log({error})
    }
}

const onCreateBlog = async(subscriptionFunction) => {
    const subscription = API.graphql(graphqlOperation(onCreateBlog)).suscribe({
        next:(todoBlog) => {
            subscriptionFunction();
        },
    });
    return subscription;
}

const onCreateComment = async(subscriptionFunction) => {
    const subscription = API.graphql(graphqlOperation(onCreateComment)).suscribe({
        next:(todoComment) => {
            subscriptionFunction();
        },
    });
    return subscription;
}

const onCreatePost = async(subscriptionFunction) => {
    const subscription = API.graphql(graphqlOperation(onCreatePost)).suscribe({
        next:(todoPost) => {
            subscriptionFunction();
        },
    });
    return subscription;
};

export {listBlogs,listComments,listPosts,createBlog,createComment,createPost,onCreateBlog,onCreateComment,onCreatePost};