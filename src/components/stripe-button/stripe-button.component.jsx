import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton= ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J97zRABJInqcTwZ7h42bl42L2CPDt7oSsZDorp9wJ9fMQ5GB3NCo91bxyui7ue4NLgT0pQ4aGLZMAHhrQ91n6WA00LLQR69mI'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;