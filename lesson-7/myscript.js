let imagesLoading = document.querySelectorAll("img[data-src]");

const imageOptions = {
    threshold: 1,
    rootMargin: "25px 0"
};

const loadImg = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImg(item.target);
          observer.unobserve(item.target);
        }
      });
    }, imageOptions);
    imagesLoading.forEach((img) => {
      observer.observe(img);
    });
  } 
else {
    imagesLoading.forEach((img) => {
      loadImg(img);
    });
  }
  
  