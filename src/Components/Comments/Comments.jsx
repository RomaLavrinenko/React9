import { useEffect } from 'react';
import Comment from './Comment';
import {GetComment} from '../service/ApiService';
import { useDispatch, useSelector } from 'react-redux';



const Comments = () =>{
    
      const comments = useSelector((store) => store.commentsRedecers.comments);
      const dispatch = useDispatch()
      useEffect(() =>{
        GetComment.handleComment(dispatch);
        },[])

    return(   
        <div style={{display:"flex", flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {comments?.map((comment) => <Comment key={comment.id} comment={comment}/>)}
        </div>  
    );
}

export default Comments;