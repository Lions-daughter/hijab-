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
        images: "1.jpg",
        price: 900
    },
    {
        id:2,
        name:"TURKISH LAWN HIJAB - BLUE",
        images: "2.jpg",
        price: 900
    },
    {
        id:3,
        name:"TURKISH LAWN HIJAB - MAHROON",
        images: "3.jpg",
        price: 900
    },
    {
        id:4,
        name:"TURKISH LAWN HIJAB - BEIGE",
        images: "4.jpg",
        price:900,
    },
    {
        id:5,
        name:"TURKISH LAWN HIJAB - PEACH",
        images: "5.jpg",
        price: 900
    },
    {
        id:6,
        name:"TURKISH LAWN HIJAB - SKY BLUE",
        images: "6.jpg",
        price: 900
    },
    {
        id:7,
        name:"TURKISH LAWN HIJAB - GREY",
        images: "7.jpg",
        price:900
    },
    {
        id:8,
        name:"TURKISH LAWN HIJAB - BLUSIH",
        images: "8.jpg",
        price: 900
    },
    {
        id:9,
        name:"TURKISH LAWN HIJAB - ORANGE",
        images: "9.jpg",
        price: 900
    },
    {
        id:10,
        name:"TURKISH LAWN HIJAB - BABY PINK",
        images: "10.jpg",
        price: 900
    },
    {
        id:11,
        name:"TURKISH LAWN HIJAB - LIGHT BLUE",
        images: "11.jpg",
        price: 900
    },
    {
        id:12,
        name:"TURKISH LAWN HIJAB - GREEN",
        images: "12.jpg",
        price: 900
    },
    {
        id:10,
        name:"TURKISH LAWN HIJAB - BABY PINK",
        images: "13.jpg",
        price: 900
    },
    {
        id:11,
        name:"TURKISH LAWN HIJAB - LIGHT BLUE",
        images: "14.jpg",
        price: 900
    },
    {
        id:12,
        name:"TURKISH LAWN HIJAB - GREEN",
        images: "15.jpg",
        price: 900
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