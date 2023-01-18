const previewImg = document.getElementById('sofaImg')
const productAnimation =document.getElementById('sofa-gif')

const openView = document.getElementById('buttonOpen')
const closeView = document.getElementById('close-view')

openView.addEventListener('click', () => {
    openView.classList.add("hide");
    closeView.classList.remove("hide");

    previewImg.classList.add("hide");
    productAnimation.classList.remove("hide");
}) 

closeView.addEventListener('click', () => {
    openView.classList.remove("hide");
    closeView.classList.add("hide");

    previewImg.classList.remove("hide");
    productAnimation.classList.add("hide");
})

/* forma fragmentada do código acima*/

// function openAnimation () {
//     openView.classList.add("hide")
//     closeView.classList.remove("hide")

//     previewImg.classList.add("hide")
//     productAnimation.classList.remove("hide")
// }

// function closeAnimation () {
//     openView.classList.remove("hide")
//     closeView.classList.add("hide")

//     previewImg.classList.remove("hide")
//     productAnimation.classList.add("hide")
// }

// openView.addEventListener("click", openAnimation)
// closeView.addEventListener("click", closeAnimation)