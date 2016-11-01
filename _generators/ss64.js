'use strict';
/*globals console, require, global, process*/

// "Until they fix the memory leak, manually calling the garbage collector in addition to calling window.close seems to work:"
// http://stackoverflow.com/a/16747198
setInterval(function () { // this unfortunately makes the app never finish by itself

  //only call if memory use is bove 200MB
  if (process.memoryUsage().heapUsed > 200000000) { 
    global.gc();
  }

}, 10000); // 10sec

const fs = require('fs-extra');
const jsdom = require('jsdom').jsdom;
require("jsdom").defaultDocumentFeatures = {
    FetchExternalResources: false,
    ProcessExternalResources: false
};
//console.log(Object.keys(fs));

const path = 'C:\\Users\\Rafael\\Downloads\\New folder\\ss64.com';
const plen = path.length;
const files = fs.diveSync(path);

const outpath = 'C:\\Users\\Rafael\\Downloads\\New folder\\output';
//fs.mkdirsSync(outpath);
files.forEach(function(file) {
  const relativePath = file.substring(plen); // gives /X/Y.html
  console.log(relativePath);
  
  if (file.endsWith('html')) {
    const document = jsdom(fs.readSync(file));
    const nav = document.getElementById('tnav');
    if (nav) {
      nav.parentElement.removeChild(nav);
    }
    //fs.ensureFileSync(outpath + relativePath);
    const html = document.body.innerHTML;
    let size = null;
    try {
      size = fs.statSync(outpath + relativePath).size;
    } catch (e) {}
    if (size != html) {
      fs.writeFileSync(outpath + relativePath, html);
    }
    document.defaultView.close();
  } else {
    fs.copy(file, outpath + relativePath);
  }
});

//files.forEach(function(file) {
//  const relativePath = file.substring(plen); // gives /X/Y.html
//  console.log(relativePath);
//  
//  if (file.endsWith('html')) {
//    fs.readFile(file, 'utf8', (err, txt) => {
//      if (err) throw err;
//      const document = jsdom(txt);
//      const nav = document.getElementById('tnav');
//      if (nav) {
//        nav.parentElement.removeChild(nav);
//      }
//      fs.ensureFile(outpath + relativePath, err => {
//        if (err) throw err;
//        fs.writeFile(outpath + relativePath, document.body.innerHTML, err => {
//          if (err) throw err;
//          document.defaultView.close();
//          // "Until they fix the memory leak, manually calling the garbage collector in addition to calling window.close seems to work:"
//          // http://stackoverflow.com/a/16747198
//          if (process.memoryUsage().heapUsed > 200000000) { // memory use is above 200MB
//            global.gc();
//          }
//        });
//      });
//    });
//  } else {
//    fs.copy(file, outpath + relativePath, err => {if (err) throw err;});
//  }
//});