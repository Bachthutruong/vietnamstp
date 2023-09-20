import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Question.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class Question extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="question">
                    <div className="tieu-de">
                        <div className="tieu-de-1">CÂU HỎI THƯỜNG GẶP</div>
                        <div className="tieu-de-2">CÂU HỎI THƯỜNG GẶP</div>
                        <div className="gioi-thieu">Chúng tôi hi vọng những thông tin này sẽ giúp đáp ứng các câu hỏi thường gặp từ người dùng và tạo sự thuận tiện cho quá trình tham gia chương trình.</div>
                    </div>
                    <div className="group1">
                        <div className="title1">Cơ quan bảo trợ cho chương trình Viet Nam Startup Awards là ai?</div>
                        <div className="line1"></div>
                        <div className="content1">Chương trình là sáng kiến của VIETNAMSTP - Làng phát triển công viên công nghệ đổi mới sáng tạo thực hiện nhiệm vụ hướng tới cuộc thi khởi nghiệp sáng tạo quốc gia Techfest 2023 dưới sự chỉ đạo từ hai Bộ Ngoại Giao và Bộ Khoa Học Công Nghệ, cùng với sự đồng hành của các đơn vị tổ chức uy tín như Uỷ Ban Nhà Nước Về Người Việt Nam Ở Nước Ngoài, NaTec (Cục Phát triển thị trường và Doanh nghiệp Khoa học & Công nghệ thuộc Bộ Khoa Học Công Nghệ), Startup Vietnam Foundation - SVF (Quỹ Khởi nghiệp Doanh nghiệp Khoa học và Công nghệ Việt Nam), Đề Án 844 (Hỗ trợ hệ sinh thái khởi nghiệp đổi mới sáng tạo quốc gia đến năm 2025) và NSSC (Trung tâm hỗ trợ khởi nghiệp sáng tạo Quốc gia).</div>
                    </div>
                    <div className="group2">
                        <div className="title2">Chi phí tham gia chương trình là bao nhiêu?</div>
                        <div className="line2"></div>
                        <div className="content2">Chương trình hoàn toàn miễn phí. Mục tiêu tôn vinh Startup, cá nhân, tổ chức, chương trình có đóng góp tích cực cho hệ sinh thái khởi nghiệp góp phần phát triển quốc gia khởi nghiệp. Xây dựng một hệ sinh thái khởi nghiệp sáng tạo có tính kế thừa, bền vững sẵn sàng giải quyết các thách thức lớn của chính phủ, xã hội, doanh nghiệp góp phần tăng trưởng kinh tế số - Kết nối sâu rộng với quốc tế.</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Question);
