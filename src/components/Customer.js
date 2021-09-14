import React from "react";

class Customer extends React.Component {
    render() {
        return (
            <>
                <CustomerProfile id={this.props.id} name={this.props.name} image={this.props.image} key={"profile_" + this.props.id}/>
                <CustomerInfo birth={this.props.name} gender={this.props.gender} job={this.props.job} key={"info_" + this.props.id}/>
            </>
        )
    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
            <>
                <h2><img src={this.props.image} alt="profile"/>
                {this.props.name}({this.props.id})</h2>
            </>
        )
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </>
        )
    }
}
export default Customer;