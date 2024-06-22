/* Contact form verification */
document.addEventListener("DOMContentLoaded", (event) => {
	const contactForm = document.getElementById("contact-form");
	const firstNameInput = document.getElementById("input-first-name");
	const lastNameInput = document.getElementById("input-last-name");
	const emailInput = document.getElementById("input-email");
	const emailVerificationInput = document.getElementById("input-email-verification");
	const subjectInput = document.getElementById("input-subject");
	const messageInput = document.getElementById("input-message");

	// Input validation callbacks
	function firstNameValidation() {
		const firstName = firstNameInput.value.trim();
		const error = document.getElementById("input-first-name-error");
		if(validateName(firstName, error)) {
			return true;
		} else {
			error.textContent = "";
		}

		return false;
	}

	function lastNameValidation() {
		const lastName = lastNameInput.value.trim();
		const error = document.getElementById("input-last-name-error");
		if(validateName(lastName, error)) {
			return true;
		} else {
			error.textContent = "";
		}

		return false;
	}

	function emailValidation() {
		const email1 = emailInput.value.trim().toLowerCase();
		const email2 = emailVerificationInput.value.trim().toLowerCase();
		const emailError = document.getElementById("input-email-error");
		if (email2) {
			emailError.textContent = "";
			const emailVerificationError = document.getElementById("input-email-verification-error");
			validateEmail(email1, emailError);
			if(validateEmails(email1, email2, emailError, emailVerificationError)) {
				return true;
			} else {
				emailVerificationError.textContent = "";
			}
		} else {
			if (validateEmail(email1, emailError)) {
				return true;
			} else {
				emailError.textContent = "";
			}
		}

		return false;
	}

	function emailVerificationValidation() {
		const email1 = emailInput.value.trim().toLowerCase();
		const email2 = emailVerificationInput.value.trim().toLowerCase();
		const emailError = document.getElementById("input-email-error");
		const emailVerificationError = document.getElementById("input-email-verification-error");
		if(validateEmails(email1, email2, emailError, emailVerificationError)) {
			return true;
		} else {
			emailError.textContent = "";
			emailVerificationError.textContent = "";
		}

		return false;
	}

	function subjectValidation() {
		const subject = subjectInput.value.trim();
		const error = document.getElementById("input-subject-error");
		if (!subject) {
			error.textContent = "* Subject must not be empty.";
			return true;
		} else {
			error.textContent = "";
		}

		return false;
	}

	function messageValidation() {
		const message = messageInput.value.trim();
		const error = document.getElementById("input-message-error");
		if (!message) {
			error.textContent = "* Message must not be empty.";
			return true;
		} else {
			error.textContent = "";
		}

		return false;
	}

	// Set event callbacks
	firstNameInput.addEventListener("input", firstNameValidation);
	lastNameInput.addEventListener("input", lastNameValidation);
	emailInput.addEventListener("input", emailValidation);
	emailVerificationInput.addEventListener("input", emailVerificationValidation);
	subjectInput.addEventListener("input", subjectValidation);
	messageInput.addEventListener("input", messageValidation);

	// Set submission callback
	contactForm.addEventListener("submit", (event) => {
		if (
			firstNameValidation() ||
			lastNameValidation() ||
			emailValidation() ||
			emailVerificationValidation() ||
			subjectValidation() ||
			messageValidation()
		) {
			event.preventDefault();
		}
	});
});

function validateName(name, error) {
	const namePattern = /[a-zA-Z\-]+$/;
	if (!name) {
		error.textContent = "* Name must not be empty.";
		event.preventDefault();
		return true;
	} else if (!namePattern.test(name)) {
		error.textContent = "* Only alphabetical characters are allowed.";
		return true;
	} else if (name.length < 2) {
		error.textContent = "* At least two letters required.";
		return true;
	}

	return false;
}

function validateEmail(email, error) {
	const emailPattern = /^[a-z0-9\.]+@[a-z0-9]+\.[a-z]+$/;
	if (!email) {
		error.textContent = "* Email must not be empty.";
		return true;
	} else if (!emailPattern.test(email)) {
		error.textContent = "* Email must be valid.";
		return true;
	}

	return false;
}

function validateEmails(email1, email2, error1, error2) {
	if (!email2) {
		error2.textContent = "* Email must not be empty.";
		return true;
	} else if (email1 != email2) {
		error2.textContent = "* Emails must match.";
		return true;
	}
	if (validateEmail(email1, error1)) return true;

	return false;
}

/* Prevent email verification pasting */
document.addEventListener("DOMContentLoaded", (event) => {
	document.getElementById("input-email-verification").addEventListener("paste", (e) => {
		e.preventDefault();
	});
});
