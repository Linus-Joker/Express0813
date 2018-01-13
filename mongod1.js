var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/test1'; 
 
var insertData = function(db, callback) {  
    
    var collection = db.collection('user');
    //插入数据
    var data = [{"username":"jerry","age":"22"}];
    collection.insert(data, function(err, result) { 
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }     
        callback(result);
    });
}
 
MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("good!");
    insertData(db, function(result) {
        console.log(result);
        db.close();
    });
});