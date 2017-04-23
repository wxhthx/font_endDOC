/**
* 数组去重基本版
*/ 
Array.prototype.basicReDup = function (){
  var res = [this[0]];
  for(var idx = 0; idx < this.length; idx ++){
    var flag = false;
    for(var resIdx = 0; resIdx < res.length; resIdx ++){
      if(res[resIdx] === this[idx]){
        flag = true;
        break;
      }
    }
    // 如果结果集没有与当前元素重复的元素，向结果集插入该元素
    if(!flag){
      res.push(this[idx]);
      console.log('push'+this[idx]);
    }
  }
  return res;
} 

/**
* 数组去重升级版
*/
Array.prototype.reDup = function (){   
  var temp = this.sort();
  var res = [temp[0]];
  for(var idx = 0; idx < temp.length; idx ++){
    if(res[res.length -1] !== temp[idx]){
      res.push(temp[idx]);
    }
  }
  return res;
}

Array.prototype.easyReDup = function (){
  var res = [];
  var obj = {};
  this.forEach(function(item) {
    if(!obj[item]){
      res.push(item);
      obj[item] = true;
    }
  });
  return res;
}
