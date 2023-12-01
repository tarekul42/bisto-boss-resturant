import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// import featured image from localstore
import featuredImg from "../../../assets/home/featured.jpg";
// import local css file
import './featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"Featured item"}
            />
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="Showing Featured image" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo eveniet est beatae labore quasi illum repudiandae magni, voluptatibus in nemo error incidunt vel adipisci accusamus mollitia iusto nesciunt temporibus ipsam unde quae esse. Deleniti corporis similique, ut accusamus et quidem nulla quam accusantium consectetur libero. Voluptas minus placeat sint sapiente?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;