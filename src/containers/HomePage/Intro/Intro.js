import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../../store/actions";
import './Intro.scss';

class Intro extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="intro">
                    <div className="vietnam1">
                        VIET NAM STARTUP AWARDS 2023
                    </div>
                    <div className="vietnam2">
                        VIET NAM STARTUP AWARDS 2023
                    </div>
                    <div className="vietnam3">
                        CHƯƠNG TRÌNH QUỐC GIA VINH DANH HỆ SINH THÁI KHỞI NGHIỆP
                    </div>
                    <div className="video-text-intro">
                        <div className="text-intro">Vietnam Startup Awards là một chương trình vinh danh với 15 hạng mục kết nối đa dạng hệ sinh thái khởi nghiệp Việt Nam. Mục tiêu tôn vinh Startup, cá nhân, tổ chức, chương trình có đóng góp tích cực cho hệ sinh thái khởi nghiệp góp phần phát triển quốc gia khởi nghiệp. Xây dựng một hệ sinh thái khởi nghiệp sáng tạo có tính kế thừa, bền vững sẵn sàng giải quyết các thách thức lớn của chính phủ, xã hội, doanh nghiệp góp phần tăng trưởng kinh tế số - Kết nối sâu rộng với quốc tế.</div>
                        <div className="video-intro"></div>
                    </div>
                    <div className="dang-ki-de-cu">ĐĂNG KÍ ĐỀ CỬ/ỨNG CỬ CỦA 15 HẠNG MỤC </div>
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
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
