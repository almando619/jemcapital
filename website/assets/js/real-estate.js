if (
  window.location.pathname === `${Config.PATHNAME}/real-estate` ||
  window.location.pathname === `${Config.PATHNAME}/home`
) {
  const propertiesContainer = $("#properties-container");

  //variables
  var properties = [];

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
        propertiesContainer.html(`
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
            properties = responseJSON?.data?.filter((p) => p?.status === "A");
            let _html = "";

            properties.forEach((property) => {
              _html = `
                ${_html}
                <div class="container-50 p-10">
                    <a href="${Config.PATHNAME}/real-estate-view?estate-id=${
                property?.estateId
              }">
                        <div class="estate-item">
                            <div class="image-container">
                                <img src="./${
                                  property?.images?.[0]?.imagePath
                                }" alt="image">
                                <div class="shader"></div>
                            </div>
                            <div class="info">
                                <h3 class="title">${trimText({
                                  text: property?.title,
                                  length: 40,
                                })}</h3>
                                <div class="location">
                                    <i class="fas fa-map-marker-alt mr-5 text-accent"></i>
                                    <span>
                                        ${trimText({
                                          text: property?.location,
                                          length: 25,
                                        })}
                                    </span>
                                </div>
                                <div class="category">
                                    <i class="fa-solid fa-clipboard mr-5 text-accent"></i>
                                    <span>
                                        ${property?.category}
                                    </span>
                                </div>
                                <p class="mt-10 description">
                                    ${trimText({
                                      text: property?.description,
                                      length: 150,
                                    })}
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                `;
            });

            propertiesContainer.html(_html);

            break;
          case "error":
            console.error("********", responseJSON?.data);
            propertiesContainer.html(`
                <div style="height:300px" class="text-align-center text-muted flex-row align-items-center justify-content-center" >
                    Something went wrong. Failed to load properties.
                </div>
            `);
            break;
          default:
            console.error("********", responseJSON?.data);
            propertiesContainer.html(`
                <div style="height:300px" class="text-align-center text-muted flex-row align-items-center justify-content-center" >
                    Something went wrong. Failed to load properties.
                </div>
            `);
        }
      } catch (e) {
        console.error("********", e);
        propertiesContainer.html(`
            <div style="height:300px" class="text-align-center text-muted flex-row align-items-center justify-content-center" >
                Something went wrong. Failed to load properties.
            </div>
        `);
      }
    });

    req.fail((error, textStatus) => {
      console.log("***************", error);
      propertiesContainer.html(`
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
