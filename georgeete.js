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
        name:"PLAIN GEORGETTE HIJAB - BLUSH",
        images: "g-blush.jpg",
        price: 700
    },
    {
        id:2,
        name:"PLAIN GEORGETTE HIJAB - CREAM PEACH",
        images: "g-creamt peach.jpg",
        price: 700
    },
    {
        id:3,
        name:"PLAIN GEORGETTE HIJAB - GOLD BEIGE",
        images: "g-goldeb beige.jpg",
        price: 700
    },
    {
        id:4,
        name:"PLAIN GEORGETTE HIJAB - HENNA",
        images: "g-heena.jpg",
        price: 700,
    },
    {
        id:5,
        name:"PLAIN GEORGETTE HIJAB - IVORY",
        images: "g-ivory.jpg",
        price: 700
    },
    {
        id:6,
        name:"PLAIN GEORGETTE HIJAB - KHAKI",
        images: "g-khaki.jpg",
        price: 700
    },
    {
        id:7,
        name:"PLAIN GEORGETTE HIJAB - MAHROON",
        images: "g-mahroon.jpg",
        price: 700
    },
    {
        id:8,
        name:"PLAIN GEORGETTE HIJAB - MINT",
        images: "g-mint.jpg",
        price: 700
    },
    {
        id:9,
        name:"PLAIN GEORGETTE HIJAB - NAVY BLUE",
        images: "g-navy blue.jpg",
        price: 700
    },
    {
        id:10,
        name:"PLAIN GEORGETTE HIJAB - STEEL GREY",
        images: "g-steel grey.jpg",
        price: 700
    },
    {
        id:11,
        name:"PLAIN GEORGETTE HIJAB - TEAL",
        images: "g-teal.jpg",
        price: 700
    },
    {
        id:12,
        name:"PLAIN GEORGETTE HIJAB - YALE",
        images: "g-yale.jpg",
        price: 700
    },
    {
        id:13,
        name:"PLAIN GEORGETTE HIJAB - WHITE",
        images: "georget white.jpg",
        price: 700
    },
    {
        id:14,
        name:"PLAIN GEORGETTE HIJAB - NUDE PINK",
        images: "nude pink-g.jpg",
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