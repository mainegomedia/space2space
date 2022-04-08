  // var nodemailer = require("nodemailer");
  // var transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user:
  //     'yangcs907@gmail.com',
  //     pass: 'stonecold3078'
  //   }
  // });
  // var mailOptions = {
  //   from:
  //   "yangcs907@gmail.com",
  //   to: email,
  //   subject: "Greetings from Space2Space!",
  //   text: "Hello there I would like to meet up with you!"
  // };
  // transporter.sendMail(mailOptions, function(error, info) {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log("Email sent: " + info.response);
  //   }
  // });


$(".btn-primary").on("click", function(event) {
  event.preventDefault();
  $("#recipient-name").append("yangcs907@gmail.com");
  var email = "yangcs907@gmail.com";
  var message = $("#message-text").val().trim();
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});
