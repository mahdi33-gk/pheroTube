const loadCategories = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayData(data.categories))
}

const displayData = (category) => {
    category.forEach(item => {
        const buttonContainer = document.getElementById('btn-container');
        const button = document.createElement('button');
        button.className = 'px-3 py-1 text-textCl rounded-md font-thin bg-littleBg';
        button.innerText = item.category;
        buttonContainer.appendChild(button);
    });
}
loadCategories();


const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => loadvideoDisplay(data))
}

const loadvideoDisplay = (video) =>{
    video.forEach(item =>{
        console.log(item)
    })
}
loadVideos()