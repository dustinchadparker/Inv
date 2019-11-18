const fs = require('fs');
let inventory = { nextid: 0 };

if (fs.existsSync('inventory.json')) {
    inventory = JSON.parse(fs.readFileSync('inventory.json'));
}

let getInventory = () => {
    return Object.assign({}, inventory); //create a copy and return it
}

let createInventory = (inventory) => {
    inventory[inventory.nextid++] = inventory;
    writeinventory();
};


let writeinventory = () => {
    fs.writeFileSync('inventory.json', JSON.stringify(inventory, null, 2));
};

module.exports = {
    CreateInventory: createInventory,
    GetInventory: getInventory,
}