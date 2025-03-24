function validateFields(fields) {
    const validationRules = {
        name: { regex: "^[a-zA-Z ,.'-]{2,50}$", errorMessage: "Name is invalid" },
        email: { regex: "^(?=.{1,50}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]+$", errorMessage: "Email is invalid" },
        phoneNumber: { regex: "^[0-9 +\-()]{6,50}$", errorMessage: "Phone number is invalid" },
        streetAdress: { regex: "^[a-zA-Z ,.'-0-9]{2,50}$", errorMessage: "Street adress is invalid" },
        zipCode: { regex: "^[0-9]{5}$", errorMessage: "Zip code is invalid" },
        city: { regex: "^[a-zA-Z ,.'-]{2,50}$", errorMessage: "City is invalid" }
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
