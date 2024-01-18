import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'


const Featured = () => {
    return (
        <div>
            <SectionTitle
            subHeading="check it out"
            heading="featured item"
            ></SectionTitle>
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div>
                <p>Aug 20, 2029</p>
                <p className="uppercase">where can i get some</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum debitis earum magni provident. Illum, officia dolores. Perspiciatis, consectetur cumque. Suscipit magni autem optio non cupiditate maxime iusto unde molestiae necessitatibus, maiores quidem, assumenda laboriosam atque voluptatum. Facilis recusandae voluptate neque consequatur vitae. Praesentium, aperiam architecto! Laboriosam, nostrum totam! Quidem, consectetur!</p>
            </div>
        </div>
    );
};

export default Featured;