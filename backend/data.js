import bcrypt from 'bcryptjs';

const data = {
    
    users: [
        {
            name: "Firat A", 
            email: "firat@hotmail.com",
            password: bcrypt.hashSync("admin"),  //I will hash password
            address: "115 57 Stockholm, Sweden",
            phone: "+46/76432112",
            image: "./assets/images/seller/js.png",
            isAdmin: true
        },

        {
            name: "Admin F", 
            email: "adminf@hotmail.com",
            password: bcrypt.hashSync("john"),  //I will hash password
            address: "110 23 Malmö, Sweden",
            phone: "+46/735675689",
            image: "./assets/images/seller/sellers.png",
            isAdmin: false
        }
    ],
    
    category: [
        {
            name: "Phone"
        },
        {
            name: "Computer"
        }
    ],

    products: [
        {
            name: "Iphone 14", 
            slug: "iphone 14",
            category: "Phone",
            description: "Lorem ipsum asdasdadasdvcxvssdgfsdfsdffdsfdsf",
            price: "10000 ",
            image: "./assets/images/products/iphone14.jpg",
            seller: "Firat A"
        },

        {
            name: "Macbook Pro", 
            slug: "macbook pro",
            category: "Computer",
            description: "Lorem ipsum dolor sit amet sadsd asdasdadasdvcxvssdgfsdfsdffdsfdsf",
            price: "12000 ",
            image: "./assets/images/products/macbook1.jpg",
            seller: "Admin F"
        },
    ]
}

export default data;