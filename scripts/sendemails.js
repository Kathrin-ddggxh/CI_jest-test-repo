function sendMail(contactForm) {

    emailjs.send("service_3v384tj", "template_jg2q3eb", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        }, "JfkhknTxbB9A5YIWL")
        .then(
            function (response) {
                console.log("success!", response)
            },
            function (error) {
                console.log("failed!", error);
            });
    return false;
}