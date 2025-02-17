const loadCategories = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayData(data.categories))
}

const displayData = (category) => {
    console.log(category)
}
loadCategories()