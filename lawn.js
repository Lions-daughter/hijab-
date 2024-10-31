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
        name:"TURKISH LAWN HIJAB-PEAL PINK",
        images: "a1.jpg",
        price: 700
    },
    {
        id:2,
        name:"TURKISH LAWN HIJAB - BLUE",
        images: "a2.jpg",
        price: 700
    },
    {
        id:3,
        name:"TURKISH LAWN HIJAB - MAHROON",
        images: "a3.jpg",
        price: 700
    },
    {
        id:4,
        name:"TURKISH LAWN HIJAB - BEIGE",
        images: "a4.jpg",
        price:700,
    },
    {
        id:5,
        name:"TURKISH LAWN HIJAB - PEACH",
        images: "a5.jpg",
        price: 700
    },
    {
        id:6,
        name:"TURKISH LAWN HIJAB - SKY BLUE",
        images: "a6.jpg",
        price: 700
    },
    {
        id:7,
        name:"TURKISH LAWN HIJAB - GREY",
        images: "a7.jpg",
        price: 700
    },
    {
        id:8,
        name:"TURKISH LAWN HIJAB - BLUSIH",
        images: "a8.jpg",
        price: 700
    },
    {
        id:9,
        name:"TURKISH LAWN HIJAB - ORANGE",
        images: "a9.jpg",
        price: 700
    },
    {
        id:10,
        name:"TURKISH LAWN HIJAB - BABY PINK",
        images: "a10.jpg",
        price: 700
    },
    {
        id:11,
        name:"TURKISH LAWN HIJAB - LIGHT BLUE",
        images: "a11.jpg",
        price: 700
    },
    {
        id:12,
        name:"TURKISH LAWN HIJAB - GREEN",
        images: "a12.jpg",
        price: 700
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