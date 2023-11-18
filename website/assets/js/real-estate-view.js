if (window.location.pathname === `${Config.PATHNAME}/real-estate-view`) {
  const largeImage = $("#large-image");
  const imagesContainer = $("#images-container");
  const title = $("#title");
  const location = $("#location").find("span");
  const category = $("#category").find("span");
  const description = $("#description").find("p");

  const searchParams = new URLSearchParams(window.location.search);

  //variables
  var images = [];

  //methods
  const addSmallImagesClickListeners = () => {
    images.forEach((image) => {
      $(`#image-${image.imageId}`).click(() => {
        largeImage.attr("src", `./${image.imagePath}`);
      });
    });
  };

  //api calls
  const getProperty = () => {
    var _link = `./api/getProperties.php?estate-id=${searchParams.get(
      "estate-id"
    )}`;

    var req = $.ajax({
      url: _link,
      method: "GET",
      dataType: "json",
      cache: false,
      contentType: false,
      processData: false,
      beforeSend: () => {},
    });

    req.done((data) => {
      try {
        const responseJSON = { ...data };
        switch (responseJSON.message) {
          case "success":
            let response = responseJSON.data?.[0];
            images = response?.images;

            let _imagesHtml = "";

            images?.forEach((image) => {
              _imagesHtml = `
                ${_imagesHtml}
                <div class="estate-image-small" id="image-${image?.imageId}">
                  <img src="./${image?.imagePath}" alt="image">
                </div>
                `;
            });

            imagesContainer.html(_imagesHtml);
            title.html(response?.title);
            category.html(response?.category);
            location.html(response?.location);
            description.html(response?.description);
            largeImage.attr("src", `./${images?.[0]?.imagePath}`);
            addSmallImagesClickListeners();
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

  $(document).ready(() => {
    if (searchParams.has("estate-id")) {
      getProperty();
    }
  });
}
