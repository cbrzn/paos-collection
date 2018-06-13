const db = require('./db');

module.exports.all = ()=>{
    return new Promise((res,rej)=>{
          db.connect().then(obj=>{
              obj.any('select * from products').then(data=>{
                  res(data);
                  obj.done();
              }).catch(error=>{
                  rej(error);
                  obj.done();
              });
          }).catch(error=>{
              rej(error);
        });
    });
}