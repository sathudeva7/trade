import React, {useEffect} from 'react'
import TradeValue from './TradeValue'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { commentActions } from '../Redux/actions/commentActions';

export default function SignalPost({signal,key}) {

    // const dispatch = useDispatch();
    // const {comments, isLoading, error} = useSelector(state =>
    //     ({
    //         comments: state.commentsReducer.comments,
    //         isLoading: state.commentsReducer.isLoading,
    //         error: state.commentsReducer.error
    //     }));

    // useEffect(() => {
        
    // }, [signal]);    

    const changeDate = (date) => {
        let newDate = new Date(date);
        return newDate.toLocaleString();
    }
    
        return (
            
            <div>
                <div class="container mt-4 mb-5">
                    <div class="d-flex justify-content-center row">
                        <div class="col-md-8">
                            <div class="feed p-2">
                                <div class="bg-white border mt-2">
                                    <div>
                                        <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                                            <div class="d-flex flex-row align-items-center feed-text px-2">{signal.details && <img class="rounded-circle" src={signal.details.image.thumb} width="45"/>}
                                                <div class="d-flex flex-column flex-wrap ml-2"><span class="font-weight-bold">{signal.name}</span><span class="text-black-50 time">40 minutes ago</span></div>
                                                {signal.paid ? <span class="badge badge-pill badge-secondary">Premium</span>: <span class="badge badge-pill badge-success">Free</span>}
                                            </div>
                                            <div class="feed-icon px-2"><i class="fa fa-ellipsis-v text-black-50"></i></div>
                                        </div>
                                    </div>
                                    

                                    {signal.paid === false ? <div>
                                        
                                        <div class="feed-image p-2 px-3">
                                            {signal.details && <TradeValue coin={signal.details} />}
                                        
                                        </div>
                                        <div class="d-flex justify-content-end socials"><i class="fa fa-thumbs-up"></i><i class="fa fa-comments-o"></i><i class="fa fa-share"></i></div>
                                        <div class="p-2 px-3"><span>{signal.description}</span></div>
                                        
                                        <div class="d-flex justify-content-end socials"><i class="fa fa-thumbs-up"></i><i class="fa fa-comments-o"></i><i class="fa fa-share"></i></div>
                                            <div className="p-2">
                                                <button class="btn btn-info btn-block btn-md">  <span class="fa fa-facebook-square"></span>Entry Price {signal.entryPrice} </button> 
                                                {
                                                    signal.targets.map((target, index) => {
                                                        return target.acheived == true ? <button class="btn btn-success btn-block btn-md">  <span class="fa fa-facebook-square"></span> Target_{index+1} {target.price}  </button> : <button class="btn btn-outline-info btn-block btn-md"> <span class="fa fa-facebook-square"></span> Target_{index+1} {target.price}  </button>
                                                    })
                                                }
                                            
                                            </div>
                                            <div>
                                                <div class="d-flex flex-row justify-content-between align-items-center p-2 border-top">
                                                <div class="bg-white">
                                                <div class="d-flex flex-row fs-12">
                                                    <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">Like</span></div>
                                                    <div class="like p-2 cursor"><i class="fa fa-commenting-o"></i><span class="ml-1">Comment</span></div>
                                                </div>
                                                </div>
                                                </div>
                                            </div>
                                            {signal.comments && signal.comments.map((comment, index) => {
                                                console.log(signal.comments,)
                                            return (<div class="bg-white p-2 border-top">
                                                <div class="d-flex flex-row align-items-center feed-text px-2"><img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                                                <div class="d-flex flex-column flex-wrap ml-2">
                                                    <span class="font-weight-bold">{comment.user}</span><span class="text-black-50 time" style={{'textAlign':'left'}}>{changeDate(comment.createdAt)}</span></div>
                                                </div>
                                                <div class="mt-2" style={{'textAlign':'left'}}>
                                                    <p class="comment-text">{comment.comment}</p>
                                                </div>
                                            </div>)
                                            })}
                                            <div class="bg-light p-2 border-top">
                                                <div class="d-flex flex-row align-items-start"><img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/><textarea class="form-control ml-1 shadow-none textarea"></textarea></div>
                                                <div class="mt-2 text-right"><button class="btn btn-primary btn-sm shadow-none" type="button">Post comment</button><button class="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button></div>
                                            </div>
                                    </div>
                                    : <div><span class="badge badge-pill badge-dark">Tab to join Premium</span>                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                
            </div>
        )
    
}
