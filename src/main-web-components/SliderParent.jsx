
import {Carousel} from '3d-react-carousal';
function Slider() {
let slides = [
    <img src="/assets/images/new.jpg" alt="1" />,
    <img src="/assets/images/b100.jpg" alt="2" />  ,
    <img src="/assets/images/e100i.jpg" alt="3" />  ,
    <img src="/assets/images/pod.jpg" alt="4" />  ,
    <img src="/assets/images/wenax.jpg" alt="5" />   ];
return (
<Carousel slides={slides} autoplay={true} interval={3000}/>
)
}
export default Slider;