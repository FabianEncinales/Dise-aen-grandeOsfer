document
	.getElementById('subscribe-form')
	.addEventListener('submit', function (event) {
		event.preventDefault(); // Evita el envío del formulario
		const name = event.target.name.value;
		const email = event.target.email.value;
		const phone = event.target.phone.value;
		const message = event.target.message.value;

		// Mostrar mensaje de inscripción
		const formMessage = document.getElementById('form-message');
		formMessage.textContent = `¡Gracias ${name}! Hemos recibido tu inscripción con el correo ${email}, celular ${phone}, y tu mensaje: "${message}".`;
	});
