var nqq = [];
var nq = function(fun,args){nqq.push(fun);nqq.push(args);console.log(nqq);if(nqq.length == 2){nqcb();}};
var nqcb = function(){var f = nqq.shift(); var a = nqq.shift();if(typeof f == "function"){f(a);}};

module.exports.nq = nq;
module.exports.next = nqcb;

