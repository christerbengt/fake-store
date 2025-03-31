function validateFields(fields) {
    const validationRules = {
        name: { regex: /^[a-zA-Z ,.'-]{2,50}$/, errorMessage: "Name is invalid" },
        email: { regex: /^(?=.{1,50}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/, errorMessage: "Email is invalid" },
        phoneNumber: { regex: /^[0-9 +\-()]{6,50}$/, errorMessage: "Phone number is invalid" },
        streetAdress: { regex: /^[a-zA-Z0-9 ,.'-]{2,50}$/, errorMessage: "Street address is invalid" },
        zipCode: { regex: /^[0-9]{5}$/, errorMessage: "Zip code is invalid" },
        city: { regex: /^[a-zA-Z ,.'-]{2,50}$/, errorMessage: "City is invalid" }
    };

    let errors = [];

    for (let field in fields) {
        if (validationRules[field] && !validationRules[field].regex.test(fields[field])) {
            errors.push({
                field,
                value: fields[field],
                message: validationRules[field].errorMessage});
        }
    }

    return errors.length > 0 ? errors : null;
}

document.getElementById("checkout-form").addEventListener("submit", function (e) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phoneNumber: document.getElementById("phone").value,
        streetAdress: document.getElementById("street_address").value,
        zipCode: document.getElementById("postal_code").value,
        city: document.getElementById("city").value
    };

    const errors = validateFields(formData);

    if (errors) {
        errors.forEach(error => {
            const errorElement = document.getElementById(error.field);
            if (errorElement) {
                errorElement.textContent = error.message;
            }
        });
    } else {
        console.log("Form submitted successfully!");
    }
})