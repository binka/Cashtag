exports.index = function(req, res){
  res.render('default', {
    title: 'Home',
    users: ['Nikita', 'Kirill', 'Dominik']
  });
}
