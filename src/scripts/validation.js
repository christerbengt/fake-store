function validateFields(fields) {
    const validationRules = {
        name: { regex: /^[a-zA-Z ,.'-]{2,50}$/, errorMessage: "Name is invalid" },
        email: { regex: /^(?=.{1,50}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/, errorMessage: "Email is invalid" },
        phoneNumber: { regex: /^[0-9 +\-()]{6,50}$/, errorMessage: "Phone number is invalid" },
        streetAddress: { regex: /^[a-zA-Z0-9 ,.'-]{2,50}$/, errorMessage: "Street address is invalid" },
        zipCode: { regex: /^[0-9]{5}$/, errorMessage: "Zip code is invalid" },
        city: { regex: /^[a-zA-Z ,.'-]{2,50}$/, errorMessage: "City is invalid" }
    };

    let errors = {};

    for (let field in fields) {
        console.log(field, fields[field])
        if (validationRules[field] && !validationRules[field].regex.test(fields[field])) {
            errors[field] = validationRules[field].errorMessage;
        }
    }

    return Object.keys(errors).length > 0 ? errors : null;
}

export default validateFields;