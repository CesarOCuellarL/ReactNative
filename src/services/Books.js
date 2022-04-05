import { API, graphqlOperation } from "aws-amplify";
import { getBook, listBooks } from "../graphql/queries";
import { createBook, updateBook, deleteBook } from "../graphql/mutations";
import { onCreateBook } from "../graphql/subscriptions";

const list = async() => {
    try{
        const Books = await API.graphql(graphqlOperation(listBooks));
        return Books.data.listBooks.items;
    }catch(error){
        console.log({ error });
    }
}

const create = async(Book)=>{
    try {
        const newBook = await API.graphql(graphqlOperation(createBook,{input: Book}));
        return newBook;
    } catch (error) {
        console.log({error})
    }
}

const onCreate = async(subscriptionFunction) => {
    const subscription = API.graphql(graphqlOperation(onCreateBook)).subscribe({
        next:(BookData) => {
            subscriptionFunction();
        },
    });
    return subscription;
}



export {list,create,onCreate};