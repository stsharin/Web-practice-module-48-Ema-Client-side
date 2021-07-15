import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51JDXVOGUvaG0o4MbdIISIO14Vrjx436r6fePxu8jDX19JRkk5EtUx5L0kOhZu6MOdIIjkqQ0ZDyhOT7GjolctPfn00a1jKoiwF');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
        </Elements>
    );
};

export default ProcessPayment;