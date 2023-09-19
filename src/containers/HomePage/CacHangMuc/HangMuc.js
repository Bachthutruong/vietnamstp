import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HangMuc.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class HangMuc extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="cac-hang-muc">
                    <div className="tieu-de">
                        <div className="title1">
                                15 HẠNG MỤC VINH DANH
                            </div>
                        <div className="title2">
                                15 HẠNG MỤC VINH DANH
                        </div>
                    </div>
                    <div className="hang-muc-hang-1">
                        <div className="hang-muc-1">
                            <div className="picture1">
                            </div>
                            <div className="title-small">STARTUP OF THE YEAR</div>
                            <div className="description">Startup Of The Year là giải thưởng vinh danh một Startup xuất sắc của năm, có tác động tích cực đến nền kinh tế bằng cách cung cấp sản phẩm, dịch vụ đột phá và sáng tạo.</div>
                            <div className="de-cu">
                            <FontAwesomeIcon icon={faArrowRight} /> Đề cử
                            </div>
                        </div>
                        <div className="hang-muc-2">
                            <div className="picture1">
                            </div>
                            <div className="title-small">BEST STARTUP NEWCOMER</div>
                            <div className="description">Best Startup Newcomer là giải thưởng vinh danh một Startup mới có khoảng 2 năm tuổi phát triển với tiềm năng trở thành Startup of the Year trong tương lai. Ngoài ra, các sản phẩm, dịch vụ của Startup đã xuất hiện trên thị trường và tác động tích cực đến nền kinh tế và thế giới.</div>
                            <div className="de-cu">
                            <FontAwesomeIcon icon={faArrowRight} /> Đề cử
                            </div>
                        </div>
                        
                        <div className="hang-muc-3">
                            <div className="picture1">
                            </div>
                            <div className="title-small">BEST WEB 3.0 AND AI STARTUP</div>
                            <div className="description">Best WEB 3.0 and AI Startup là giải thưởng vinh danh một Startup công nghệ mới nổi có sự độc đáo, sáng tạo trong lĩnh vực Web 3.0 và AI toàn cầu; có sự kết hợp phân cấp, công nghệ chuỗi khối và kinh tế dựa trên mã thông báo để tạo ra giá trị gia tăng. Bên cạnh đó, cam kết được độ bảo mật dữ liệu và quyền riêng tư.</div>
                            <div className="de-cu">
                            <FontAwesomeIcon icon={faArrowRight} /> Đề cử
                            </div>
                        </div>
                    </div>
                    <div className="hang-muc-hang-2">
                        <div className="hang-muc-4">
                        <div className="picture1">
                            </div>
                            <div className="title-small">BEST HEALTHTECH STARTUP</div>
                            <div className="description">Best HealthTech Startup là giải thưởng vinh danh một Startup công nghệ y tế đang sử dụng công nghệ và phát triển các mô hình kinh doanh mới để cải thiện sức khỏe của bệnh nhân. Sản phẩm hoặc dịch vụ của Startup phải có sức hút trên thị trường và có tiềm năng phát triển mạnh mẽ trong lĩnh vực chăm sóc sức khỏe.</div>
                            <div className="de-cu">
                            <FontAwesomeIcon icon={faArrowRight} /> Đề cử
                            </div>
                        </div>
                        <div className="hang-muc-5">
                        <div className="picture1">
                            </div>
                            <div className="title-small">BEST GREEN TECH STARTUP</div>
                            <div className="description">Best Green Tech Startup là giải thưởng vinh danh một Startup có mô hình kinh doanh tốt, có tác động xanh đến thế giới với sản phẩm hoặc dịch vụ giúp giảm tiêu thụ năng lượng, tạo ra năng lượng tái tạo và tối ưu hóa quy trình.</div>
                            <div className="de-cu">
                            <FontAwesomeIcon icon={faArrowRight} /> Đề cử
                            </div>
                        </div>
                        <div className="hang-muc-6">
                        <div className="picture1">
                            </div>
                            <div className="title-small">BEST E-COMMERCE STARTUP</div>
                            <div className="description">Best E-Commerce Startup là giải thưởng vinh danh sự đổi mới và sáng tạo của các Startup trong lĩnh vực thương mại điện tử - Những cá nhân đã mạnh dạn xây dựng và phát triển nền tảng mua sắm trực tuyến hay các nền tảng hỗ trợ cho hệ sinh thái thương mại điện tử.</div>
                            <div className="de-cu">
                            <FontAwesomeIcon icon={faArrowRight} /> Đề cử
                            </div>
                        </div>
                    </div>
                    <div className="hang-muc-hang-3">
                        <div className="hang-muc-7">
                        <div className="picture1">
                            </div>
                            <div className="title-small">FOUNDER OF THE YEAR</div>
                            <div className="description">Founder Of The Year là giải thưởng vinh danh một người sáng lập hoặc đồng sáng lập công ty khởi nghiệp đã thể hiện kỹ năng lãnh đạo mạnh mẽ và đạt được kết quả kinh doanh đặc biệt. Đồng thời truyền cảm hứng và là hình mẫu cho thế hệ những Startup tiếp theo.</div>
                            <div className="de-cu">
                            <FontAwesomeIcon icon={faArrowRight} /> Đề cử
                            </div>
                        </div>
                        <div className="hang-muc-8">
                        <div className="picture1">
                            </div>
                            <div className="title-small">INVESTOR OF THE YEAR</div>
                            <div className="description">Investor Of The Year là giải thưởng vinh danh một nhà đầu tư của năm đã tạo ra kết quả tài chính ấn tượng khi đầu tư vào các công ty đổi mới có tiềm năng tác động tích cực đến nền kinh tế. Đồng thời, hỗ trợ các công ty này bằng các nguồn lực khác ngoài tài chính.</div>
                            <div className="de-cu">
                            <FontAwesomeIcon icon={faArrowRight} /> Đề cử
                            </div>
                        </div>
                        <div className="hang-muc-9">
                        <div className="picture1">
                            </div>
                            <div className="title-small">ECOSYSTEM HERO OF THE YEAR</div>
                            <div className="description">Ecosystem Hero Of The Year là giải thưởng vinh danh các cá nhân, tổ chức có đóng góp nhiều nhất cho khởi nghiệp tại Việt Nam; có niềm đam mê khởi nghiệp và khả năng hỗ trợ, huấn luyện các doanh nghiệp khởi nghiệp, đóng góp tích cực cho sự phát triển của hệ sinh thái khởi nghiệp tại Việt Nam.</div>
                            <div className="de-cu">
                            <FontAwesomeIcon icon={faArrowRight} /> Đề cử
                            </div>
                        </div>
                    </div>
                    <div className="hang-muc-hang-4">
                        <div className="hang-muc-10">
                        <div className="picture1">
                            </div>
                            <div className="title-small">DIVERSITY ROLE MODEL OF THE YEAR</div>
                            <div className="description">Diversity Role Model Of The Year là giải thưởng vinh danh một cá nhân được biết đến với những thành tích xuất sắc và đồng thời là một hình mẫu đáng ngưỡng mộ về sự đa dạng và công bằng trong môi trường kinh doanh và xã hội.</div>
                            <div className="de-cu">
                            <FontAwesomeIcon icon={faArrowRight} /> Đề cử
                            </div>
                        </div>
                        <div className="hang-muc-11">
                        <div className="picture1">
                            </div>
                            <div className="title-small">SOCIAL IMPACT STARTUP OF THE YEAR</div>
                            <div className="description">Social Impact Startup Of The Year là giải thưởng vinh danh một công ty khởi nghiệp có mô hình kinh doanh thành công và tác động tích cực đến cộng đồng và xã hội, đóng góp vào giải quyết các vấn đề xã hội và môi trường.</div>
                            <div className="de-cu">
                            <FontAwesomeIcon icon={faArrowRight} /> Đề cử
                            </div>
                        </div>
                        <div className="hang-muc-12">
                        <div className="picture1">
                            </div>
                            <div className="title-small">BEST ACCELERATOR PROGRAM</div>
                            <div className="description">Best Accelerator Program là giải thưởng vinh danh chương trình tăng tốc xuất sắc tại Việt Nam, nhằm hỗ trợ và đẩy mạnh sự phát triển của các Startup thông qua cung cấp công cụ, tài nguyên, kết nối, kiến thức và chuyên môn.</div>
                            <div className="de-cu">
                            <FontAwesomeIcon icon={faArrowRight} /> Đề cử
                            </div>
                        </div>
                    </div>
                    <div className="hang-muc-hang-5">
                        <div className="hang-muc-13">
                        <div className="picture1">
                            </div>
                            <div className="title-small">BEST INCUBATOR PROGRAM</div>
                            <div className="description">Best Incubator Program là giải thưởng vinh danh chương trình ươm tạo xuất sắc tại Việt Nam, nhằm hỗ trợ và tạo điều kiện thuận lợi cho các doanh nghiệp khởi nghiệp phát triển công ty đổi mới của họ bằng cách cung cấp các công cụ, nguồn lực, kết nối, kiến thức và chuyên môn.</div>
                            <div className="de-cu">
                            <FontAwesomeIcon icon={faArrowRight} /> Đề cử
                            </div>
                        </div>
                        <div className="hang-muc-14">
                        <div className="picture1">
                            </div>
                            <div className="title-small">BEST START-UP CONTEST PROGRAM</div>
                            <div className="description">Investor Of The Year là giải thưởng vinh danh một nhà đầu tư của năm đã tạo ra kết quả tài chính ấn tượng khi đầu tư vào các công ty đổi mới có tiềm năng tác động tích cực đến nền kinh tế. Đồng thời, hỗ trợ các công ty này bằng các nguồn lực khác ngoài tài chính.</div>
                            <div className="de-cu">
                            <FontAwesomeIcon icon={faArrowRight} /> Đề cử
                            </div>
                        </div>
                        <div className="hang-muc-15">
                        <div className="picture1">
                            </div>
                            <div className="title-small">BEST CO-WORKING SPACE</div>
                            <div className="description">Best Co-Working Space là giải thưởng vinh danh một không gian làm việc chung xuất sắc tại Việt Nam, xứng đáng được công nhận về các dịch vụ, sự hỗ trợ và nguồn lực dành cho các công ty khởi nghiệp tăng trưởng nhanh. Không gian này có thể tạo ra môi trường thúc đẩy sự đổi mới.</div>
                            <div className="de-cu">
                            <FontAwesomeIcon icon={faArrowRight} /> Đề cử
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

export default connect(mapStateToProps, mapDispatchToProps)(HangMuc);
