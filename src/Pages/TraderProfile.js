import React, { Component } from 'react'
import AddSignal from '../Components/AddSignal'
import { connect } from "react-redux";
import { profileActions } from '../Redux/actions/profileAction';
import { signalActions } from '../Redux/actions/signalAction';
import { cryptoActions } from '../Redux/actions/cryptoActions';
import SignalPost from '../Components/SignalPost';
import { commentActions } from '../Redux/actions/commentActions';
import { TransactionContext } from '../context/TransactionContext'
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('wss://stream.binance.com:9443/ws/bsnbusdt@trade');

class TraderProfile extends Component {
    static contextType = TransactionContext
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            loadingProfile: false,
            value:''
        }
    }

    async componentDidMount() {
 
    }

    componentWillMount() {
        client.onopen = () => {
          console.log('WebSocket Client Connected');
        };
        client.onmessage = (message) => {
            let stockObj = JSON.parse(message.data);
          this.setState({value:stockObj.p})
        };
      }

    async componentDidUpdate() {
        if (this.props.data_loading == false && this.state.loading == true) {
            this.setState({ loading: false })
        }

        if(this.context.currentAccount && this.state.loadingProfile == false) {
            await this.props.getProfile(this.context.currentAccount);

            if (this.props.profile) {
                await this.props.getSignals(this.props.profile[0].traderid)
            }
    
            if (this.props.signals.length > 0) {
                this.props.signals.map(async (signal,key) => {
                    console.log('signal', signal,key)
                     await this.props.getComments(signal.id);
                     signal.comments = this.props.comments[key];    
                     
                     await this.props.getCryptoData(signal.name);
                     signal.details = this.props.data[key];
                     
                     this.setState({ loading: true })
                })
            }
            this.setState({ loadingProfile: true })
        }
    }

    async followProfile() {
        let myProfileId = 2 
        //await this.props.followProfile(myProfileId, this.props.profile.id);
    }

    render() {
        return (
            <div>
               {this.props.profile ?
                <div class="jumbotron">
                    <div class="row">
                        <div class="col">
                            <div class="card-inverse" style={{backgroundColor: 'rgb(233 236 239)'}}>
                                <div class="card-block">
                                    <div class="row">
                                            {/* <div class="col-md-8 col-sm-8">
                                                <h2 class="card-title">Name: Stffanie Osterich</h2>
                                                <p class="card-text"><strong>Profile: </strong> Web Developer </p>
                                                <p class="card-text"><strong>Skills: </strong> Theme, plugin and website development </p>
                                                <p><strong>Platform: </strong>
                                                    <span class="badge bg-primary">WordPress</span> 
                                                    <span class="badge bg-info">Weebly</span>
                                                    <span class="badge bg-warning">Bootstrap</span>
                                                    <span class="badge bg-success">Wix</span>
                                                </p>
                                            </div> */}
                                            <div class="col-md-3 col-sm-3 text-center">
                                                {console.log('profile',this.props.profile[0])}
                                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{borderRadius: '50%' , width: '120px'}}></img>
                                                <h4 class="card-text">{this.props.profile ?  this.props.profile[0].name:''}</h4>
                                                <div class="card-text">{this.props.profile ?  this.props.profile[0].description:''} </div>
                                              
                                                <button class="btn btn-primary btn-block btn-md" onClick={this.followProfile()}><span class="fa fa-facebook-square"></span> Follow</button>
                                         
                                            </div>         
                                            <div class="col-md-2 col-sm-2 text-center badge bg-light" style={{margin:'12px', border:'solid 0.5px', borderColor:'blue'}}>
                                                <strong>Sucess Ratio </strong>                    
                                                <p><small>(1 Day)</small></p>
                                                <button class="btn btn-outline-primary btn-block btn-md"><span class="fa fa-facebook-square"></span> Target 1  </button>
                                                <button class="btn btn-outline-primary btn-block btn-md"><span class="fa fa-facebook-square"></span> Target 2  </button>
                                                <button class="btn btn-outline-primary btn-block btn-md"><span class="fa fa-facebook-square"></span> Target 3  </button>
                                            </div>
                                            <div class="col-md-2 col-sm-2 text-center badge bg-light" style={{margin:'12px', border:'solid 0.5px', borderColor:'green'}}>
                                                <strong>Sucess Ratio </strong>                    
                                                <p><small>(1 Week)</small></p>
                                                <button class="btn btn-outline-success btn-block btn-md"><span class="fa fa-facebook-square"></span> Target 1  </button>
                                                <button class="btn btn-outline-success btn-block btn-md"><span class="fa fa-facebook-square"></span> Target 2  </button>
                                                <button class="btn btn-outline-success btn-block btn-md"><span class="fa fa-facebook-square"></span> Target 3  </button>
                                            </div>
                                            <div class="col-md-2 col-sm-2 text-center badge bg-light" style={{margin:'12px', border:'solid 0.5px', borderColor:'skyblue'}}>
                                                <strong>Sucess Ratio </strong>                    
                                                <p><small>(1 Month)</small></p>
                                                <button class="btn btn-outline-info btn-block btn-md"><span class="fa fa-facebook-square"></span> Target 1  </button>
                                                <button class="btn btn-outline-info btn-block btn-md"><span class="fa fa-facebook-square"></span> Target 2  </button>
                                                <button class="btn btn-outline-info btn-block btn-md"><span class="fa fa-facebook-square"></span> Target 3  </button>
                                            </div>
                                            <AddSignal />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        {this.state.value}
                    </div>  :<div></div>}
                    {this.props.signals.length > 0 && this.props.signals[this.props.signals.length-1].details && this.props.signals.map((signal,key) => {
                      return  <SignalPost signal={signal} key={key} />
                    })}
                </div>
        )
    }
}

function mapStateToProps(state){
    return {
        profile:state.profileReducer.profile,
        loading:state.profileReducer.loading,

        signals: state.signalReducer.signals,
        signal_loading: state.signalReducer.isLoading,
        data: state.cryptoReducer.data,
        data_loading: state.cryptoReducer.isLoading,

        comments: state.commentsReducer.comments,
    }
}

const mapActionsToProps = {
    getProfile: profileActions.getProfile,
    getSignals: signalActions.getSignals,
    getCryptoData: cryptoActions.getCryptoData,
    getComments: commentActions.getComments
}

export default connect(mapStateToProps, mapActionsToProps)(TraderProfile);
