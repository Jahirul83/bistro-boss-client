import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";



const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result=>{
            console.log(result.user);
        })
    }
    return (
        <div className="p-8">
            <div className="divider"></div>
            <button onClick={handleGoogleSignIn} className="btn">
                <FaGoogle className="mr-2" />
                Google
            </button>
        </div>
    );
};

export default SocialLogin;