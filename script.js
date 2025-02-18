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
   <figure class="h-[200px]">
     <img class="object-cover h-full w-full"
      src="${item.thumbnail}"
      alt="Shoes" />
   </figure>
  <div class="card-body">
    
    
    <div class="flex gap-3 ">
    <div class="w-10 h-10"> <img class=" rounded-full object-cover w-full  h-full" src="${item.authors[0].profile_picture}" alt=""></div>
    <div><h2 class="card-title text-[15px]">${item.title}</h2>
    <div>
      <div></div>
      <div><p class="text-[14px] text-textCl">${item.authors[0].profile_name}  <span>${item.authors[0]?.verified === true ? `<i class="ml-[2px] text-blue-800 fa-solid fa-circle-check"></i>` : ''}</span></p>
    <p class="text-[14px] text-textCl mt-1">${item.others.views}</p></div> 
    </div>
    </div>
    
    </div>
    
    
  </div>`;
    container.append(divVideo);
  });
};
loadVideos();
