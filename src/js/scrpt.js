

paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '10.00'  // Cambia el valor al monto deseado
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Pago completado por ' + details.payer.name.given_name);
            // Aquí puedes enviar detalles al servidor para confirmar el pago
        });
    }
}).render('#paypal-button-container');

