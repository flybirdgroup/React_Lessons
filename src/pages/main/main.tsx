import {getDocs, collection} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../config/firebase';
import { Post } from './post';

export interface Post {
    id: string;
    userId: string;
    title: string;
    description: string;
    username: string;
}

export const Main = () => {
    const [postsList,setPostList] = useState<Post[] | null>(null);
    const postsRef = collection(db, "posts");
    const getPost = async () =>{
        const data = await getDocs(postsRef);
        setPostList(
            data.docs.map((doc)=>({...doc.data(),id:doc.id})) as Post[]
        );
    };
    useEffect(()=>{
        getPost(); 
    },[]);

    return (<div>
        {postsList?.map((post)=>(
            <Post post={post} />
        )
        )}

    </div>)
}