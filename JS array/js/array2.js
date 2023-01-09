let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 1-------
console.log(itCompanies.slice(0,3));

// 2-------
console.log(itCompanies.slice(-3));

// 3-------
console.log(itCompanies.splice(Math.floor(itCompanies.length/2), 1 ));    // dundahaas busdiig hasah
itCompanies.splice(Math.floor(itCompanies.length/2), 0 )    
console.log(itCompanies);     // dundahiig hasah

// 4-------
itCompanies.shift();
console.log(itCompanies)

// 5-------
itCompanies.pop();
console.log(itCompanies)


