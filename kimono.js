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
        name:"TEAL GREEN",
        images: "kimono 1.jpg",
        price: 4000
    },
    {
        id:2,
        name:"WHITE BLANCO",
        images: "kimono 2.jpg",
        price: 5000
    },
    {
        id:3,
        name:"SEA BLUE",
        images: "kimono 3.jpg",
        price: 5500
    },
    {
        id:4,
        name:"BLACK EMBROIDERED",
        images: "kimono 4.jpg",
        price: 3500,
    },
    {
        id:5,
        name:"WHITE PEARL",
        images: "kimono 5.jpg",
        price: 4000
    },
    {
        id:6,
        name:"BURN BLUE",
        images: "kimono 6.jpg",
        price: 5300
    },
    {
        id:7,
        name:"GREY GREECE",
        images: "kimono 7.jpg",
        price: 5500
    },
    {
        id:8,
        name:"CHARCOAL GRAY",
        images: "kimono 8.jpg",
        price: 4000
    },
    {
        id:9,
        name:"WHITE EMBELLISHED",
        images: "kimono 9.jpg",
        price: 5000
    },
    {
        id:10,
        name:"PURPLE PLEASANT",
        images: "kimono 10.jpg",
        price: 4500
    },
    {
        id:11,
        name:"PEACOCK EMBROIDERED",
        images: "kimono 11.jpg",
        price: 5500
    },
    {
        id:12,
        name:"PARISH STONES",
        images: "kimono.jpg",
        price: 6000
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
        `
        
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