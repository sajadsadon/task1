
const fs = require("fs")
const getAllUser = () => {
    //TODO: Read file and return users here
    
try {
    let resp = fs.readFileSync("./user.json","utf8");
    let jsonResp = JSON.parse(resp);
    console.log(jsonResp);
    return jsonResp;
} catch (error) {
    console.log(error);
  };
 
}
  
  const getFirstUser = (list) => {
    //TODO: get first user of list
    let first=list[0];
    return first;
  };
  
  const getLast = (list) => {
    //TODO: get last user of list
    let last= list[list.length - 1];
    return last;
  };
  
  const getUserByID = (list, userID) => {
    //TODO: get user object by id
    let user= list.find(user=>user.id==userID);
    return user;
  };
  
  const getUserByCompanyName = (list, companyName) => {
    //TODO: get user object by company name
    let user= list.find(user=>user.company.name===companyName)
    return user;
  };
  
  const getUsersByCity = (list, city) => {
    //TODO: get users that live in this city
    let users= list.find(user=>user.address.city===city);
    return users;
  };
  
  const getStreet = (list, userID) => {
    //TODO: get street name by userID
    let user= list.find(user=>user.id==userID);
    return user.address.street;
    
  };
  
  const addNewUser = (list, userObject) => {
    //TODO: add new user to the list
    list.push(userObject);
    return list
  };
  
  const updateUser = (list, userID) => {
    //TODO: update email when id === userID
  };
  
  const deleteUserById = (list, userID) => {
    //TODO: remove user when id === userID
    let index = list.findIndex(user=>user.id===userID);
    return list.pop()
    
  };
  
  module.exports = {
    getAllUser,
    getFirstUser,
    getLast,
    getUserByID,
    getUserByCompanyName,
    getUsersByCity,
    getStreet,
    addNewUser,
    updateUser,
    deleteUserById,
  };