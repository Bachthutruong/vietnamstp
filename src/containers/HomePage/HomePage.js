import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../HomePage/HomeHeader/HomeHeader';
import Intro from '../HomePage/Intro/Intro';
import HangMuc from '../HomePage/CacHangMuc/HangMuc';
import Information from '../HomePage/Information/Information';
import Benefit from '../HomePage/Benifit/Benifit';
class HomePage extends Component {
    render() {
        return (
            <>
            <HomeHeader/>
            <Intro/>
            <HangMuc/>
            <Information/>
            <Benefit/>
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
