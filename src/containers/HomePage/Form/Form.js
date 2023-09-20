import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Form.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class Form extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="form">
                    <div className="tieu-de">
                        <div className="tieu-de-1">THAM GIA VÀ ĐỀ CỬ</div>
                        <div className="tieu-de-2">THAM GIA VÀ ĐỀ CỬ</div>
                        <div className="gioi-thieu">Viet Nam Startup Awards nhằm tôn vinh những tinh hoa khởi nghiệp, những ước mơ đam mê đã biến thành hiện thực. Chúng tôi tin rằng mỗi ý tưởng đột phá xứng đáng được ghi nhận và kết nối với thế giới.</div>
                    </div>
                    <div className="noi_dung">
                        <div className="first-name">First Name<input className="ip1" type="text" placeholder="Tên của bạn"/></div>
                        <div className="email">Email<input className="ip2" type="text" placeholder="Địa chỉ email của bạn"/></div>
                        <div className="phone">Phone<input className="ip3" type="text" placeholder="Số điện thoại của bạn"/></div>
                        <div className="company">Company<input className="ip4 " type="text" placeholder="Tên công ty của bạn"/></div>
                        <div className="company-size">Company Size<input className="ip5" type="text" placeholder="Quy mô công ty của bạn"/></div>
                        <div className="website">Website<input className="ip6" type="text" placeholder="Website công ty của bạn"/></div>
                        <div className="select">Lựa chọn hạng mục<input className="ip7" type="text" placeholder="Tên của bạn"/></div>
                        <div className="message">Message<input className="ip8" type="text" placeholder="Tin nhắn của bạn"/></div>
                    </div>
                    <div className="yeucau">
                        GỬI YÊU CẦU
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

export default connect(mapStateToProps, mapDispatchToProps)(Form);
