const form = document.getElementById('formRegister');


form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const register = "http://localhost:8080/user/register";

    const response = await fetch(register, {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, /",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            rollNumber: formData.get('rollNumber'),
            password: formData.get('password'),
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            phoneNumber: formData.get('phoneNumber'),
            hostelName: formData.get('hostelName'),

        })
    });
    const data = response.json();
    console.log(response.status);
    window.location.href = '/index.html';
});
