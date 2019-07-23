let CoDgames = ['MW', 'IW', 'Black Ops', 'Ghost', 'MW2']
let CoDprices = [20.00, 40.00, 15.00, 25.00, 35.00]
for(let game in CoDgames){
    console.log('I am trash at', CoDgames[game])
};

for(let i = 0; i < CoDgames.length; i++){
    console.log('I want to buy', CoDgames[i], 'and it costs', CoDprices[i]);
};

/*
let CoDgames = ['MW', 'IW', 'Black Ops', 'Ghost', 'MW2']
for(let game of CoDgames){
    console.log('I am trash at', game)
};*/