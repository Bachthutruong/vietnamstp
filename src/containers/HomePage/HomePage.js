import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../HomePage/HomeHeader/HomeHeader';
import Intro from '../HomePage/Intro/Intro';
import HangMuc from '../HomePage/CacHangMuc/HangMuc';
import Information from '../HomePage/Information/Information';
import Benefit from '../HomePage/Benifit/Benifit';
import Form from '../HomePage/Form/Form';
import Question from '../HomePage/Question/Question';
import Footer from '../HomePage/Footer/Footer'
import Judg from '../HomePage/Judg/Judg'
class HomePage extends Component {
    render() {
        return (
            <>
            <HomeHeader/>
            <Intro/>
            <HangMuc/>
            <Information/>
            <Benefit/>
            <Form/>
            <Judg/>
            <Question/>
            <Footer/>
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
