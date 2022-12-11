import {addDoc, getDocs,deleteDoc, collection,query,where,doc} from 'firebase/firestore';
import {auth} from "../../config/firebase";
import { db } from "../../config/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom"; 
import {Post as IPost} from "./main"
import { useEffect, useState } from 'react';

interface Props {
    post: IPost;
}

interface Like {
    likeId: string;
    userId: string;
}

export const Post = (props:Props) =>{
    const {post} = props;
    const likesRef = collection(db,"likes");
    const [user] = useAuthState(auth);

    const [likes,SetLikes] = useState<Like[] | null>(null);

    const navigate = useNavigate();

    const likesDoc = query(likesRef,where("postId","==",post.id));

    const hasUserLiked = likes?.find((like)=> like.userId === user?.uid)

    const getLikes = async () =>{
       const data = await getDocs(likesDoc)
       SetLikes(data.docs.map((doc)=>({userId:doc.data().userId,likeId:doc.id})));
    }

    useEffect(()=>{
        getLikes();
    },[])

    const addLike = async () =>{
        try {
            const newDoc = await addDoc(likesRef,{
                postId: post?.id,
                userId: user?.uid
            })
            if (user) {
            SetLikes((prev) =>
            prev? [...prev, {userId:user.uid,likeId:newDoc.id}
            ]:[{userId:user.uid,likeId:newDoc.id}]);
        }
        }
        catch (err) {
            console.log(err);
        }
    };

    const removeLike = async () =>{
        try {
            const likeToDeleteQuery = query(
                likesRef,
                where("postId","==",post.id),
                where("userId","==",user?.uid)
            )

            const likeToDeleteData = await getDocs(likeToDeleteQuery);
            const likeId = likeToDeleteData.docs[0].id
            const likeToDelete = doc(db, "likes",likeId);
            await deleteDoc(likeToDelete);
            if (user) {
            SetLikes((prev) => prev && prev.filter((like)=> like.likeId !==likeId))
        }
        }
        catch (err) {
            console.log(err);
        }
    }

    


    return (<div>
            <div className="title"><h1>{post.title}</h1></div>
            <div className="body"><p>{post.description}</p></div>
            <div className="fotter"><p>@{post.username}</p></div>
            <button onClick={hasUserLiked ? removeLike: addLike}>
                {" "}
                {hasUserLiked? <>&#128078;</> : <>&#128077;</> }{" "}
                 </button>
            {likes && <p>Likes: {likes?.length}</p>}
    </div>)
}