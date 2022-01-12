import React, { Component } from 'react'

export default class Table extends Component {
    render() {
        return (
            <div>
                <table class="table table-bordered" style={{marginLeft: '110px' , width: '80rem' , marginTop: '20px'}}>
                    <thead>
                        <tr>
                            <th colspan="6" scope="colgroup">Top Traders</th>
                        </tr>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Sucess Ratio(1 Day)</th>
                            <th scope="col">Sucess Ratio(1 Week)</th>
                            <th scope="col">Sucess Ratio(1 Month)</th>
                            <th scope="col">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                            <td>Mark</td>
                            <td><span href="#" class="badge badge-info">30.5%</span></td>
                            <td><span href="#" class="badge badge-info">30.5%</span></td>
                            <td><span href="#" class="badge badge-success">30.5%</span></td>
                            <td><button type="button" class="btn btn-success">View</button></td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                            <td>Jacob</td>
                            <td><span href="#" class="badge badge-info">30.5%</span></td>
                            <td><span href="#" class="badge badge-warning">30.5%</span></td>
                            <td><span href="#" class="badge badge-success">30.5%</span></td>
                            <td><button type="button" class="btn btn-success">View</button></td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                            <td>Larry the Bird</td>
                            <td><span href="#" class="badge badge-danger">30.5%</span></td>
                            <td><span href="#" class="badge badge-success">30.5%</span></td>
                            <td><span href="#" class="badge badge-success">30.5%</span></td>
                            <td><button type="button" class="btn btn-success">View</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
