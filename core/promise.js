function readFile(filename) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filename, function(err, content) {
      if(err) return next(err);
      res.send(content);
    })
  })
}


readFile('index.html', function(err, html) {
  if(err) return next(err);

  processHtml(html, function(err, finalHtml) {
    if(err) return next(err);

    res.send(finalHtml);
  })
})

app.use(function(req, res, next) {
  readFile('index.html').then(function(html) {
    return processHtml(html)
  }).then(function(finalHtml) {
    res.send(finalHtml);
  }).catch(function(err) {
    next(err);
  })
});


app.use(async function(req, res, next) {
  var html = await readFile('index.html');
  var finalHtml = await processHtml(html);
  res.send(finalHtml);
});

handler.catch(function(err) {
  next(err);
})

app.use(function(req, res, next) {
  console.log('request');
  next();
})

app.get('/:id', function(req, res, next) {
  req.params.id === foo
  fs.readFile('index.html', function(err, content) {
    if(err) return next(err);
    res.send(content);
  })
})

app.get('/foo', function(req, res, next) {
  fs.readFile('index.html', function(err, content) {
    if(err) return next(err);
    res.send(content);
  })
})


function readFile(filename, callback) {
  callback(null, content);
}
