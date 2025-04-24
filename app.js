document.getElementById("paymentForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const data = {
        payer_name: document.getElementById("payerName").value,
        description: document.getElementById("concept").value,
        first_total: parseFloat(document.getElementById("amount").value),
        first_due_date: document.getElementById("dueDate").value,
    };
    /*const response = await fetch("https://api.example.com/payments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();*/

    const response = await fakePaymentRequest(data);

    const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <p>Solicitud creada con ID: ${response.id}</p>
    <a class="boton_pagar" href="${response.checkout_url}" target="_blank">PAGAR</a>
  `;

    // Simulate a webhook response after 3 seconds
  setTimeout(() => simulateWebhook(response.id), 3000);

});

