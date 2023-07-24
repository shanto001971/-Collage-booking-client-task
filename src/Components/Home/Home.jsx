import CollageInffo from "../CollageInfo/CollageInffo";
import ResearchPaper from "../ResearchPaper/ResearchPaper";
import ReviewPage from "../ReviewSection/ReviewPage";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div>
            <Slider/>
            <CollageInffo/>
            <ResearchPaper/>
            <ReviewPage/>
        </div>
    );
};

export default Home;