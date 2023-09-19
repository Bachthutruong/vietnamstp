import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Benefit.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class Benefit extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="benefit">
                    <div className="tieu-de">
                        <div className="tieu-de-1">QUYỀN LỢI TẠI CHƯƠNG TRÌNH</div>
                        <div className="tieu-de-2">QUYỀN LỢI TẠI CHƯƠNG TRÌNH</div>
                        <div className="gioi-thieu">Những ưu đãi và giải thưởng độc quyền từ ban tổ chức và các đối tác tài trợ cho chương trình vinh danh Vietnam Startup Awards.</div>
                    </div>
                    <div className="benefit_info">
                        <div className="benefit_1">
                            <div className="elip1"></div>
                            <div className="picture1">
                            </div>
                            <div className="title-small">KÉT CÔNG NGHỆ 5 TRIỆU ĐÔ LA MỸ</div>
                            <div className="description">Các đơn vị được đề cử có cơ hội nhận gói hỗ trợ hoặc miễn phí 100% các giải pháp công nghệ mới nhằm mục tiêu tăng cường chuyển đổi số hoặc mở rộng kinh doanh với các nền tảng công nghệ từ tập đoàn BDSG và các đối tác công nghệ.</div>
                            <div className="de-cu">
                                Xem thêm thông tin
                            <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                        </div>
                        <div className="benefit_2">
                            <div className="elip2"></div>
                            <div className="picture2">
                            </div>
                            <div className="title-small">KÉT TRUYỀN THÔNG/HỢP TÁC</div>
                            <div className="description">Các đơn vị được đề cử nhận gói truyền thông từ chương trình với sự đồng hành cơ quan báo chí và đơn vị bảo trợ truyền thông. Ký thoải thuận hợp tác với ban tổ chức để mở rộng thị trường, kết nối đầu tư với nhiều đối tác trong nước, quốc tế.</div>
                            <div className="de-cu">
                            Xem thêm thông tin<FontAwesomeIcon icon={faArrowRight} /> 
                            </div>
                        </div>
                        
                        <div className="benefit_3">
                            <div className="elip3"></div>
                            <div className="picture3">
                            </div>
                            <div className="title-small">GIẢI THƯỞNG & CÔNG NHẬN CẤP QUỐC GIA</div>
                            <div className="description">15 hàng mục vinh danh chúng tôi sẽ chọn ra 3 đơn vị, cá nhân cho mỗi hạng mục được vinh danh nhận cúp và chứng nhận tại Techfest ngày hội khởi nghiệp sáng tạo quốc gia diễn ra vào tháng 12.</div>
                            <div className="de-cu">
                                Xem thêm thông tin 
                            <FontAwesomeIcon icon={faArrowRight} /> 
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Benefit);
