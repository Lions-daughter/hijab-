const shopping= document.querySelector(".shopping");
const closeshopping= document.querySelector(".closeshopping");
const list= document.querySelector(".list");
const listcard= document.querySelector(".listcard");
const total= document.querySelector(".total");
const body= document.querySelector("body");
const quantity= document.querySelector(".quantity");

shopping.addEventListener("click", () => {
    body.classList.add("active")
})
closeshopping.addEventListener("click", () => {
    body.classList.remove("active")
})

let products=[
    {
        id:1,
        name:"PLAIN CHIFFON- BISCUIT",
        images: "biscuits-chi.jpg",
        price: 750
    },
    {
        id:2,
        name:"PLAIN CHIFFON- BLACK",
        images: "black-chi.jpg",
        price: 750
    },
    {
        id:3,
        name:"PLAIN CHIFFON- BURGUNDY",
        images: "burhundy-chi.jpg",
        price: 750
    },
    {
        id:5,
        name:"PLAIN CHIFFON- CRAL BLISS",
        images: "cral bliss-chi.jpg",
        price: 750
    },
    {
        id:6,
        name:"PLAIN CHIFFON- CREAMY BRULE",
        images: "creme brulee-chi.jpg",
        price: 750
    },
    {
        id:7,
        name:"PLAIN CHIFFON- EGGPLANT",
        images: "eggplant-chi.jpg",
        price: 750
    },
    {
        id:8,
        name:"PLAIN CHIFFON- EMRALD GREEN",
        images: "emerald green-chi.jpg",
        price: 4000
    },
    {
        id:9,
        name:"PLAIN CHIFFON- FLAMINGO",
        images: "flamingo-chi.jpg",
        price: 5000
    },
    {
        id:10,
        name:"PLAIN CHIFFON- MERGENDA",
        images: "magenta-chi.jpg",
        price: 750
    },
    {
        id:11,
        name:"PLAIN CHIFFON- MAHROON",
        images: "mahroon-chi.jpg",
        price: 750
    },
    {
        id:12,
        name:"PLAIN CHIFFON- MARIGOLD",
        images: "marigolg-chi.jpg",
        price: 6000
    },
    {
        id:13,
        name:"PLAIN CHIFFON- MIDNIGHT BLUE",
        images: "midnight blue-chi.jpg",
        price: 750
    },
    {
        id:14,
        name:"PLAIN CHIFFON- MOCHA",
        images: "mocha-chi.jpg",
        price: 750
    },
    {
        id:15,
        name:"PLAIN CHIFFON- MUSTARD",
        images: "mustard-chi.jpg",
        price: 750
    },
    {
        id:16,
        name:"PLAIN CHIFFON- NAVY",
        images: "navy-chi.jpg",
        price:750
    },
    {
        id:17,
        name:"PLAIN CHIFFON- OLIVE GREEN",
        images: "olive green-chi.jpg",
        price: 750
    },
    {
        id:18,
        name:"PLAIN CHIFFON- SMOOK",
        images: "smokt-chi.jpg",
        price: 750
    },
    {
        id:19,
        name:"PLAIN CHIFFON- SMOOKY GREY",
        images: "smooky grey.jpg",
        price: 750
    },
    

]

let listcards=[];

const initApp=() => {
    products.forEach((value,key) =>{
        let newDiv= document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML=`
        <img src="img/${value.images}">
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCart(${key})">Add To Cart </button>
        `;
        
        list.appendChild(newDiv)
    })
}
      initApp()

      const addToCart=(key) => {
        if(listcards[key] ==null){
            listcards[key]= JSON.parse(JSON.stringify(products[key]));
            listcards[key].quantity=1
        }
        reloadCard();
      }
      const reloadCard = () => {
        listcard.innerHTML = "";
        let count = 0;
        let totalPrice = 0;
    
        listcards.forEach((value, key) => {
            if (value != null) {
                totalPrice += value.price * value.quantity;
                count += value.quantity;
    
                let newDiv = document.createElement("li");
                newDiv.innerHTML = `
                <div><img src="img/${value.images}"></div>
                <div class="cardTitle">${value.name}</div>
                <div class="cardPrice">${(value.price * value.quantity).toLocaleString()}</div>
    
                <div>
                   <button style="background-color:gray"
                   class="cardButton" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                   <div class="count">${value.quantity}</div>
                   <button style="background-color:gray"
                   class="cardButton" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
                `;
                listcard.appendChild(newDiv);
            }
        });
    
        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
    };
    
      const changeQuantity= (key, quantity) => {
        if(quantity == 0){
            delete listcards[key]
        }
        else{
            listcards[key].quantity = quantity;
            listcards[key].price = quantity * products[key].price
        }
        reloadCard()
      }