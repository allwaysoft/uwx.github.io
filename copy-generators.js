'use strict';
/*globals require, console*/
const fs = require('fs-extra');

const lovelyFiles = [
  //"local_modules", // folder
  "themes", // folder
  ".gitignore",
  ".gitmodules",
  ".npmignore",
  "_config.yml",
  "package.json",
];
const folders = [
  "access",
  "bash",
  "css",
  "docs",
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
  "pass",
  "ps",
  "sql",
  "vb",
];
const sourceDir = 'source\\ss64\\';
const destDir = '_nested_projects\\';
//const hexoPath = "node_modules\\.bin\\hexo.cmd";
const child_process = require('child_process');

for (let i = folders.length - 1; i >= 0; i--) {
  const folder = folders[i];
  fs.emptyDirSync(destDir + folder);
  // already done
  //fs.mkdirs(destDir + folder + '\\source\\');
  fs.copySync(sourceDir + folder, destDir + folder + '\\source\\');
  for (let j = lovelyFiles.length - 1; j >= 0; j--) {
    fs.copySync(lovelyFiles[j], destDir + folder + '\\' + lovelyFiles[j]);
  }
  //console.log('running robocopy ' + (['node_modules', '"' + destDir + folder + '\\node_modules' + '"'].join(' ')));
  child_process.exec('robocopy "node_modules" "' + destDir + folder + '\\node_modules" /MIR', (error, stdout, stderr) => { // jshint ignore:line
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    child_process.exec('hexo clean', {cwd: destDir + folder}, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
      child_process.exec('hexo generate', {cwd: destDir + folder}, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      });
    });
  });
}