
const data = 
{
    "Новость 1" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium.",


    "Новость 2" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, alias <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium.",


    "Новость 3" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium."
};

let buttons = document.querySelectorAll("button");

for(let button of buttons)
{
    let index = 0;
    button.addEventListener("click", function(){
        createPopupElement(this.parentElement);
        index++;
    });
}

function createPopupElement(newsBlock)
{
    let title = newsBlock.querySelector("h2").textContent;

    let popupWrapper = document.createElement("div");
    let popupElement = document.createElement("article");
    let titleElemetn = document.createElement("h1");
    let textElement = document.createElement("p");

    popupWrapper.classList.add("popupWrapper");
    popupElement.classList.add("popupElement");
    titleElemetn.classList.add("popupTitleElement");

    titleElemetn.textContent =title;
    textElement.innerHTML = title + ": " + data[title];

    popupWrapper.appendChild(popupElement);
    popupElement.appendChild(titleElemetn);
    popupElement.appendChild(textElement);

    document.body.appendChild(popupWrapper);

    addPopupEvent();

}

function addPopupEvent()
{
    let popupElement = document.querySelector(".popupElement");
    let popupWrapper = document.querySelector(".popupWrapper");

    popupElement.addEventListener('click', event =>{
        event._isClickOnElement = true;
    });

    popupWrapper.addEventListener('click', event=>{
        if(event._isClickOnElement) return;
        popupWrapper.remove();
    })
}
