import React, {useState, useEffect, useContext} from 'react';
import '../Styles/AddSignal.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signalActions } from '../Redux/actions/signalAction';
import AsyncSelect from 'react-select/async';
import { TransactionContext } from '../context/TransactionContext';

export default function AddSignal() {
    const [entryPrice, setEntryPrice] = useState(0);
    const [stopPrice, setStopPrice] = useState(0);
    const [target1Price, setTarget1Price] = useState(0);
    const [target2Price, setTarget2Price] = useState(0);
    const [target3Price, setTarget3Price] = useState(0);
    const [signal,setSignal] = useState('');
    const [coin,selectCoin] = useState('');
    const [paid,setPaid] = useState(false);
    const [description,setDescription] = useState('');
    const {currentAccount} = useContext(TransactionContext);

    // let calculatedProfit = (e,i) => {
    //     console.log(e,i)
    //     let profit = (e - entryPrice) / entryPrice * 100;
    //     let newArr = [...target];
    //     newArr[i].profit = profit;
    //     setTarget(newArr);
                   
    // } 

    const dispatch = useDispatch();
    const {searchSignal, isLoading, error} = useSelector(state =>
        ({
            searchSignal: state.signalReducer.searchSignal,
            isLoading: state.signalReducer.isLoading,
            error: state.signalReducer.error
        }));
    const {profile, isLoadingProfile, errorProfile} = useSelector(state =>
        ({
            profile: state.profileReducer.profile,
            isLoadingProfile: state.profileReducer.isLoading,
            errorProfile: state.profileReducer.error
        }));

    async function searchCoin(){
        // return await fetch(`https://api.coingecko.com/api/v3/search?query=${signal}`)
        // .then(res => console.log(res.json()))
        
        dispatch(signalActions.searchSignals(signal));
    }
    
    useEffect(() => {
        loadOptions();
    }, [dispatch,signal]);
        
    const loadOptions = (inputValue, callback) => {
        // perform a request
        dispatch(signalActions.searchSignals(inputValue));
      }

    function postSignal() {
        dispatch(signalActions.postSignals(newSignal));
    }

      const newSignal = {
          name: coin,
          traderId: profile[0].traderid,
          entryprice: entryPrice,
          stopPrice: stopPrice,
          target1: target1Price,
          target2: target2Price,
          target3: target3Price,
          paid: paid,
          description: description
      }

    return (
        
        <div>
            {console.log(coin,profile,'searchSignal')}
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
                            {/* <div class="col"> 
                                <div class="form-group"> <input type="text" id="signal" className="form-control pl-3" placeholder='Search Signal' required onChange={e=> setSignal(e.target.value)}/></div>
                            </div> */}
                            <div className='col'>
                            <AsyncSelect
                                loadOptions={loadOptions}
                                />
                                <select name="cars" id="cars"  onChange={e => selectCoin(e.target.value)}>
                                {searchSignal && searchSignal.coins.map(coin => <option value={coin.id}>{coin.name}</option>)}
                                </select>
                            </div>
                            <div className='col'>
                            <button class="btn btn-outline-info btn-block btn-md" onClick={searchCoin}><span class="fa fa-facebook-square" ></span> Search  </button>
                            </div>

                            <div class="col"> 
                                <div class="form-group"> <input type="text" id="entryPrice" className="form-control pl-3" placeholder='Target 1' onChange={e => setTarget1Price(e.target.value)} required/></div>
                            </div>
                            <div className='col'>
                            <button class="btn btn-outline-success btn-block btn-md"><span class="fa fa-facebook-square"></span> Set Target 1</button>
                            </div>
                        </div>
                        <div class="row my-3">
                            <div class="col"> 
                                <div class="form-group"> <input type="text" id="entryPrice" className="form-control pl-3" placeholder='Entry Price'  onChange={e => setEntryPrice(e.target.value)} required/></div>
                            </div>
                            <div className='col'>
                            <button class="btn btn-outline-success btn-block btn-md"><span class="fa fa-facebook-square"></span> Set Entry Price</button>
                            </div>

                            <div class="col"> 
                                <div class="form-group"> <input type="text" id="entryPrice" className="form-control pl-3" placeholder='Target 2' onChange={e => setTarget2Price(e.target.value)} required/></div>
                            </div>
                            <div className='col'>
                            <button class="btn btn-outline-success btn-block btn-md"><span class="fa fa-facebook-square"></span> Set Target 2</button>
                            </div>
                        </div>
                        <div class="row my-3">
                            <div class="col"> 
                                <div class="form-group"> <input type="text" id="entryPrice" className="form-control pl-3" placeholder='Stop Price' onChange={e => setStopPrice(e.target.value)} required/></div>
                            </div>
                            <div className='col'>
                            <button class="btn btn-outline-danger btn-block btn-md"><span class="fa fa-facebook-square"></span> Set Stop Price</button>
                            </div>

                            <div class="col"> 
                                <div class="form-group"> <input type="text" id="entryPrice" className="form-control pl-3" placeholder='Target 3' onChange={e => setTarget3Price(e.target.value)}  required/></div>
                            </div>
                            <div className='col'>
                            <button class="btn btn-outline-success btn-block btn-md"><span class="fa fa-facebook-square"></span> Set Target 3</button>
                            </div>
                        </div>

                        <div class="row my-3">
                            <div class="col"> 
                                <div class="form-group"> <input type="text" id="entryPrice" className="form-control pl-3" placeholder='Description' onChange={e => setDescription(e.target.value)}  required/></div>
                            </div>
                            <div className='col'>
                            <button class="btn btn-outline-success btn-block btn-md"><span class="fa fa-facebook-square"></span> Set Description</button>
                            </div>

                            <div class="col">
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="false" onClick={e => setPaid(false)}/>
                            <label class="form-check-label" for="inlineRadio1">Free Signal</label>
                            </div>
                            </div>
                            <div class="col">
                            <div class="form-check form-check-inline">
                                
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="true" onClick={e => setPaid(true)}/>
                            <label class="form-check-label" for="inlineRadio2">Paid Signal</label>
                            </div>
                        </div>
                        </div>

                                    <div class="bg-light p-2 border-top">                                       
                                        <button class="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button" onClick={postSignal}>Post Signal</button>
                                    </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
