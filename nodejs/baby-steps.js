console.log(process.argv.reduce((a, b) => (a += !!+b ? +b : 0), 0));
