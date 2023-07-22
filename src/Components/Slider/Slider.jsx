import{ useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
        >
            
            <SwiperSlide>
                <img src="https://www.punchbowl.com/gridfs/fs/6442a8bbe8a4d27199575fec-1682090171.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://www.leaderinme.org/wp-content/uploads/2019/05/AdobstockLRfixedSM.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://us.123rf.com/450wm/dolgachov/dolgachov1612/dolgachov161202295/67289195-education-graduation-technology-and-people-concept-group-of-happy-international-students-in.jpg?ver=6" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://media.istockphoto.com/id/1066324992/photo/graduation-day.jpg?s=612x612&w=0&k=20&c=cleRpjTZbo430AbH-luZFYMMNqPwhwyTnFgWMbi_AiI=" alt="" />
            </SwiperSlide>
            
            <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
            </div>
        </Swiper>
    );
};

export default Slider;