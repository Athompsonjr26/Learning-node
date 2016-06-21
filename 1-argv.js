
var nodeExecutablePath = process.argv[0];

var nodeProgramPath = process.argv[1];

var firstCommandLineArgument = process.argv[2];

var secondCommandLineArgument = process.argv[3];

console.log('111:', nodeExecutablePath);
console.log('222:', nodeProgramPath);
console.log('333:', firstCommandLineArgument);
console.log('444:', secondCommandLineArgument);

console.log('All the argv: ', process.argv);
