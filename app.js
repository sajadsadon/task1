
let helper = require("./helper");
 let list= helper.getAllUser();

console.log(helper.getLast(list));
console.log(helper.getFirstUser(list));

console.log(helper.getUserByID(list,10));
console.log(helper.getUserByCompanyName(list, "Romaguera-Crona" ));
console.log(helper.getUsersByCity(list,"Lebsackbury"));
console.log(helper.getStreet(list,10))
console.log(helper.addNewUser(list,"userObject"));
// helper.updateUser(list,..)
console.log(helper.deleteUserById(list,1));