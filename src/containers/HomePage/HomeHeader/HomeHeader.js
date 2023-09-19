import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';

class HomeHeader extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="home-header-comtainer"> 
                    <div className="home-header-content">
                        <div className="left-content">
                            <div className="logo-header"></div>
                        </div>
                        <div className="center-content">
                            <div className="child-content">
                                <b>Hạng mục vinh danh</b>
                            </div>
                            <div className="child-content">
                                <b>Tham gia</b>
                            </div>
                            <div className="child-content">
                                <b>VIETNAMSTP</b>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="login">LOGIN</div>
                            <div className="apply">APPLY</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
