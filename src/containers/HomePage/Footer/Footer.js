import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Footer.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="footer">
                    <div className="line"></div>
                    <div className="column1">
                        <div className="content">Viet Nam Startup Awards 2023 - Chương Trình Quốc Gia Vinh Danh Hệ Sinh Thái Khởi Nghiệp.</div>
                    </div>
                    <div className="column2">
                        <p><b>VIETNAMSTP</b></p>
                            <p>Giới thiệu</p>
                            <p>Tuyển dụng</p>
                            <p>Liên hệ</p>
                        
                    </div>
                    <div className="column3">
                        <p><b>Sản phẩm</b></p>
                        <p>Startups.edu.vn</p>
                        <p>247InnovationPark.com</p>
                    </div>
                    <div className="column4">
                        <p><b>Diễn đàn</b></p>
                        <p>Khởi nghiệp sáng tạo</p>
                        <p>Đổi mới sáng tạo mở</p>
                        <p>Techfest Việt Nam</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
