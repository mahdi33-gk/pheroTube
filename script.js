const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayData(data.categories));
};

const displayData = (category) => {
  category.forEach((item) => {
    const buttonContainer = document.getElementById("btn-container");
    const button = document.createElement("button");
    button.className = "px-3 py-1 text-textCl rounded-md font-thin bg-littleBg";
    button.innerText = item.category;
    buttonContainer.appendChild(button);
  });
};
loadCategories();

const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data1) => loadvideoDisplay(data1.videos));
};

const loadvideoDisplay = (video) => {
  console.log(video);
  video.forEach((item) => {
    const container = document.getElementById("videos-container");
    const divVideo = document.createElement("div");
    divVideo.className = "card card-compact px-3 py-2";
    divVideo.innerHTML = `
   <figure>
     <img
      src="${item.thumbnail}"
      alt="Shoes" />
   </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>`;
    container.append(divVideo);
  });
};
loadVideos();
