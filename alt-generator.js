'use strict';
/*globals require, global, console*/
/*exported require, global, console*/
const fs = require('fs-extra');
const execSync = require('child_process').execSync;

// keep a copy of the generated stuff
const keepOutput = global.keepOutput || false;

const folders = [
  "access",
  "bash",
  "css",
  "images",
  "links",
  "nt",
  "office",
  "ora",
  "orad",
  "orap",
  "oraplsql",
  "orav",
  "osx",
  "ps",
  "sql",
  "vb",
];
//const sourceDir = 'source\\ss64\\';
//const destDir = 'bpublic\\';

const config = fs.readSync('_config.yml');

// trash dirs
fs.emptyDirSync('bsource');
fs.emptyDirSync('bpublic');
if (keepOutput) fs.emptyDirSync('_generated');

let bconfig = config
  .replace(/source_dir: source/, 'source_dir: bsource/ss64')
  .replace(/public_dir: public/, 'public_dir: bpublic');

fs.writeFileSync('_config.yml', bconfig);

for (let i = folders.length - 1; i >= 0; i--) {
  const folder = folders[i];

  fs.mkdirsSync('bsource/ss64/' + folder); // make source dirs
  fs.copySync('_source/ss64/' + folder, 'bsource/ss64/' + folder); // copy real source to fake source
  
  let stdout;
  stdout = execSync('hexo clean');    // clean
  console.log(stdout.toString('utf8'));
  stdout = execSync('hexo generate'); // gen
  console.log(stdout.toString('utf8'));

  fs.mkdirsSync('public/ss64/' + folder); // make output folder
  fs.copySync('bpublic/' + folder, 'public/ss64/' + folder); // copy generated files to output folder

  fs.emptyDirSync('bsource'); // clean up the source folder so it can be iterated again
}
// return the old config yml to where it belongs
fs.writeFileSync('_config.yml', config);
if (keepOutput) fs.copySync('public', '_generated');
// tidy up after were done
fs.removeSync('bsource');
fs.removeSync('bpublic');

/*
const Hexo = require('hexo');
const hexo = new Hexo(process.cwd(), {});

const config = fs.readSync('_config.yml');
function iterate(i) {
  const folder = folders[i];
  let bconfig = config
    .replace(/source_dir: source/, 'source_dir: source/ss64/' + folder)
    .replace(/public_dir: public/, 'public_dir: bpublic');

  fs.writeFileSync('_config.yml', bconfig);
  //execSync('hexo clean');
  //execSync('hexo generate');

  hexo.init().then(() => {
    hexo.call('clean').then(() => {
      hexo.exit();

      hexo.init().then(() => {
        hexo.call('generate').then(() => {
          hexo.exit();          

          fs.mkdirsSync('public/ss64/' + folder);
          fs.copySync('bpublic', 'public/ss64/' + folder);

          i++;
          if (i < folders.length) {
            iterate(i);
          } else {
            fs.writeFileSync('_config.yml', config);
          }
        }).catch(err => {
          hexo.exit(err);
        });
      });

    }).catch(err => {
      hexo.exit(err);
    });
  });
}
iterate(0);
*/