if (window.location.pathname === `${Config.PATHNAME}/real-estate-edit`) {
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
  const imagesContainer = $("#images-container");
  const searchParams = new URLSearchParams(window.location.search);

  //variables
  var estateId = searchParams.get("estate-id");
  var images = [];
  var isBusy = false;

  //listeners
  buttonLogin.click(() => {
    let _res = validateLogin();
    if (_res === "valid") {
      login();
    } else {
      alert(_res);
    }
  });

  buttonUpload.click(() => {
    let _res = validateUploadImage();
    if (_res === "valid") {
      uploadImage();
    } else {
      alert(_res);
    }
  });

  buttonSave.click(() => {
    let _res = validateFormProperty();
    if (_res === "valid") {
      updateProperty();
    } else {
      alert(_res);
    }
  });

  inputImage.on("change", (e) => {
    if (e?.target?.files?.[0] === undefined || e?.target?.files?.[0] === null) {
      buttonUpload.attr("disabled", "true");
    } else {
      buttonUpload.removeAttr("disabled");
    }
  });

  buttonFinish.click(() => {
    window.location.href = `${Config.PATHNAME}/real-estate`;
  });

  const addDeleteImageListener = (imageId) => {
    $(`#delete-image-${imageId}`).click(() => {
      if (confirm("Are you sure you want to delete this image?")) {
        deleteImage(imageId);
      }
    });
  };

  const addAllImagesDeleteClickListeners = () => {
    images.forEach((image) => {
      $(`#delete-image-${image?.imageId}`).click(() => {
        if (confirm("Are you sure you want to delete this image?")) {
          deleteImage(image?.imageId);
        }
      });
    });
  };

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

  const validateUploadImage = () => {
    let file = inputImage[0].files[0];

    if (file !== undefined && file !== null) {
      let _fileExt = file.name.split(".").pop().toLowerCase();

      if (_fileExt !== "png" && _fileExt !== "jpg" && _fileExt !== "jpeg") {
        return "Invalid file type selected for cover image. only png, jpg and jpeg files allowed";
      }
      if (parseFloat(file.size / 1000000) > 1) {
        return `Maximum file size for image is 1 megabyte (mb)`;
      }
      return "valid";
    } else {
      return "Select file";
    }
  };

  const showForm = () => {
    authView.css("display", "none");
    formView.css("display", "flex");
  };

  //api calls
  const getProperty = () => {
    var _link = `./api/getProperties.php?estate-id=${estateId}}`;

    var req = $.ajax({
      url: _link,
      method: "GET",
      dataType: "json",
      cache: false,
      contentType: false,
      processData: false,
      beforeSend: () => {
        buttonLogin.attr("disabled", "true");
      },
    });

    req.done((data) => {
      try {
        const responseJSON = { ...data };
        switch (responseJSON.message) {
          case "success":
            showForm();
            let response = responseJSON.data?.[0];
            images = response?.images;
            let _imagesHtml = "";

            images?.forEach((image) => {
              _imagesHtml = `
                    ${_imagesHtml}
                    <div class="estate-image" id="estate-image-${image?.imageId}">
                        <img src=".${image?.imagePath}" alt="image">
                        <div class="close-icon" id="delete-image-${image?.imageId}">
                            <i class="fas fa-times"></i>
                        </div>
                    </div>
                    `;
            });

            imagesContainer.html(_imagesHtml);
            inputTitle.val(response?.title);
            inputCategory.val(response?.category);
            inputLocation.val(response?.location);
            inputDescription.val(response?.description);
            addAllImagesDeleteClickListeners();
            break;
          case "error":
            console.error("********", responseJSON?.data);
            break;
          default:
            console.error("********", responseJSON?.data);
        }
      } catch (e) {
        console.error("********", e);
      }
    });

    req.fail((error, textStatus) => {
      console.log("***************", error);
    });
  };

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
            getProperty();
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
        alert(`An error occurred, upload failed.`);
        buttonUpload.removeAttr("disabled");
        buttonUpload.html("Login");
      }
    });

    req.fail((error, textStatus) => {
      console.log("***************", error);
      alert(`An error occurred, upload failed.`);
      buttonUpload.removeAttr("disabled");
      buttonUpload.html("UPLOAD");
    });
  };

  const updateProperty = () => {
    var _link = "./api/updateProperty.php";

    let formData = new FormData();
    formData.append("title", inputTitle.val());
    formData.append("description", inputDescription.val());
    formData.append("category", inputCategory.find(":selected").val());
    formData.append("location", inputLocation.val());
    formData.append("estate-id", estateId);

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
            buttonSave.html("SAVE CHANGES");
            alert(responseJSON?.data);
            break;
          case "error":
            alert(`${responseJSON?.data}`);
            buttonSave.removeAttr("disabled");
            buttonSave.html("SAVE CHANGES");
            break;
          default:
            alert(`An error occurred.`);
            buttonSave.removeAttr("disabled");
            buttonSave.html("SAVE CHANGES");
        }
      } catch (e) {
        alert(`An error occurred.`);
        buttonSave.removeAttr("disabled");
        buttonSave.html("SAVE CHANGES");
      }
    });

    req.fail((error, textStatus) => {
      console.log("***************", error);
      alert(`An error occurred, upload failed.`);
      buttonUpload.removeAttr("disabled");
      buttonUpload.html("SAVE CHANGES");
    });
  };

  const uploadImage = () => {
    var _link = "./api/uploadPropertyImage.php";

    let formData = new FormData();
    formData.append("image", inputImage[0].files[0]);
    formData.append("estate-id", estateId);

    var req = $.ajax({
      url: _link,
      method: "POST",
      dataType: "json",
      cache: false,
      contentType: false,
      processData: false,
      data: formData,
      beforeSend: () => {
        buttonUpload.attr("disabled", "true");
        buttonUpload.html("Uploading...");
      },
    });

    req.done((data) => {
      try {
        const responseJSON = { ...data };
        switch (responseJSON.message) {
          case "success":
            buttonUpload.removeAttr("disabled");
            buttonUpload.html("UPLOAD");
            buttonUpload.removeAttr("disabled");
            let _uploadedImage = responseJSON?.data?.[0];
            images.push(_uploadedImage);

            imagesContainer.append(`
                <div class="estate-image" id="estate-image-${_uploadedImage?.imageId}">
                    <img src=".${_uploadedImage?.imagePath}" alt="image">
                    <div class="close-icon" id="delete-image-${_uploadedImage?.imageId}">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
            `);

            addDeleteImageListener(_uploadedImage?.imageId);
            inputImage.val("");
            buttonFinish.removeAttr("disabled");
            break;
          case "error":
            alert(`${responseJSON?.data}`);
            buttonUpload.removeAttr("disabled");
            buttonUpload.html("UPLOAD");
            break;
          default:
            alert(`An error occurred.`);
            buttonUpload.removeAttr("disabled");
            buttonUpload.html("UPLOAD");
        }
      } catch (e) {
        alert(`An error occurred.`);
        buttonUpload.removeAttr("disabled");
        buttonUpload.html("UPLOAD");
      }
    });

    req.fail((error, textStatus) => {
      console.log("***************", error);
      alert(`An error occurred, upload failed.`);
      buttonUpload.removeAttr("disabled");
      buttonUpload.html("UPLOAD");
    });
  };

  const deleteImage = (imageId) => {
    var _link = "./api/deletePropertyImage.php";

    let formData = new FormData();
    formData.append("image-id", imageId);

    var req = $.ajax({
      url: _link,
      method: "POST",
      dataType: "json",
      cache: false,
      contentType: false,
      processData: false,
      data: formData,
      beforeSend: () => {
        isBusy = true;
      },
    });

    req.done((data) => {
      try {
        const responseJSON = { ...data };
        switch (responseJSON.message) {
          case "success":
            isBusy = false;
            $(`#estate-image-${imageId}`).remove();
            break;
          case "error":
            alert(`${responseJSON?.data}`);
            isBusy = false;
            break;
          default:
            alert(`An error occurred.`);
            isBusy = false;
        }
      } catch (e) {
        alert(`An error occurred.`);
        isBusy = false;
      }
    });

    req.fail((error, textStatus) => {
      console.log("***************", error);
      isBusy = false;
    });
  };
}
