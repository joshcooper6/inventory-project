const inventory = [
    {name: "Sausage Bagel", type: "sandwich", location: "cold_case", deliveryStyle: "Catapult"},
    {name: "Sunrise Breakfast Wrap", type: "sandwich", location: "cold_case", deliveryStyle: "Catapult" },
    {name: "Bacon Omelet Melt", type: "sandwich", location: "cold_case", deliveryStyle: "Catapult" },
    {name: "Sausage Omelet Melt", type: "sandwich", location: "cold_case", deliveryStyle: "Catapult" },
    {name: "Mama Mozz Omelet Melt", type: "sandwich", location: "cold_case", deliveryStyle: "Catapult" },
    {name: "Almond Croissant", type: "croissant", location: "dry_case", deliveryStyle: "Rila's" },
    {name: "Butter Croissant", type: "croissant", location: "dry_case", deliveryStyle: "Rila's" },
    {name: "Pistacchio Croissant", type: "croissant", location: "dry_case", deliveryStyle: "Rila's" },
    {name: "Chocolate Croissant", type: "croissant", location: "dry_case", deliveryStyle: "Rila's" },
    {name: "Blueberry Scone", type: "scone", location: "dry_case", deliveryStyle: "Macrina" },
    {name: "Rotating Scone", type: "scone", location: "dry_case", deliveryStyle: "Macrina" },
    {name: "Rotating Muffin", type: "muffin", location: "dry_case", deliveryStyle: "Macrina" },
    {name: "Sour Cream Coffee Cake", type: "coffee cake", location: "dry_case", deliveryStyle: "Finales" },
    {name: "Rotating Coffee Cake", type: "coffee cake", location: "dry_case", deliveryStyle: "Finales" },
    {name: "Plain Bagel", type: "bagel", location: "dry_case", deliveryStyle: "Catapult" },
    {name: "Chevy Bagel", type: "bagel", location: "dry_case", deliveryStyle: "Catapult" },
    {name: "Chocolate Chip Banana Bread", type: "bread", location: "dry_case", deliveryStyle: "Finales" },
    {name: "Squash Harvest Bread", type: "bread", location: "dry_case", deliveryStyle: "Macrina" },
    {name: "Rotating Bread", type: "bread", location: "dry_case", deliveryStyle: "Finales" },
    {name: "Crafted Chocolate Chip Cookie", type: "cookie", location: "dry_case", deliveryStyle: "Crafted" },
    {name: "Crafted Rotating Cookie", type: "cookie", location: "dry_case", deliveryStyle: "Crafted" },
    {name: "Chocolate Shortbread", type: "cookie", location: "dry_case", deliveryStyle: "McTavish" },
    {name: "Rotating Shortbread", type: "cookie", location: "dry_case", deliveryStyle: "McTavish" },
    {name: "Ham and Cheese Croissant", type: "savory_croissant", location: "cold_case", deliveryStyle: "Catapult" },
    {name: "Spinach and Feta Turnover", type: "savory_croissant", location: "cold_case", deliveryStyle: "Catapult" },
    {name: "Meat Empanada", type: "empanada", location: "cold_case", deliveryStyle: "Maria_Luisa" },
    {name: "Vegetarian Empanada", type: "empanada", location: "cold_case", deliveryStyle: "Maria_Luisa" },
    {name: "Ham and Gryuere Quiche", type: "quiche", location: "cold_case", deliveryStyle: "Finales" },
    {name: "Spinach and Feta Quiche", type: "quiche", location: "cold_case", deliveryStyle: "Finales" },
    {name: "Coconut Macaroons", type: "macaroon", location: "cold_case", deliveryStyle: "Essential" },
    {name: "Strawberry Rhubarb Bars", type: "bars", location: "cold_case", deliveryStyle: "Essential" },
    {name: "Rotating Tart", type: "tart", location: "cold_case", deliveryStyle: "Essential" },
    {name: "Rotating Crafted Tart", type: "tart", location: "cold_case", deliveryStyle: "Crafted" },
    {name: "Hangry Vegan", type: "sandwich", location: "cold_case", deliveryStyle: "Catapult"},
    {name: "Smoky Chicken Melt", type: "sandwich", location: "cold_case", deliveryStyle: "Catapult"},
    {name: "Turkey Bacon Croissant", type: "sandwich", location: "cold_case", deliveryStyle: "Catapult"},
    {name: "Veggie Quiche", type: "quiche", location: "cold_case", deliveryStyle: "Plant_Life"},
    {name: "Regular Cocoa Bomb", type: "cocoa_bomb", location: "dry_case", deliveryStyle: "Crafted"},
    {name: "White Chocolate Cocoa Bomb", type: "cocoa_bomb", location: "dry_case", deliveryStyle: "Crafted"},
    {name: "Peppermint Cocoa Bomb", type: "cocoa_bomb", location: "dry_case", deliveryStyle: "Crafted"},
    {name: "Marionberry Biscuit", type: "scone", location: "dry_case", deliveryStyle: "Macrina"},
    {name: "Rotating Plant Life Cookie", type: "cookie", location: "dry_case", deliveryStyle: "Plant_Life"},
    {name: "Rotating Plant Life Scone", type: "scone", location: "dry_case", deliveryStyle: "Plant_Life"}
]

// arrays based on suppllier
let rilas = inventory.filter(item => item.deliveryStyle == "Rila's")
let crafted = inventory.filter(item => item.deliveryStyle == "Crafted")
let finales = inventory.filter(item => item.deliveryStyle == "Finales")
let essential = inventory.filter(item => item.deliveryStyle == "Essential")
let mctavish = inventory.filter(item => item.deliveryStyle == "McTavish")
let catapult = inventory.filter(item => item.deliveryStyle == "Catapult")
let empanadas = inventory.filter(item => item.deliveryStyle == "Maria_Luisa")
let sandwiches = inventory.filter(item => item.type == "sandwich")

// arrays based on numbers requrired per day
let sundayItems = []
let mondayItems = []
let tuesdayItems = []
let wednesdayItems = []
let thursdayItems = []
let fridayItems = []
let saturdayItems = []

// looping througuh inventory array and organizing items based on type
for (let i = 0; i < inventory.length; i++) {
    inventory[i].deliveryStyle == "Catapult" |
    inventory[i].deliveryStyle == "Macrina" |
    inventory[i].type == 'quiche' |
    inventory[i].type == 'cocoa_bomb'
    && sundayItems.push(inventory[i].name)

    inventory[i].deliveryStyle == "Catapult" |
    inventory[i].deliveryStyle == "Maria_Luisa" |
    inventory[i].deliveryStyle == "Macrina"
    &&mondayItems.push(inventory[i].name)

    inventory[i].deliveryStyle == "Catapult" |
    inventory[i].deliveryStyle == "Macrina" | 
    inventory[i].type == 'cocoa_bomb' |
    inventory[i].deliveryStyle == "Finales"
    &&wednesdayItems.push(inventory[i].name)

    inventory[i].deliveryStyle == "Crafted" |
    inventory[i].deliveryStyle == "Plant_Life" | 
    inventory[i].deliveryStyle == "Catapult" |
    inventory[i].deliveryStyle == "Macrina" |
    inventory[i].deliveryStyle == "Maria_Luisa"
    &&thursdayItems.push(inventory[i].name)
 }
 
 console.log(sundayItems)
 console.log(mondayItems)
 console.log(wednesdayItems)
 console.log(thursdayItems)