import React from 'react'

export default function CardSlider({news,key}) {

    function openTo(link) {
        //open new page
       window.open(link, '_blank');
    }
    
        return (
            <div>
                            <div id={key} class="container">
                                <div class="row" style={{marginLeft: '14px'}}>
                                    <div class="card" style={{width : '16rem', height: '12.5rem', marginTop: '20px', marginRight: '10px', marginLeft:'10px'}}>
                                        <div class="card-body">
                                      
                                         <p class="card-text">{news.title}.</p> 
                                        </div>
                                        <div class="card-footer">
                                             <button class="btn btn-warning btn-block btn-md" onClick={() => openTo(news.link)}><span class="fa fa-facebook-square" ></span> Open </button>
                                        </div>
                                    </div>

                                </div>
                            </div>

            </div>
        )
    
}
