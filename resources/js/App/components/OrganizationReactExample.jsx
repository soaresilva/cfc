import React from "react";
import ReactDOM from "react-dom";

export default class OrganizationReactExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ""
        };
    }

    componentDidMount() {
        let token = document
            .querySelector("meta[name='csrf-token']")
            .getAttribute("content");

        $.ajax({
            url: "/orgIndexAjax",
            type: "POST",
            data: { _token: token, message: "bravo" },
            dataType: "JSON",

            success: response => {
                console.log("success");
                console.log(response);
                this.setState({
                    user: response
                });
            },
            error: response => {
                console.log("error");
                console.log(response);
            }
        });
    }

    render() {
        const user = this.state.user ? this.state.user : "";

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                Data from
                                <strong>Laravel to React component</strong> with
                                Ajax
                            </div>
                            <div className="card-body">
                                Currently logged user: {user.name} #{user.id}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
