import React from 'react';

const KhaltiCheckoutButton = () => {
  const publicKey = 'YOUR_KHALTI_PUBLIC_KEY'; // Replace with your Khalti public key
  
  const handlePayment = () => {
    const khalti = new window.KhaltiCheckout({
      // Replace with your Khalti public key
      publicKey: publicKey,
      productIdentity: "123456",
      productName: "Sample Product",
      productUrl: "http://localhost:3000/product/123",
      eventHandler: {
        onSuccess: function (payload) {
          alert("Payment Successful!");
          console.log(payload);
          // Handle successful payment here (e.g., API call to backend)
        },
        onError: function (error) {
          alert("Payment Failed!");
          console.log(error);
        },
        onClose: function () {
          console.log("Payment Modal Closed");
        }
      }
    });

    khalti.show({amount: 1000}); // Amount in paise (1 NPR = 100 paise)
  };

  return (
    <div>
      <button onClick={handlePayment} className="payment-btn">
        Pay with Khalti
      </button>
    </div>
  );
};

export default KhaltiCheckoutButton;