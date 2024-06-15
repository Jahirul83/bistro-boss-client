import userAuth from '../../../hooks/useAuth';

const UserHome = () => {
    const { user } = userAuth()
    return (
        <div>
            <h2 className="text-3xl">
                <span>Hi, Welcome</span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
        </div>
    );
};

export default UserHome;