
exports.headersTest = function(req, res){
  res.set('Content-Type', 'text/plain');
  var s = '';
  for(var name in req.headers) s += name + ': ' +
    req.headers[name] + '\n';
  res.send(s);
};

exports.jqueryTest = function(req, res){
  res.render('jquery-test');
};

exports.nurseryRhyme = function(req, res){
  res.render('nursery-rhyme');
};

exports.nurseryRhymeData = function(req, res){
  res.json({
    animal: 'squirrel',
    bodyPart: 'tail',
    adjective: 'bushy',
    noun: 'heck'
  });
};

exports.epicFail = function(req, res){
  process.nextTick(function(){
    throw new Error('Kaboom!');
  });
};