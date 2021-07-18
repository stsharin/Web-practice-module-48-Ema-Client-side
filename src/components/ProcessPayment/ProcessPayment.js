import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SliteCardForm';

const stripePromise = loadStripe('pk_test_51JDXVOGUvaG0o4MbdIISIO14Vrjx436r6fePxu8jDX19JRkk5EtUx5L0kOhZu6MOdIIjkqQ0ZDyhOT7GjolctPfn00a1jKoiwF');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm/>
        </Elements>
    );
};

export default ProcessPayment;