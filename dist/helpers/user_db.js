const db = require('./db');

module.exports.find_by_email = (email)=>{
    return new Promise((res,rej)=>{
          db.connect().then((obj)=>{
              obj.one('select * from users where email = $1',[email]).then((data)=>{
                  res(data);
                  obj.done();
              }).catch((error)=>{
                  rej(error);
                  obj.done();
              });
          }).catch((error)=>{
              rej(error);
        });
    });
}