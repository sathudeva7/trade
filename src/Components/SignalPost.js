import React, {useEffect, useContext} from 'react'
import TradeValue from './TradeValue'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { commentActions } from '../Redux/actions/commentActions';
import { TransactionContext } from '../context/TransactionContext';
import Modal from '../Components/modal/Modal';
import ModalBody from '../Components/modal/ModalBody';

export default function SignalPost({signal,key}) {
    const {connectWallet} = useContext(TransactionContext);

  //  console.log(connectWallet,'dfsdfffffffffffff')
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

                                    <Modal modalTitle="Pricing" modalId="exampleModal2" modalSize="modal-dialog modal-xl">
                                        <ModalBody>
                                            <div class="form-group">
                                            <div class="container">
                                                <div class="row">
                                                
                                                <div class="col-lg-4">
                                                    <div class="card mb-5 mb-lg-0">
                                                    <div class="card-body">
                                                        <h5 class="card-title text-muted text-uppercase text-center">Basic</h5>
                                                        <h6 class="card-price text-center"><span class="period">FREE</span></h6>
                                                        <hr/>
                                                        <ul class="fa-ul">
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Single User</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                                                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
                                                            Private Projects</li>
                                                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
                                                            Phone Support</li>
                                                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain
                                                        </li>
                                                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                                                            Reports</li>
                                                        </ul>
                                                        <div class="d-grid">
                                                        <button class="btn btn-primary text-uppercase">Start</button>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="col-lg-4">
                                                    <div class="card mb-5 mb-lg-0">
                                                    <div class="card-body">
                                                        <h5 class="card-title text-muted text-uppercase text-center">Plus</h5>
                                                        <h6 class="card-price text-center">0.01 ETH<span class="period"> / month</span></h6>
                                                        <hr/>
                                                        <ul class="fa-ul">
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>5 Users</strong></li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>50GB Storage</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Free Subdomain</li>
                                                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                                                            Reports</li>
                                                        </ul>
                                                        <div class="d-grid">
                                                        <button class="btn btn-primary text-uppercase">Pay Now</button>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="col-lg-4">
                                                    <div class="card">
                                                    <div class="card-body">
                                                        <h5 class="card-title text-muted text-uppercase text-center">Pro</h5>
                                                        <h6 class="card-price text-center">0.1 ETH<span class="period"> / year</span></h6>
                                                        <hr/>
                                                        <ul class="fa-ul">
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited Users</strong>
                                                        </li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>150GB Storage</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited</strong> Free
                                                            Subdomains</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Monthly Status Reports</li>
                                                        </ul>
                                                        <div class="d-grid">
                                                        <button class="btn btn-primary text-uppercase">Pay Now</button>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </ModalBody>
                                    </Modal>
                                    

                                    {signal.paid === false ? <div>
                                        
                                        <div class="feed-image p-2 px-3">
                                            {signal.details && <TradeValue coin={signal.details} />}
                                        
                                        </div>
                                        <div class="d-flex justify-content-end socials"><i class="fa fa-thumbs-up"></i><i class="fa fa-comments-o"></i><i class="fa fa-share"></i></div>
                                        <div class="p-2 px-3"><span>{signal.description}</span></div>
                                        
                                        <div class="d-flex justify-content-end socials"><i class="fa fa-thumbs-up"></i><i class="fa fa-comments-o"></i><i class="fa fa-share"></i></div>
                                            <div className="p-2">
                                                <button class="btn btn-info btn-block btn-md">  <span class="fa fa-facebook-square"></span>Entry Price {signal.entryprice} </button> 
                                               { signal.target1achieved ? <button class="btn btn-success btn-block btn-md">  <span class="fa fa-facebook-square"></span> Target_1 {signal.target1}  </button> : <button class="btn btn-outline-info btn-block btn-md"> <span class="fa fa-facebook-square"></span> Target_1 {signal.target1}  </button>}
                                               { signal.target2achieved ?<button class="btn btn-success btn-block btn-md">  <span class="fa fa-facebook-square"></span> Target_2 {signal.target2}  </button> : <button class="btn btn-outline-info btn-block btn-md"> <span class="fa fa-facebook-square"></span> Target_2 {signal.target2}  </button>}
                                               { signal.target3achieved ?<button class="btn btn-success btn-block btn-md">  <span class="fa fa-facebook-square"></span> Target_3 {signal.target3}  </button> : <button class="btn btn-outline-info btn-block btn-md"> <span class="fa fa-facebook-square"></span> Target_3 {signal.target3}  </button>}
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
                                    : <div><button id="btnTrigger" data-toggle="modal" data-target="#exampleModal2" onClick={connectWallet}><span class="badge badge-pill badge-dark">Tab to join Premium</span></button></div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                
            </div>
        )
    
}

