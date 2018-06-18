const db = require('./db');
const bcrypt = require('bcryptjs');

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

module.exports.comparePassword = (candidatePassword, hash) => {
    return new Promise((res, rej) => {
        bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
            if (err) throw rej(err);
            res(isMatch);
        });
    });
};

module.exports.new = (email, password, name, location) => {
    return new Promise((res, rej) => {
        let hashedPass = bcrypt.hashSync(password, 10);
        db.connect().then((obj) => {
            obj.none('INSERT INTO users (email ,password, name, location) VALUES ($1, $2, $3, $4)', 
              [email, hashedPass, name, location]).then(data => {
                res(data);
                console.log(data)
                obj.done();
            }).catch(error => {
                rej(error);
                console.log(error)
                obj.done();
            });
        }).catch(error => {
            rej(error);
        });
    });
}