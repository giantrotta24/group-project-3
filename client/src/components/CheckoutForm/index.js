import React, { Component, Fragment } from 'react';

const SearchButton = ({ renderUserSearch }) => {
    return (
        <button onClick={renderUserSearch} className='btn-success btn find-user-button' >Find Customer</button>
    );
}

const EnterButton = ({ renderUserSubmit }) => {
    return (
        <button onClick={renderUserSubmit} className='btn-primary btn submit-user-button ml-3' >Enter New Customer</button>
    );
}

class CheckoutForm extends Component {
    state = { 
        newCustomer: false,
        oldCustomer: false, 
    };

    renderUserSearch = (event) => {
        event.preventDefault();
        this.props.renderUserSearch();
    }

    renderUserSubmit = (event) => {
        event.preventDefault();
        this.props.renderUserSubmit();
    }


    render () {
        return (
            <Fragment>
                <SearchButton 
                    renderUserSearch={this.renderUserSearch}
                />
                <EnterButton 
                    renderUserSubmit={this.renderUserSubmit}
                />
            </Fragment>
        );
    }

}

export default CheckoutForm;
