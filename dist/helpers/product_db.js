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

module.exports.show = (id)=>{
    return new Promise((res,rej)=>{
          db.connect().then(obj=>{
              obj.one('select * from products where id=$1', [id]).then(data=>{
                  res(data);
                  obj.done();
              }).catch(error=>{
                  console.log(error)
                  rej(error);
                  obj.done();
              });
          }).catch(error=>{
              rej(error);
        });
    });
}