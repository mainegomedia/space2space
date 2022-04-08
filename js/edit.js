$(".btn-primary").on("click", function(event) {
    event.preventDefault();

var editUser = {
  typeofuser: $("#typeOfuser").val().trim(),
  firstname: $("#firstName").val().trim(),
  lastname: $("#lastName").val().trim(),
  profilepicture: $("#picture").val().trim(),
  birthdate: $("#birthdate").val().trim(),
  gender: $("#gender").val().trim(),
  emailaddress: $("#email").val().trim(),
  country: $("#country").val().trim(),
  religion: $("#religion").val().trim(),
  language: $("#languages").val().trim(),
  staylength: $("#length").val().trim(),
  introduction: $("#introduction").val().trim()
  };

  console.log(currentUserName);
  console.log(editUser);

  editCurrentUser(editUser);

  function deleteInput() {
  $("#typeOfuser").val("").trim();
  $("#firstName").val("").trim();
  $("#lastName").val("").trim();
  $("#profilePic").val("").trim();
  $("#birthdate").val("").trim();
  $("#email").val("").trim();
  $("#country").val("").trim();
  $("#school").val("").trim();
  $("#religion").val("").trim();
  $("#languages").val("").trim();
  $("#length").val("").trim();
  $("#introduction").val("").trim();
  };
});



function editCurrentUser(user) {
$.put("/api/editCurrentUser", user, function() {
  window.location.href = "/my-profile";
});
};
