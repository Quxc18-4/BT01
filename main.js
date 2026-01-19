// let Student = function(name, familyName, age, score){ //Khong dung "=>" vi se kh dung dc this.
//     this.name = name;
//     this.familyName = familyName;
//     this.age = age;
//     this.score = score;
//     getFullName = function(){
//         return this.name + " " + this.familyName;
//     }
// }

// let student1 = new Student("Quoc", "Danh", 20, 8.5);
// let student2 = new Student("Kha", "Dang", 22, 9.0);
// let student3 = new Student("Huy", "Ly", 21, 7.5);
// Student.prototype.phoneNumber = "0123456789";

// let array = [student1, student2, student3];

// let result = array.reduce(
//     function(sums,e){
//         return sums + e.score;
//     },0
// )

// console.log(result);    

//Cau 1
let Product = function(id, name, price, quantity, category, isAvailable){       
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

//Cau 2
console.log("-----======= CAU 2 =======-----");
let product1 = new Product (1, "Iphone 17 pro max", 1000, 10, "Mobile Phone", true);
let product2 = new Product (2, "Samsung S22 Ultra", 900, 15, "Mobile Phone", true);
let product3 = new Product (3, "ASUS TUF GAMING", 2200, 5, "Laptop", true);
let product4 = new Product (4, "MacBook Pro 2015", 1500, 0, "Laptop", true);
let product5 = new Product (5, "Airpod Pro 2", 300, 20, "Accessories", true);
let product6 = new Product (6, "Airpod Pro", 150, 12, "Accessories", false);

let arrayProduct = [product1, product2, product3, product4, product5, product6];
console.log(arrayProduct);

//Cau 3
console.log("\n-----======= CAU 3 =======-----");
let namePriceOnly = arrayProduct.map(
    function(e){
        return {
            name: e.name,
            price: e.price
        }
    }
)

console.log(namePriceOnly);

//Cau 4
console.log("\n-----======= CAU 4 =======-----");
let availableProducts = arrayProduct.filter(
    function(e){
        return e.isAvailable == true && e.quantity > 0;
    }
)

console.log(availableProducts);

//Cau 5
console.log("\n-----======= CAU 5 =======-----");
let over30MilionVnd = arrayProduct.some(
    function(e){
        return e.price * 22000 > 30000000;
    }
)

console.log(over30MilionVnd);

//Cau 6
console.log("\n-----======= CAU 6 =======-----");
let isAccessory = arrayProduct.filter(e => e.category == "Accessories");
console.log(isAccessory);
let isAllAvailable = isAccessory.every(
    function(e){
        return e.isAvailable == true;
    }
)

console.log(isAllAvailable);

//Cau 7
console.log("\n-----======= CAU 7 =======-----");
let totalValue = arrayProduct.reduce(
    function(sums,e){
        return sums + e.price * e.quantity * 22000;
    },0
)

console.log(totalValue);

//Cau 8
console.log("\n-----======= CAU 8 =======-----");
for (const element of arrayProduct) {
    console.log({
        ten: element.name,
        danhmuc: element.category,
        trangthai: element.isAvailable
    });
}

//Cau 9
console.log("\n-----======= CAU 9 =======-----");
for (const key in product3) {
    console.log(key);
    console.log(product3[key]);
}

//Cau 10
console.log("\n-----======= CAU 10 =======-----");
let isSale = arrayProduct.map(
    function(e){
        if (e.quantity > 0 && e.isAvailable == true){
            return console.log(e);
        }
    },0
)