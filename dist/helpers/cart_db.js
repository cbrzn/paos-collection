const db = require('./db');

module.exports.show = (user_id, ordered)=>{
    return new Promise((res,rej)=>{
        db.connect().then(obj=>{
            obj.any('select products.description as product, products.price, carts.quantity, carts.id, carts.total from products inner join carts on carts.product = products.id where user_id = $1 and ordered = $2',[user_id, ordered]).then(data=>{
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

module.exports.new = (user_id, product_id, quantity, product_price, total)=>{
    return new Promise((res,rej)=>{
        db.connect().then(obj=>{
            obj.none('insert into carts (user_id, product_id, quantity, price, total) values ($1, $2, $3, $4, $5)',[user_id, product_id, quantity, product_price, total]).then(data=>{
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

module.exports.ordered = (ordered, id)=>{
    return new Promise((res,rej)=>{
        db.connect().then(obj=>{
            obj.none('update carts set ordered=$1 where id=$2',[ordered, id]).then(data=>{
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