import React, { Component } from 'react'

export default class Header extends Component {
    render() {
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
                        </ul>
                        <span class="navbar-text">
                        <a href="#" class="badge badge-dark">Connect Wallet</a>
                        </span>
                    </div>
                </nav>

            </div>
        )
    }
}
