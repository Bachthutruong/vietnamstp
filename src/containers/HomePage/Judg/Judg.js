import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Judg.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class Judg extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="judg">
                    <div className="tieu-de">
                        <div className="tieu-de-1">HỘI ĐỒNG GIÁM KHẢO</div>
                        <div className="tieu-de-2">HỘI ĐỒNG GIÁM KHẢO</div>
                        <div className="gioi-thieu">Meet our small team that make those great products.</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Judg);
