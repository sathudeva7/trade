import React, { Component } from 'react'
import CardSlider from '../Components/CardSlider'
import Jumbotron from '../Components/Jumbotron'
import Table from '../Components/Table'
import { connect } from "react-redux";
import { cryptoNewsActions } from '../Redux/actions/cryptoNewsActions';
import { cryptoEventActions } from '../Redux/actions/cryptoEventActions';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    async componentDidMount() {
            await this.props.getCryptoNews();
            await this.props.getCryptoEvents()
    }


    render() {

        return (
            <div>
                 <Jumbotron />
                 <div class="carousel slide" data-ride="carousel">
                    
                    <div class="carousel-inner" role="listbox">
                        <div class="row">
               {this.props.news.length > 0 &&
           
                this.props.news[0].results.map((news,key) => {
                    return (
                        <div className='column'>
                            
                            {key < 5 && <CardSlider news={news} key={key}/>}
                            
                        </div>
                    )
                })
        }
        </div>
        </div>
        </div>
        <Table />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        news: state.cryptoNewsReducer.news,
        events: state.cryptoEventReducer.events
    }
}

const mapActionsToProps = {
   getCryptoNews: cryptoNewsActions.getCryptoNews,
   getCryptoEvents: cryptoEventActions.getCryptoEvents
}

export default connect(mapStateToProps, mapActionsToProps)(Home);
