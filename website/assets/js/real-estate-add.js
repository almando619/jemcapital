if (window.location.pathname === `${Config.PATHNAME}/real-estate-add`) {
  const authView = $("#estate-login-view");
  const formView = $("#estate-form-view");

  const buttonLogin = $("#btn-login");
  const inputPassword = $("#input-password");

  const buttonUpload = $("#button-upload");
  const buttonSave = $("#button-save");
  const buttonFinish = $("#button-finish");
  const inputTitle = $("#input-title");
  const inputLocation = $("#input-location");
  const inputDescription = $("#input-description");
  const inputCategory = $("#input-category");
  const inputImage = $("#input-image");

  //variables
  var estateId = null;

  //listeners
  buttonLogin.click(() => {
    let _res = validateLogin();
    if (_res === "valid") {
      login();
    } else {
      alert(_res);
    }
  });

  buttonUpload.click(() => {});

  buttonSave.click(() => {
    let _res = validateFormProperty();
    if (_res === "valid") {
      registerProperty();
    } else {
      alert(_res);
    }
  });

  //methods
  const validateLogin = () => {
    if (isEmpty({ value: inputPassword.val(), trim: false })) {
      inputPassword.focus();
      return "Provide password";
    }
    return "valid";
  };

  const validateFormProperty = () => {
    if (isEmpty({ value: inputTitle.val() })) {
      inputTitle.focus();
      return "Provide title";
    }
    if (isEmpty({ value: inputLocation.val() })) {
      inputLocation.focus();
      return "Provide location";
    }
    if (isEmpty({ value: inputDescription.val() })) {
      inputDescription.focus();
      return "Provide description";
    }
    if (isEmpty({ value: inputCategory.find(":selected").val() })) {
      inputCategory.focus();
      return "Provide category";
    }
    return "valid";
  };

  const showForm = () => {
    authView.css("display", "none");
    formView.css("display", "flex");
  };

  const showAuth = () => {
    authView.css("display", "flex");
    formView.css("display", "none");
  };

  //api calls
  const login = () => {
    var _link = "./api/login.php";

    let formData = new FormData();
    formData.append("password", inputPassword.val());

    var req = $.ajax({
      url: _link,
      method: "POST",
      dataType: "json",
      cache: false,
      contentType: false,
      processData: false,
      data: formData,
      beforeSend: () => {
        buttonLogin.attr("disabled", "true");
        buttonLogin.html("Processing...");
      },
    });

    req.done((data) => {
      try {
        const responseJSON = { ...data };
        switch (responseJSON.message) {
          case "success":
            buttonLogin.removeAttr("disabled");
            buttonLogin.html("Login");
            inputPassword.val("");
            showForm();
            break;
          case "error":
            alert(`${responseJSON?.data}`);
            buttonLogin.removeAttr("disabled");
            buttonLogin.html("Login");
            break;
          default:
            alert(`An error occurred, login failed.`);
            buttonUpload.removeAttr("disabled");
            buttonUpload.html("Login");
        }
      } catch (e) {
        uploadFeedback.html(`An error occurred, upload failed.`);
        buttonUpload.removeAttr("disabled");
        buttonUpload.html("Login");
      }
    });

    req.fail((error, textStatus) => {
      console.log("***************", error);
      uploadFeedback.html(`An error occurred, upload failed.`);
      buttonUpload.removeAttr("disabled");
      buttonUpload.html("Upload");
    });
  };

  const registerProperty = () => {
    var _link = "./api/addProperty.php";

    let formData = new FormData();
    formData.append("title", inputTitle.val());
    formData.append("description", inputDescription.val());
    formData.append("category", inputCategory.find(":selected").val());
    formData.append("location", inputLocation.val());

    var req = $.ajax({
      url: _link,
      method: "POST",
      dataType: "json",
      cache: false,
      contentType: false,
      processData: false,
      data: formData,
      beforeSend: () => {
        buttonSave.attr("disabled", "true");
        buttonSave.html("Processing...");
      },
    });

    req.done((data) => {
      try {
        const responseJSON = { ...data };
        switch (responseJSON.message) {
          case "success":
            buttonSave.removeAttr("disabled");
            buttonSave.html("Save");
            buttonUpload.removeAttr("disabled");
            break;
          case "error":
            alert(`${responseJSON?.data}`);
            buttonSave.removeAttr("disabled");
            buttonSave.html("Save");
            break;
          default:
            alert(`An error occurred.`);
            buttonSave.removeAttr("disabled");
            buttonSave.html("Login");
        }
      } catch (e) {
        uploadFeedback.html(`An error occurred.`);
        buttonSave.removeAttr("disabled");
        buttonSave.html("Save");
      }
    });

    req.fail((error, textStatus) => {
      console.log("***************", error);
      uploadFeedback.html(`An error occurred, upload failed.`);
      buttonUpload.removeAttr("disabled");
      buttonUpload.html("Upload");
    });
  };
}
