var obj = {
  user: {
    name: "Harshjit",
    address: {
      state: "karnataka",
      place: "Bengaluru",
      pincode: 560058,
      anotherKey: {
        address1: {
          state: "karnataka",
          place: "shivamoga",
        },
      },
    },
  },
};

const finalObj = {};
const simplifyObject = (obj, parent) => {
  for (key in obj) {
    if (typeof obj[key] === "object") {
      simplifyObject(obj[key], parent + "." + key);
    } else {
      finalObj[parent + "." + key] = obj[key];
    }
  }
};

simplifyObject(obj.user, "user");

console.log(finalObj);
