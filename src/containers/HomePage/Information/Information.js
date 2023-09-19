import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Information.scss';

class Information extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="information">
                    <div className="tieu-de">
                        <div className="tieu-de-1">THÔNG TIN CHƯƠNG TRÌNH</div>
                        <div className="tieu-de-2">THÔNG TIN CHƯƠNG TRÌNH</div>
                        <div className="gioi-thieu">Vietnam Startup Awards là một nền tảng uy tín nhằm tôn vinh và vinh danh những thành tựu xuất sắc trong hệ sinh thái khởi nghiệp của Việt Nam. Hãy cùng chúng tôi chào đón những tâm huyết sáng tạo, những ý tưởng đột phá và những doanh nghiệp ấn tượng đang định hình tương lai khởi nghiệp của Việt Nam.</div>
                    </div>
                    <div className="line1"></div>
                    <div className="group1">
                        <div className="elip1"></div>
                        <div className="elip2"></div>
                    </div>
                    <div className="line2"></div>
                    <div className="elip_1"></div>
                    <div className="so1">01</div>
                    <div className="thoigiandecu">Thời gian đề cử</div>
                    <div className="noidungdecu">Thời gian đề cử bắt đầu từ ngày 6/8/2023 và kéo dài đến ngày 1/9/2023. Trong thời gian này, các đơn vị và cá nhân có thể nộp đơn đề cử cho các hạng mục vinh danh.</div>
                    <div className="group2">
                        <div className="elip3"></div>
                        <div className="elip4"></div>
                    </div>
                    <div className="line3"></div>
                    <div className="elip_2"></div>
                    <div className="so2">02</div>
                    <div className="ketnoitruyenthong">Kết nối truyền thông</div>
                    <div className="noidungketnoi">Từ tháng 9 đến tháng 11, chúng tôi sẽ tiến hành kết nối và truyền thông với các đơn vị và cá nhân được đề cử, nhằm gắn kết hệ sinh thái khởi nghiệp sâu và xây dựng sự kế thừa giữa các thế hệ khởi nghiệp.</div>
                    <div className="group3">
                        <div className="elip5"></div>
                        <div className="elip6"></div>
                    </div>
                    <div className="line4"></div>
                    <div className="elip_3"></div>
                    <div className="so3">03</div>
                    <div className="congboketqua">Công bố kết quả </div>
                    <div className="noidungketqua">Ngày 6/12/2023, hội đồng thẩm đinh sẽ công bố danh sách 3 đơn vị hoặc cá nhân xuất sắc nhất cho mỗi hạng mục, nhận được đánh giá tích cực từ cộng đồng khởi nghiệp.</div>
                    <div className="group4">
                        <div className="elip7"></div>
                        <div className="elip8"></div>
                    </div>
                    <div className="line5"></div>
                    <div className="elip_4"></div>
                    <div className="so4">04</div>
                    <div className="letraogiai">Lễ trao giải</div>
                    <div className="noidungtraogiai">Lễ trao giải của chương trình Vietnam Startup Awards sẽ diễn ra trong khuôn khổ ngày hội khởi nghiệp sáng tạo Techfest 2023, tại địa điểm diễn ra Techfest 2023. Đây là dịp quan trọng để tôn vinh các doanh nghiệp khởi nghiệp và cá nhân xuất sắc, đồng thời thúc đẩy sự phát triển bền vững của hệ sinh thái khởi nghiệp Việt Nam.</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Information);
