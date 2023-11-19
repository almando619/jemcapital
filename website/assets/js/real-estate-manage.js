if (window.location.pathname === `${Config.PATHNAME}/real-estate-manage`) {
  const authView = $("#estate-login-view");
  const tableView = $("#estate-table-view");

  const buttonLogin = $("#btn-login");
  const inputPassword = $("#input-password");

  //variables
  var isBusy = false;
  var properties = [];

  //listeners
  buttonLogin.click(() => {
    let _res = validateLogin();
    if (_res === "valid") {
      login();
    } else {
      alert(_res);
    }
  });

  const addDeleteListItemListeners = () => {
    properties.forEach((property) => {
      $(`#delete-estate-${property?.estateId}`).click(() => {
        if (
          confirm(
            "Are you sure you wan to delete this property? This action is irreversible."
          )
        ) {
          deleteProperty(property?.estateId);
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

  const showTable = () => {
    authView.css("display", "none");
    tableView.css("display", "flex");
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
            buttonLogin.html("LOGIN");
            inputPassword.val("");
            showTable();
            break;
          case "error":
            alert(`${responseJSON?.data}`);
            buttonLogin.removeAttr("disabled");
            buttonLogin.html("LOGIN");
            break;
          default:
            alert(`An error occurred, login failed.`);
            buttonLogin.removeAttr("disabled");
            buttonLogin.html("LOGIN");
        }
      } catch (e) {
        alert(`An error occurred, upload failed.`);
        buttonLogin.removeAttr("disabled");
        buttonLogin.html("LOGIN");
      }
    });

    req.fail((error, textStatus) => {
      console.log("***************", error);
      alert(`An error occurred, upload failed.`);
      buttonUpload.removeAttr("disabled");
      buttonUpload.html("UPLOAD");
    });
  };

  const deleteProperty = (estateId) => {
    var _link = "./api/deleteProperty.php";

    let formData = new FormData();
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
        isBusy = true;
      },
    });

    req.done((data) => {
      try {
        const responseJSON = { ...data };
        switch (responseJSON.message) {
          case "success":
            isBusy = false;
            alert(responseJSON?.data);
            $(`#estate-list-item-${estateId}`).remove();
            break;
          case "error":
            isBusy = false;
            alert(`${responseJSON?.data}`);
            break;
          default:
            isBusy = false;
            alert(`An error occurred, delete failed.`);
        }
      } catch (e) {
        isBusy = false;
        alert(`An error occurred, delete failed.`);
      }
    });

    req.fail((error, textStatus) => {
      console.log("***************", error);
      alert(`An error occurred, delete failed.`);
      isBusy = false;
    });
  };

  //api calls
  const getProperties = () => {
    var _link = "./api/getProperties.php";

    var req = $.ajax({
      url: _link,
      method: "GET",
      dataType: "json",
      cache: false,
      contentType: false,
      processData: false,
      beforeSend: () => {
        tableView.html(`
            <div style="height:300px" class="text-align-center text-muted flex-row align-items-center justify-content-center" >
                Loading...
            </div>
       `);
      },
    });

    req.done((data) => {
      try {
        const responseJSON = { ...data };
        switch (responseJSON.message) {
          case "success":
            properties = responseJSON?.data;
            let _html = "";

            properties.forEach((property) => {
              _html = `
                ${_html}
               
                `;
            });

            tableView.html(_html);

            addDeleteListItemListeners();
            break;
          case "error":
            console.error("********", responseJSON?.data);
            tableView.html(`
                <div style="height:300px" class="text-align-center text-muted flex-row align-items-center justify-content-center" >
                    Something went wrong. Failed to load properties.
                </div>
            `);
            break;
          default:
            console.error("********", responseJSON?.data);
            tableView.html(`
                <div style="height:300px" class="text-align-center text-muted flex-row align-items-center justify-content-center" >
                    Something went wrong. Failed to load properties.
                </div>
            `);
        }
      } catch (e) {
        console.error("********", e);
        tableView.html(`
            <div style="height:300px" class="text-align-center text-muted flex-row align-items-center justify-content-center" >
                Something went wrong. Failed to load properties.
            </div>
        `);
      }
    });

    req.fail((error, textStatus) => {
      console.log("***************", error);
      tableView.html(`
        <div style="height:300px" class="text-align-center text-muted flex-row align-items-center justify-content-center" >
            Something went wrong. Failed to load properties.
        </div>
      `);
    });
  };

  $(document).ready(() => {
    getProperties();
  });
}
