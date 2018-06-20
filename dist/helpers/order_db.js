const db = require('./db');

module.exports.new = (user_id, date, status, total)=>{
    return new Promise((res,rej)=>{
          db.connect().then((obj)=>{
              obj.none('insert into orders (user_id, date, status, total) values ($1, $2, $3, $4)',[user_id, date, status, total]).then((data)=>{
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

module.exports.all = () => {
    return new Promise((res, rej) => {
        db.connect().then((obj) => {
            obj.any('select orders.id as order, orders.date, users.name as username, orders.status, orders.total from users inner join orders on users.id = orders.user_id').then(data => {
                res(data);
                obj.done();
            }).catch(error => {
                rej(error);
                obj.done();
            });
        }).catch(error => {
            rej(error);
        });
    });
}