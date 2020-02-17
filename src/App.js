import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
    state = {
        username: '',
        instagramPass: '',
        twitterPass: '',
        telegramPass: '',
        users: [
            {
                username: "hassan",
                instagramPass: "123",
                twitterPass: "456",
                telegramPass: "789",
            },
            {
                username: "abbas",
                instagramPass: "123",
                twitterPass: "456",
                telegramPass: "789",
            }
        ]
    };

    addUser = () => {
        this.setState({
            users: [...this.state.users, {
                username: this.state.username,
                instagramPass: this.state.instagramPass,
                twitterPass: this.state.twitterPass,
                telegramPass: this.state.telegramPass
            }]
        })
    };

    showUsers = () => {
        return this.state.users.map((user, index) => {
            return (
                <tr key={index}>
                    <td>{user.username}</td>
                    <td>{user.instagramPass}</td>
                    <td>{user.twitterPass}</td>
                    <td>{user.telegramPass}</td>
                </tr>
            )
        })
    };

    fillOnKeyUp = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    ClearAll = (e) => {
    };

    render() {
        return (
            <div className="container mt-5">
                <div className="row">

                    <div className="col-6">

                        <div className="form-group">
                            <label>Username</label>
                            <input name='username' onKeyUp={this.fillOnKeyUp} type="text" className="form-control"/>
                        </div>

                        <div className="row">

                            <div className="col">
                                <div className="form-group">
                                    <label>Instagram Password</label>
                                    <input name='instagramPass' onKeyUp={this.fillOnKeyUp} type="text"
                                           className="form-control"/>
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-group">
                                    <label>Twitter Password</label>
                                    <input name='twitterPass' onKeyUp={this.fillOnKeyUp} type="text"
                                           className="form-control"/>
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-group">
                                    <label>Telegram Password</label>
                                    <input name='telegramPass' onKeyUp={this.fillOnKeyUp} type="text"
                                           className="form-control"/>
                                </div>
                            </div>

                        </div>
                        <span className="class"><button onClick={this.addUser} className="btn btn-primary">Add User</button></span>
                    </div>

                    <div className="col-6">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>username</th>
                                <th>Instagram Password</th>
                                <th>Twitter Password</th>
                                <th>Telegram Password</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.showUsers()}
                            </tbody>
                        </table>
                    </div>

                </div>


            </div>
        );
    }
}

export default App;