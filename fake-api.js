function fakePaymentRequest(data) {
    return new Promise((resolve) => {
      const fakeId = Math.floor(Math.random() * 5000);
      const fakeUrl = `https://checkout.pagos360.com/payment-request/fake-${fakeId}`;
      setTimeout(() => {
        resolve({
          id: fakeId,
          state: "pending",
          ...data,
          checkout_url: fakeUrl,
        });
      }, 1000);
    });
  }

// This function simulates a payment request to a fake API.
// It generates a random ID and a fake URL, and resolves the promise after 1 second.
// The function takes a data object as an argument, which contains payment details.
// The resolved object includes the generated ID, state, and the original data along with the fake URL.
