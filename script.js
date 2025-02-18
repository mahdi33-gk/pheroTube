const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayData(data.categories));
};

const removeActiveclass = () => {};

const loadCategoryVideos = (id) => {
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      const removeActive = document.getElementsByClassName("category-Btn");
      for (let btdn of removeActive) {
        btdn.classList.remove("active");
      }
      let activeBtn = document.getElementById(`btn-${id}`);
      console.log(activeBtn);

      activeBtn.classList.add("active");
      loadvideoDisplay(data.category);
    });
};

const displayData = (category) => {
  category.forEach((item) => {
    const buttonContainer = document.getElementById("btn-container");
    const buttonDiv = document.createElement("div");
    buttonDiv.innerHTML = `
    <button id="btn-${item.category_id}" onclick="loadCategoryVideos(${item.category_id})" class="btn px-3 category-Btn py-1 text-textCl rounded-md font-thin bg-littleBg">${item.category}</button>
    `;

    buttonContainer.appendChild(buttonDiv);
  });
};
loadCategories();

const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data1) => loadvideoDisplay(data1.videos));
};

const loadvideoDisplay = (video) => {
  const container = document.getElementById("videos-container");
  container.innerHTML = "";

  if (video.length == 0) {
    container.innerHTML = `<div class="flex  max-w-full col-span-1 md:col-span-4  mx-auto flex-col justify-center items-center gap-y-10">
    <h1>No content</h1> <img class="flex h-[400px] items-center justify-center" src="Icon.png" alt=""></div>`;
  }
  video.forEach((item) => {
    const divVideo = document.createElement("div");
    divVideo.className = "card card-compact px-3 py-2";
    divVideo.innerHTML = `
   <figure class="h-[200px] relative">
     <img class="object-cover h-full w-full"
      src="${item.thumbnail}"
      alt="Shoes" />
      ${
        item.others.posted_date?.length === 0
          ? " "
          : `<span class="right-2 bottom-2 text-white text-sm p-1 bg-black rounded-md absolute">${timeCounter(
              item.others.posted_date
            )}</span>`
      }
      
   </figure>
  <div class="card-body">
    
    
    <div class="flex gap-3 ">
    <div class="w-10 h-10"> <img class=" rounded-full object-cover w-full  h-full" src="${
      item.authors[0].profile_picture
    }" alt=""></div>
    <div><h2 class="card-title text-[15px]">${item.title}</h2>
    <div>
      <div></div>
      <div><p class="text-[14px] text-textCl">${
        item.authors[0].profile_name
      }  <span>${
      item.authors[0]?.verified === true
        ? `<i class="ml-[2px] text-blue-800 fa-solid fa-circle-check"></i>`
        : ""
    }</span></p>
    <p class="text-[14px] text-textCl mt-1">${item.others.views}</p></div> 
    </div>
    </div>
    
    </div>
    
    
  </div>`;
    container.append(divVideo);
  });
};
loadVideos();

// timeGeneratorFunction
function timeCounter(time) {
  let hour = parseInt(time / 3600);
  let min = parseInt(time % 3600);
  let sec = parseInt(min / 60);
  return `${hour} hrs ${min} min ${sec} ago`;
}
