const db = require("../models");

let getAllClinic = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Clinic.findAll();

      if (data && data.length > 0) {
        data.map((item) => {
          // item.image = new Buffer(item.image, "base64").toString("binary");
          return item;
        });
      }
      resolve({
        errCode: 0,
        errMessage: "Ok!",
        data,
      });
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  getAllClinic: getAllClinic,
};
