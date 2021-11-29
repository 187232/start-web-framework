async function preInit(inputObj) {

}

async function postInit(inputObj) {
    console.log(`\n     _   _           _     _     
    | \\ | |         | |   (_)    
    |  \\| | _____  _| |_   _ ___ 
    | . \` |/ _ \\ \\/ / __| | / __|
    | |\\  |  __/>  <| |_ _| \\__ \\
    \\_| \\_/\\___/_/\\_\\\\__(_) |___/
                         _/ |    
                        |__/     
                                        `)
    console.log(`\n    Welcome to the Next SSR application, you can execute the following commands to develop application：`)
    console.log('\x1b[32m%s\x1b[0m', '    npm install');
    console.log('\x1b[32m%s\x1b[0m', '    npm run dev');
    console.log('\x1b[32m%s\x1b[0m', '    s deploy \n');
}

module.exports = {
    postInit,
    preInit
}

