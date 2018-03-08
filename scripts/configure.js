import fs from 'fs';

// print out the contents of your .env file so we can forward it to the heroku cli
process.stdout.write(
    fs.readFileSync('.env', 'utf8')
);