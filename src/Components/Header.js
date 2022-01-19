import React, {useContext} from 'react'
import { TransactionContext } from '../context/TransactionContext'
import Modal from '../Components/modal/Modal';
import ModalBody from '../Components/modal/ModalBody';

export default function Header() {
    const { connectWallet, currentAccount } = useContext(TransactionContext)
    
        return (
            <div>

                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a class="navbar-brand" href="#">Trades</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/trader">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Trade Feed</a>
                        </li>
                        <li class="nav-item">    
                            <button class="btn btn-primary btn-s" id="btnTrigger" data-toggle="modal" data-target="#exampleModal">Become Trader</button>
                        </li>
                        </ul>
                        <span class="navbar-text">
                        <button class="badge badge-dark" onClick={connectWallet}>{!currentAccount ? 'Connect Wallet' : currentAccount}</button>
                        </span>
                    </div>
                </nav>
                {!currentAccount ? 'Connect Wallet' :
                <Modal modalTitle="New Trader Registration" modalId="exampleModal" modalSize="modal-dialog modal-l">
                    <ModalBody>
                     
                    <div className='form-row'>
                            <div class="col-3 form-group">
                            <label>User Name</label>   
                            </div>
                            <div class="col ">
                                <input type="text" class="form-control" placeholder=" "/>
                            </div>
                        </div>
                    
                
                        <div className='form-row'>
                            <div class="col-3">
                            <label>Email address</label>   
                            </div>
                            <div class="col ">
                            <div className='form-row'>
                            <div class="input-group mb-3">
                            <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button">Send Code</button>
                            </div>
                            </div>
                        </div>
                            </div>
                        </div>
                   
                    
                    <div className='form-row'>
                            <div class="col-3">
                            <label>Type Code</label>   
                            </div>
                            <div class="col ">
                                <input type="text" class="form-control" placeholder=" "/>
                            </div>
                        </div>

                        <div className='form-row'>
                            <div class="col-3">
                            <label></label>   
                            </div>
                            <div class="col-6 ">
                            <button class="btn btn-outline-secondary" type="button">Submit</button>
                            </div>
                        </div>
                    
    
                    </ModalBody>
                </Modal>}
            </div>
        )
    
}
