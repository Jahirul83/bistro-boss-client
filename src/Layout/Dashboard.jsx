import { FaAd, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaCalendar, FaList } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    <li>
                        <NavLink to={'/dashboard/userHome'}>
                            <FaHome />
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/reservation'}>
                            <FaCalendar />
                            Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/carts'}>
                            <FaShoppingCart />
                            My cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/review'}>
                            <FaAd />
                            Add a review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/bookings'}>
                            <FaList />
                            My Bookings
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to={'/'}>
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/order/salad'}>
                            <FaSearch />
                            Menu
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                {/* dashboard content */}
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;