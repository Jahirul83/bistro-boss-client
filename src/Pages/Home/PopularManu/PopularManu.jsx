import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularManu = () => {
    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === "popular");
    // const [menu, setMenu] = useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter( item => item.category === "popular")
    //         setMenu(popularItems)})
    // },[])
    return (
        <section className="mb-12">
            <SectionTitle 
            heading="From our menu" 
            subHeading="popular items"></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popularItems.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4">View full menu</button>
        </section>
    );
};

export default PopularManu;