import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-items bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading="check it out"
                heading="featured item"
            ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-40">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">where can i get some</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum debitis earum magni provident. Illum, officia dolores. Perspiciatis, consectetur cumque. Suscipit magni autem optio non cupiditate maxime iusto unde molestiae necessitatibus, maiores quidem, assumenda laboriosam atque voluptatum. Facilis recusandae voluptate neque consequatur vitae. Praesentium, aperiam architecto! Laboriosam, nostrum totam! Quidem, consectetur!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;