import image from "../image/ceu-azul.jpg";

class Image {
  inserImage() {
    const img = document.createElement("img");
    img.src = image;
    img.width = 200;

    document.querySelector("body").appendChild(img);
  }
}

export default Image;
