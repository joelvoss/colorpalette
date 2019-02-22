const fs = require('fs');
const archiver = require('archiver');
const info = require('../package.json');

// Create release folder if it doesn't exist
if (!fs.existsSync('release')) {
  fs.mkdirSync('release');
}

// Create a file to stream archive data to.
const output = fs.createWriteStream(`release/${info.name}-${info.version}.zip`);
const archive = archiver('zip');

// Listen for all archive data to be written
// 'close' event is fired only when a file descriptor is involved
output.on('close', function() {
  console.log(`Archive successfully created!`);
  console.log(`  Size: ${archive.pointer()} bytes`);
  console.log(`  Location: release/${info.name}-${info.version}.zip \n`);
});

// Throw on error.
archive.on('error', function(err) {
  console.log('Error creating archive!');
  throw err;
});

// Pipe archive data to the file
archive.pipe(output);

// Append application files
archive.directory('./src', false, {
  dot: true,
});

// Append example environment file
// archive.append('VARIABLE=<VALUE>', {
//   name: '.env.example',
// });

// Finalize the archive
archive.finalize();
