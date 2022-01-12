import React, {useState, useEffect} from 'react';
import '../Styles/AddSignal.css';

export default function AddSignal() {
    const [target, setTarget] = useState([{row:1, profit:''}]);
    const [entryPrice, setEntryPrice] = useState(0);
    const [signal,setSignal] = useState('');

    const openTarget = () => {
        setTarget([...target, {row:target.length+1, profit:''}]);
    }

    const closeTarget = () => {
        setTarget(target.slice(0, target.length-1));
    }

    let calculatedProfit = (e,i) => {
        console.log(e,i)
        let profit = (e - entryPrice) / entryPrice * 100;
        let newArr = [...target];
        newArr[i].profit = profit;
        setTarget(newArr);
                   
    } 
    
    

    return (
        <div>
            <div class="container d-flex justify-content-center"> <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#form"> Post New Signal</button>
            </div>
            <div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div class="modal-title text-md">Post Signal</div> <button class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="text-right cross"> <i class="fa fa-times"></i> </div>
                        <div class="card-body text-center"> 
                        <div class="row my-3">
                            <div class="col"> 
                                <div class="form-group"> <input type="text" id="signal" className="form-control pl-3" placeholder='Search Signal' required onChange={e=> setSignal(e.target.value)}/></div>
                            </div>
                            <div className='col'>
                            <button class="btn btn-outline-info btn-block btn-md"><span class="fa fa-facebook-square" ></span> Search  </button>
                            </div>
                        </div>
                        <div class="row my-3">
                            <div class="col"> 
                                <div class="form-group"> <input type="text" id="entryPrice" className="form-control pl-3" placeholder='Entry Price'  onChange={e => setEntryPrice(e.target.value)} required/></div>
                            </div>
                            <div className='col'>
                            <button class="btn btn-outline-success btn-block btn-md"><span class="fa fa-facebook-square"></span> Set Entry Price</button>
                            </div>
                        </div>
                        <div class="row my-3">
                            <div class="col"> 
                                <div class="form-group"> <input type="text" id="entryPrice" className="form-control pl-3" placeholder='Stop Price'  required/></div>
                            </div>
                            <div className='col'>
                            <button class="btn btn-outline-danger btn-block btn-md"><span class="fa fa-facebook-square"></span> Set Stop Price</button>
                            </div>
                        </div>
                        {console.log(entryPrice, target)}
                        <div class="row my-3">
                            <div class="col">
                                <button class="btn btn-primary" type="button" aria-expanded="false" aria-controls="collapseExample" onClick={openTarget}>
                                    Add Target
                                </button>
                            </div>
                            <div class="col">
                                <button class="btn btn-danger" type="button" aria-expanded="false" aria-controls="collapseExample" onClick={closeTarget}>
                                    Delete Target
                                </button>
                            </div>
                            </div>
                            
                            {target.map((target, index) => {
                                return (
                                    <div className='row'>
                                        <div class="col">
                                        <div class="form-group"> <input type="text" id={'targ' + index} className="form-control" placeholder={'Target '+ (index+1)} required onChange={e => calculatedProfit(e.target.value,index)}/></div>
                                        </div>
                                        <div class="col">
                                        <button class="btn btn-info" type="button" aria-expanded="false" aria-controls="collapseExample" >
                                            {target.profit} %
                                        </button>
                                        </div>
                                    </div>)
                            })}

                                    <div class="bg-light p-2 border-top">                                       
                                        <button class="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Post Signal</button>
                                    </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
