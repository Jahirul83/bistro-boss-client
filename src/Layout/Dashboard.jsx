import { FaAd, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaBook, FaCalendar, FaEnvelope, FaList, FaUsers, FaUtensils } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();

    // todo: get admin value from the database
    const isAdmin = true;

    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to={'/dashboard/adminHome'}>
                                    <FaHome />
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/addItems'}>
                                    <FaUtensils />
                                    Add Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/manageItems'}>
                                    <FaList/>
                                    Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/bookings'}>
                                    <FaBook />
                                    Manage Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/users'}>
                                    <FaUsers/>
                                    All Users
                                </NavLink>
                            </li>
                        </> :
                            <>
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
                                        My cart ({cart.length})
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
                            </>
                    }
                    {/* shared navLinks */}
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
                    <li>
                        <NavLink to={'/order/contact'}>
                            <FaEnvelope />
                            Contact
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