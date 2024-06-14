import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";


// todo:add publishable key
const stripPromise = loadStripe('')

const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="please pay to eat"></SectionTitle>
            <div>
                <Elements stripe={stripPromise}>

                </Elements>
            </div>
        </div>
    );
};

export default Payment;