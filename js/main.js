// JSON - JavaScript Object Notation
// data - object {win: value} , {symbolIDs: []}
//Dummy JSON responses // contain 4 keys for each object, "response" , "results", "win", symbolIDs // let vs var = let is limited to a scope of the code block, var is global variable
let data = [

    {   //0
        "response": {   // "response" : {"results: { "win" : value, "symbolIDs: []}} // nested properties
            "results": {
                "win": 0, // {key: value}
                "symbolIDs": [] // {key: []}
            }
        }
    },

    {   //1
        "response": {
            "results": {
                "win": 8,
                "symbolIDs": [5, 4, 0]
            }
        }
    },

    {   //2
        "response": {
            "results": {
                "win": 1,
                "symbolIDs": [0]
            }
        }
    },

    {   //3
        "response": {
            "results": {
                "win": 0,
                "symbolIDs": []
            }
        }
    },

    {   //4
        "response": {
            "results": {
                "win": 2,
                "symbolIDs": [1, 0]
            }
        }
    },

    {   //5
        "response": {
            "results": {
                "win": 4,
                "symbolIDs": [2, 1, 0]
            }
        }
    },

    {   //6
        "response": {
            "results": {
                "win": 4,
                "symbolIDs": [5]
            }
        }
    },

    {   //7
        "response": {
            "results": {
                "win": 3,
                "symbolIDs": [2, 0]
            }
        }
    },

    {   //8
        "response": {
            "results": {
                "win": 0,
                "symbolIDs": []
            }
        }
    },

    {   //9
        "response": {
            "results": {
                "win": 8,
                "symbolIDs": [5, 4, 1]
            }
        }
    },

    {   //10
        "response": {
            "results": {
                "win": 9,
                "symbolIDs": [5, 3, 2, 1] 
            }
        }
    },

    {   //11
        "response": {
            "results": {
                "win": 6,
                "symbolIDs": [4, 0, 1]
            }
        }
    },

    {   //12
        "response": {
            "results": {
                "win": 1,
                "symbolIDs": [1]
            }
        }
    },

    {   //13
        "response": {
            "results": {
                "win": 5,
                "symbolIDs": [1, 2, 3]
            }
        }
    },

    {   //14
        "response": {
            "results": {
                "win": 0,
                "symbolIDs": []
            }
        }
    },

    {   //15
        "response": {
            "results": {
                "win": 5,
                "symbolIDs": [0, 2, 3]
            }
        }
    },

    {   //16
        "response": {
            "results": {
                "win": 0,
                "symbolIDs": []
            }
        }
    },

    {   //17
        "response": {
            "results": {
                "win": 6,
                "symbolIDs": [0, 2, 4] // edited value, it was the same like index 15
            }
        }
    },

    {   //18
        "response": {
            "results": {
                "win": 8,
                "symbolIDs": [0, 1, 2,5] 
            }
        }
    },

    {   //19
        "response": {
            "results": {
                "win": 0,
                "symbolIDs": []
            }
        }
    },

]

//HOWLER SOUND

//{width: 1920, height: 1080} - original
// simple application configuration
let config  = {width:800,height:600} //, backgroundColor: 0x1099bb};
let app
let win = 0;

// wait for DOM before creating application
    window.addEventListener('load', function() {
    var app = new PIXI.Application(config);
 
const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: 'round',
});        
        
const richTextInsertCoin = new PIXI.Text('Insert Coin', style);
richTextInsertCoin.x = 10;
richTextInsertCoin.y = 500;
richTextInsertCoin.interactive = true;
richTextInsertCoin.buttonMode = true;
richTextInsertCoin.on('pointerdown' , increaseCredit);

       
const richTextYourCredit = new PIXI.Text('Your Credit: ',style)        
richTextYourCredit.x = 10;
richTextYourCredit.y = 550;
        
const richTextCashOut = new PIXI.Text('Cash Out!' , style)
richTextCashOut.x = 10;
richTextCashOut.y = 10;
richTextCashOut.interactive = true;
richTextCashOut.buttonMode = true;
richTextCashOut.on('pointerdown', cashOutButtonRich)
        
    function cashOutButtonRich(){
        // end the game and cash out the win amount + credit amount
        if (credit > 0 || win > 0){
                    win = win + credit;
        console.log(win);
        const cashOut = new PIXI.Text('Cash out: ' + win,  style);
        cashOut.x = 300;
        cashOut.y = 300;
        app.stage.addChild(cashOut);
        
        credit = 0;
        win = 0;
 
        richTextCredit.text = credit;
        richTextWinAmount.text = win;

        cashOutTrigger = true;
            
        }
    }          
        
      
const richTextWinToCredit = new PIXI.Text('WIN to Credit!' , style)
richTextWinToCredit.x = 550;
richTextWinToCredit.y = 10; 
richTextWinToCredit.interactive = true;
richTextWinToCredit.buttonMode = true;
richTextWinToCredit.on('pointerdown', transferWinToCredit);        
        
const richTextWIN = new PIXI.Text('WIN: ',style)
richTextWIN.x = 650;
richTextWIN.y = 450;
    
const richTextWinAmount = new PIXI.Text(parseInt(win), (style))
richTextWinAmount.x = 750;
richTextWinAmount.y = 450;

const richTextSPIN = new PIXI.Text('SPIN!', style)
richTextSPIN.x = 650; 
richTextSPIN.y = 500;
richTextSPIN.interactive = true;
richTextSPIN.buttonMode = true;
richTextSPIN.on('pointerdown', spinClick)
        
const richTextBET = new PIXI.Text('BET: ', style)
richTextBET.x = 550;
richTextBET.y = 550;
        
const richTextBetIncrease = new PIXI.Text('+', style)
richTextBetIncrease.x = 700;
richTextBetIncrease.y = 550;
richTextBetIncrease.interactive = true;
richTextBetIncrease.buttonMode = true;
richTextBetIncrease.on('pointerdown', increaseBet);
    
const richTextBetDecrease = new PIXI.Text('-', style)
richTextBetDecrease.x = 750;
richTextBetDecrease.y = 545;
richTextBetDecrease.interactive = true;
richTextBetDecrease.buttonMode = true;
richTextBetDecrease.on('pointerdown', decreaseBet);        
        
    app.loader
        .add('symbol_00', 'assets/symbols/symbol_00.json')
        .add('symbol_01', 'assets/symbols/symbol_01.json')
        .add('symbol_02', 'assets/symbols/symbol_02.json')
        .add('symbol_03', 'assets/symbols/symbol_03.json')
        .add('symbol_04', 'assets/symbols/symbol_04.json')
        .add('symbol_05', 'assets/symbols/symbol_05.json')  
        .load(onAssetsLoaded);
        
                
    app.loader.onProgress.add(showProgress);
    app.loader.onComplete.add(doneLoading);
    app.loader.onError.add(reportError);
        
           
    function showProgress(e){
        console.log(e.progress);
    }   
    
    function reportError(e){
        console.error("ERROR : " + e.message);
    }    
        
    function doneLoading(e){
        console.log("DONE LOADING");

    }      
    
        
    // uff function, clunky way how to draw each symbol for each field..    
    function onAssetsLoaded(loader, res){  
        
        // DRAW CHERRIES, for each container there is a dedicated picture    
        slot00Texture00 = new PIXI.spine.Spine(res.symbol_00.spineData);
        slot00Texture00.scale.x = 0.5;
        slot00Texture00.scale.y = 0.5;
        slot00Texture00.state.setAnimation(0, 'static', true);
        
        slot00Texture01 = new PIXI.spine.Spine(res.symbol_01.spineData);    
        slot00Texture01.scale.x = 0.5;
        slot00Texture01.scale.y = 0.5;
        slot00Texture01.state.setAnimation(0, 'static', true);    
        
        slot00Texture02 = new PIXI.spine.Spine(res.symbol_02.spineData);    
        slot00Texture02.scale.x = 0.5;
        slot00Texture02.scale.y = 0.5;
        slot00Texture02.state.setAnimation(0, 'static', true);    
            
        slot00Texture03 = new PIXI.spine.Spine(res.symbol_03.spineData);    
        slot00Texture03.scale.x = 0.5;
        slot00Texture03.scale.y = 0.5;
        slot00Texture03.state.setAnimation(0, 'static', true);    
        
        slot00Texture04 = new PIXI.spine.Spine(res.symbol_04.spineData);    
        slot00Texture04.scale.x = 0.5;
        slot00Texture04.scale.y = 0.5;
        slot00Texture04.state.setAnimation(0, 'static', true);    
        
        slot00Texture05 = new PIXI.spine.Spine(res.symbol_05.spineData);    
        slot00Texture05.scale.x = 0.5;
        slot00Texture05.scale.y = 0.5;
        slot00Texture05.state.setAnimation(0, 'static', true);
            
        slot00Texture06 = new PIXI.Sprite.from('assets/symbols/symbol_06.png');    
        slot00Texture06.scale.x = 0.5;
        slot00Texture06.scale.y = 0.5;
               
        // middle spindle    
            
        slot01Texture00 = new PIXI.spine.Spine(res.symbol_00.spineData);
        slot01Texture00.scale.x = 0.5;
        slot01Texture00.scale.y = 0.5;
        slot01Texture00.state.setAnimation(0, 'static', true);    
            
        slot01Texture01 = new PIXI.spine.Spine(res.symbol_01.spineData);
        slot01Texture01.scale.x = 0.5;
        slot01Texture01.scale.y = 0.5;
        slot01Texture01.state.setAnimation(0, 'static', true);    
        
        slot01Texture02 = new PIXI.spine.Spine(res.symbol_02.spineData);
        slot01Texture02.scale.x = 0.5;
        slot01Texture02.scale.y = 0.5;
        slot01Texture02.state.setAnimation(0, 'static', true);    
            
        slot01Texture03 = new PIXI.spine.Spine(res.symbol_03.spineData);
        slot01Texture03.scale.x = 0.5;
        slot01Texture03.scale.y = 0.5;
        slot01Texture03.state.setAnimation(0, 'static', true);    
            
        slot01Texture04 = new PIXI.spine.Spine(res.symbol_04.spineData);
        slot01Texture04.scale.x = 0.5;
        slot01Texture04.scale.y = 0.5;
        slot01Texture04.state.setAnimation(0, 'static', true);    
            
        slot01Texture05 = new PIXI.spine.Spine(res.symbol_05.spineData);
        slot01Texture05.scale.x = 0.5;
        slot01Texture05.scale.y = 0.5;
        slot01Texture05.state.setAnimation(0, 'static', true);
        
        slot01Texture06 = new PIXI.Sprite.from('assets/symbols/symbol_06.png');    
        slot01Texture06.scale.x = 0.5;
        slot01Texture06.scale.y = 0.5;    
              
        // right spindle    
    
        slot02Texture00 = new PIXI.spine.Spine(res.symbol_00.spineData);
        slot02Texture00.scale.x = 0.5;
        slot02Texture00.scale.y = 0.5;
        slot02Texture00.state.setAnimation(0, 'static', true);    
            
        slot02Texture01 = new PIXI.spine.Spine(res.symbol_01.spineData);
        slot02Texture01.scale.x = 0.5;
        slot02Texture01.scale.y = 0.5;
        slot02Texture01.state.setAnimation(0, 'static', true);    
        
        slot02Texture02 = new PIXI.spine.Spine(res.symbol_02.spineData);
        slot02Texture02.scale.x = 0.5;
        slot02Texture02.scale.y = 0.5;
        slot02Texture02.state.setAnimation(0, 'static', true);
            
        slot02Texture03 = new PIXI.spine.Spine(res.symbol_03.spineData);
        slot02Texture03.scale.x = 0.5;
        slot02Texture03.scale.y = 0.5;
        slot02Texture03.state.setAnimation(0, 'static', true);    
            
        slot02Texture04 = new PIXI.spine.Spine(res.symbol_04.spineData);
        slot02Texture04.scale.x = 0.5;
        slot02Texture04.scale.y = 0.5;
        slot02Texture04.state.setAnimation(0, 'static', true);    
            
        slot02Texture05 = new PIXI.spine.Spine(res.symbol_05.spineData);
        slot02Texture05.scale.x = 0.5;
        slot02Texture05.scale.y = 0.5;
        slot02Texture05.state.setAnimation(0, 'static', true);
            
        slot02Texture06 = new PIXI.Sprite.from('assets/symbols/symbol_06.png');    
        slot02Texture06.scale.x = 0.5;
        slot02Texture06.scale.y = 0.5;    
        
        // FAR FIGHT
        
        slot03Texture00 = new PIXI.spine.Spine(res.symbol_00.spineData);
        slot03Texture00.scale.x = 0.5;
        slot03Texture00.scale.y = 0.5;
        slot03Texture00.state.setAnimation(0, 'static', true);    
            
        slot03Texture01 = new PIXI.spine.Spine(res.symbol_01.spineData);
        slot03Texture01.scale.x = 0.5;
        slot03Texture01.scale.y = 0.5;
        slot03Texture01.state.setAnimation(0, 'static', true);    
        
        slot03Texture02 = new PIXI.spine.Spine(res.symbol_02.spineData);
        slot03Texture02.scale.x = 0.5;
        slot03Texture02.scale.y = 0.5;
        slot03Texture02.state.setAnimation(0, 'static', true);
            
        slot03Texture03 = new PIXI.spine.Spine(res.symbol_03.spineData);
        slot03Texture03.scale.x = 0.5;
        slot03Texture03.scale.y = 0.5;
        slot03Texture03.state.setAnimation(0, 'static', true);    
            
        slot03Texture04 = new PIXI.spine.Spine(res.symbol_04.spineData);
        slot03Texture04.scale.x = 0.5;
        slot03Texture04.scale.y = 0.5;
        slot03Texture04.state.setAnimation(0, 'static', true);    
            
        slot03Texture05 = new PIXI.spine.Spine(res.symbol_05.spineData);
        slot03Texture05.scale.x = 0.5;
        slot03Texture05.scale.y = 0.5;
        slot03Texture05.state.setAnimation(0, 'static', true);
        
        slot03Texture06 = new PIXI.Sprite.from('assets/symbols/symbol_06.png');    
        slot03Texture06.scale.x = 0.5;
        slot03Texture06.scale.y = 0.5;    
              
    } 
            
    // CONTAINERS    
    const slot1container = new PIXI.Container();
    slot1container.x = 150; //app.screen.width / 2;
    slot1container.y = 300; //app.screen.height / 2;
    slot1container.pivot.x = slot1container.width / 2;
    slot1container.pivot.y = slot1container.height / 2;
            
    const slot2container = new PIXI.Container();
    slot2container.x = 300; //app.screen.width / 3;
    slot2container.y = 300; //app.screen.height / 2;
    slot2container.pivot.x = slot2container.width /2;
    slot2container.pivot.y = slot2container.height /2;
     
    const slot3container = new PIXI.Container();
    slot3container.x = 450; //app.screen.width / 5;
    slot3container.y = 300; //app.screen.height / 2;
    slot3container.pivot.x = slot3container.width / 2;
    slot3container.pivot.y = slot3container.height / 2;

    const slot4container = new PIXI.Container();
    slot4container.x = 600; //app.screen.width / 5;
    slot4container.y = 300; //app.screen.height / 2;
    slot4container.pivot.x = slot4container.width / 2;
    slot4container.pivot.y = slot4container.height / 2;
    
    // add slot containers to stage                 
    app.stage.addChild(slot1container);
    app.stage.addChild(slot2container);
    app.stage.addChild(slot3container);
    app.stage.addChild(slot4container);    
                 
    app.stop();
    
    document.body.appendChild(app.view);
    
    //////////////////////////////////
    //    JSON                      //    
    //                              //
    // more work with JSON data..
    var dataReference = data;

    app.stage.interactive =  true;        
    // http://pixijs.download/release/docs/PIXI.Loader.html   
    var background = new PIXI.Sprite.from('assets/images/finalBackground.png');    
    background.x = 0;
    background.y = 0;
    app.stage.addChild(background);
        
    let obj = [0,0,0,0]
    let bet = 0;
    var credit = 0;
    Boolean (cashOutTrigger = false);
    Boolean (winCondition4 = false);
    Boolean (winCondition3 = false);
    Boolean (winCondition2 = false);
    Boolean (winCondition1 = false);
            
    // Generating random numbers and assigning them to each slot, then each slot value is parsed to object value on index, this could be done better in for loop etc.
    function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
    }
          
   const richTextCredit = new PIXI.Text(parseInt(credit),(style));        
        richTextCredit.x = 230;
        richTextCredit.y  = 550;
    
    const richTextBetValue = new PIXI.Text(parseInt(bet), (style))
    richTextBetValue .x = 650;
        richTextBetValue .y = 550;
        richTextBetValue .interactive = true;
        
    function increaseCredit(){
        
        if (!cashOutTrigger){
        credit++;
        richTextCredit.text = credit;
        }
    }        
    
    // progressive BET system, if bet is increased, then new symbol will be thrown into game, generating random slot numbers in range     
    function generateSlotNumbers() {
        if (bet <= 1){
            min = 0;
            max = 5;
        } else if ( bet >= 2){
            min = 0;
            max = 6;
        } 
        const slot1 = randomIntFromInterval(min, max)
        obj[0] = slot1;
        const slot2 = randomIntFromInterval(min, max)
        obj[1] = slot2;
        const slot3 = randomIntFromInterval(min, max)
        obj[2] = slot3; 
        const slot4 = randomIntFromInterval(min, max)
        obj[3] = slot4;

    }
        // removing symbols from screen
        function removeSlots(){  
        app.stage.removeChild(slot00Texture00);
        app.stage.removeChild(slot00Texture01);
        app.stage.removeChild(slot00Texture02);
        app.stage.removeChild(slot00Texture03);
        app.stage.removeChild(slot00Texture04);
        app.stage.removeChild(slot00Texture05);
        app.stage.removeChild(slot00Texture06);    
            
        app.stage.removeChild(slot01Texture00);
        app.stage.removeChild(slot01Texture01);
        app.stage.removeChild(slot01Texture02);
        app.stage.removeChild(slot01Texture03);
        app.stage.removeChild(slot01Texture04);
        app.stage.removeChild(slot01Texture05);
        app.stage.removeChild(slot01Texture06);    
        
        app.stage.removeChild(slot02Texture00);
        app.stage.removeChild(slot02Texture01);
        app.stage.removeChild(slot02Texture02);
        app.stage.removeChild(slot02Texture03);
        app.stage.removeChild(slot02Texture04);
        app.stage.removeChild(slot02Texture05);
        app.stage.removeChild(slot02Texture06);
        
        app.stage.removeChild(slot03Texture00);
        app.stage.removeChild(slot03Texture01);
        app.stage.removeChild(slot03Texture02);
        app.stage.removeChild(slot03Texture03);
        app.stage.removeChild(slot03Texture04);
        app.stage.removeChild(slot03Texture05);
        app.stage.removeChild(slot03Texture06);
        }      
        
        
        // adding corresponding symbols to the scene
        function getContainer1(){
       if (obj[0] == 0){
            //console.log("left: cherries");
           slot00Texture00.x = slot1container.x;
           slot00Texture00.y = slot1container.y;
           app.stage.addChild(slot00Texture00);
        }
        if (obj[0] == 1){
            //console.log("left: lemon");
           slot00Texture01.x = slot1container.x;
           slot00Texture01.y = slot1container.y;
           app.stage.addChild(slot00Texture01);
        }
        if (obj[0] == 2) {
            //console.log("left: orange");
           slot00Texture02.x = slot1container.x;
           slot00Texture02.y = slot1container.y;
           app.stage.addChild(slot00Texture02);
        }
        if (obj[0] == 3) {
            //console.log("left: peach");
           slot00Texture03.x = slot1container.x;
           slot00Texture03.y = slot1container.y;
           app.stage.addChild(slot00Texture03);
        }
        if (obj[0] == 4) {
            //console.log("left: grape");
            slot00Texture04.x = slot1container.x;
            slot00Texture04.y = slot1container.y;
           app.stage.addChild(slot00Texture04);
        }
        if (obj[0] == 5) {
            //console.log("left: melon");
            slot00Texture05.x = slot1container.x;
           slot00Texture05.y = slot1container.y;
           app.stage.addChild(slot00Texture05);
        }
        if (obj[0] == 6) {
            //console.log("left: seven");
           slot00Texture06.x = slot1container.x - 25;
           slot00Texture06.y = slot1container.y -10;
           app.stage.addChild(slot00Texture06);
        }    

    }   
        
                
        function getContainer2(){
        if (obj[1] == 0){
            //console.log("middle: cherries");
           slot01Texture00.x = slot2container.x;
           slot01Texture00.y = slot2container.y;
           app.stage.addChild(slot01Texture00);
        }
        if (obj[1] == 1){
            //console.log("middle: lemon");
            slot01Texture01.x = slot2container.x;
           slot01Texture01.y = slot2container.y;
           app.stage.addChild(slot01Texture01);
        }
        if (obj[1] == 2) {
            //console.log("middle: orange");
            slot01Texture02.x = slot2container.x;
           slot01Texture02.y = slot2container.y;
           app.stage.addChild(slot01Texture02);
        }
        if (obj[1] == 3) {
            //console.log("middle: peach");
           slot01Texture03.x = slot2container.x;
           slot01Texture03.y = slot2container.y;
           app.stage.addChild(slot01Texture03);
        }
        if (obj[1] == 4) {
            //console.log("middle: grape");
            slot01Texture04.x = slot2container.x;
            slot01Texture04.y = slot2container.y;
            app.stage.addChild(slot01Texture04);
        }
        if (obj[1] == 5) {
            //console.log("middle: melon");
            slot01Texture05.x = slot2container.x;
            slot01Texture05.y = slot2container.y;
            app.stage.addChild(slot01Texture05);
        }
        
        if (obj[1] == 6) {
            //console.log("left: seven");
           slot01Texture06.x = slot2container.x - 25;
           slot01Texture06.y = slot2container.y -10;
           app.stage.addChild(slot01Texture06);
        }     
            
    }    
        
        function getContainer3(){
            if (obj[2] == 0){
            //console.log("right: cherries");
            slot02Texture00.x = slot3container.x;
            slot02Texture00.y = slot3container.y;
            app.stage.addChild(slot02Texture00);
        }
        if (obj[2] == 1){
            //console.log("right:  lemon");
            slot02Texture01.x = slot3container.x;
            slot02Texture01.y = slot3container.y;
            app.stage.addChild(slot02Texture01);
        }
        if (obj[2] == 2) {
            //console.log("right:  orange");
            slot02Texture02.x = slot3container.x;
            slot02Texture02.y = slot3container.y;
            app.stage.addChild(slot02Texture02);
        }
        if (obj[2] == 3) {
            //console.log("right:  peach");
            slot02Texture03.x = slot3container.x;
            slot02Texture03.y = slot3container.y;
            app.stage.addChild(slot02Texture03);
        }
        if (obj[2] == 4) {
            //console.log("right:  grape");
            slot02Texture04.x = slot3container.x;
            slot02Texture04.y = slot3container.y;
            app.stage.addChild(slot02Texture04);
        }
        if (obj[2] == 5) {
            //console.log("right:  melon");
            slot02Texture05.x = slot3container.x;
            slot02Texture05.y = slot3container.y;
            app.stage.addChild(slot02Texture05);
        }
        if (obj[2] == 6) {
            //console.log("left: seven");
           slot02Texture06.x = slot3container.x - 25;
           slot02Texture06.y = slot3container.y -10;
           app.stage.addChild(slot02Texture06);
        }     
    }
        
        function getContainer4(){
                    if (obj[3] == 0){
            //console.log("far right: cherries");
            slot03Texture00.x = slot4container.x;
            slot03Texture00.y = slot4container.y;
            app.stage.addChild(slot03Texture00);
        }
        if (obj[3] == 1){
            //console.log("far right:  lemon");
            slot03Texture01.x = slot4container.x;
            slot03Texture01.y = slot4container.y;
            app.stage.addChild(slot03Texture01);
        }
        if (obj[3] == 2) {
            //console.log("far right:  orange");
            slot03Texture02.x = slot4container.x;
            slot03Texture02.y = slot4container.y;
            app.stage.addChild(slot03Texture02);
        }
        if (obj[3] == 3) {
            //console.log("far right:  peach");
            slot03Texture03.x = slot4container.x;
            slot03Texture03.y = slot4container.y;
            app.stage.addChild(slot03Texture03);
        }
        if (obj[3] == 4) {
            //console.log("far rightt:  grape");
            slot03Texture04.x = slot4container.x;
            slot03Texture04.y = slot4container.y;
            app.stage.addChild(slot03Texture04);
        }
        if (obj[3] == 5) {
            //console.log("far right:  melon");
            slot03Texture05.x = slot4container.x;
            slot03Texture05.y = slot4container.y;
            app.stage.addChild(slot03Texture05);
        }
            if (obj[3] == 6) {
            //console.log("left: seven");
           slot03Texture06.x = slot4container.x - 25;
           slot03Texture06.y = slot4container.y -10;
           app.stage.addChild(slot03Texture06);
        } 
            
            
    }   
        
    
    // this function is causing a "minor" bug, sometimes some symbols fire up ("win") eventhough they do not increase the win (that's correct behaviour), specially the two middle rows, specially the symbol cherries assigned to value 0, is often triggering win animation on second spindle (obj[1], slot01Texture00)
    function spinClick(){
        
        removeSlots();
        // reseting OBJ values (assigning 7 = clear) to prevent some missmatch or miss draw symbol to the screen
        for (i = 0; i < obj.length; i++){
            obj[i] = 7;
        }
        
        console.log(obj);
        
        // waterfall like winning symbols check
        winCondition4 = false;
        winCondition3 = true;
        winCondition2 = true;
        winCondition1 = true;
        
        // if the spin is active, then disable bet options
        richTextBetIncrease.interactive = true;        
        richTextBetDecrease.interactive = true;
                
        generateSlotNumbers();
        
        if (credit >= bet && bet > 0 && !cashOutTrigger){
        if(credit >= bet){
        
        slot02Texture03.state.setAnimation(0, 'static' , true);
            
        credit = credit -bet;
        removeSlots(); 
        richTextCredit.text = credit;
        
        //generateSlotNumbers();
            
        console.log("object values :" +obj);
        
        // WRITE HERE an algoirthm, which will go from 3 winning combinations to 2 winning combinations and then to 1 winning combinations
        // indexes: 1 , 2 , 4, 5, 6 , 7, 9, 10 , 11, 12 , 13, 15,  DONE: 17, 18
        // from highest index to lowest: 10(5,3,2,1) , 18(0,1,2,5)
            
        // COMBINATION OF FOUR
        // Check for index 10 done
        if(!winCondition4){
        if(dataReference[10].response.results.symbolIDs[0] === obj[0] && dataReference[10].response.results.symbolIDs[1] === obj[1] && dataReference[10].response.results.symbolIDs[2] === obj[2] && dataReference[10].response.results.symbolIDs[3] === obj[3]){
            winCondition4 = true;
            console.log("index 18 triggered, should be 5 3 2 1");
            slot00Texture05.state.setAnimation(1, 'win', true);
            slot01Texture03.state.setAnimation(1, 'win', true);
            slot02Texture02.state.setAnimation(1, 'win', true);
            slot03Texture01.state.setAnimation(1, 'win', true);
            win = win + data[10].response.results.win * bet;
            
            richTextWinAmount.text = win;   
        }
        }    
        
        //Check for index 18 done  
        if(!winCondition4){    
        if(dataReference[18].response.results.symbolIDs[0] === obj[0] && dataReference[18].response.results.symbolIDs[1] === obj[1] && dataReference[18].response.results.symbolIDs[2] === obj[2] && dataReference[18].response.results.symbolIDs[3] === obj[3]){
            winCondition = true;
            console.log("index 18 triggered, should be 0 1 2 5");
            slot00Texture00.state.setAnimation(1, 'win', true);
            slot01Texture01.state.setAnimation(1, 'win', true);
            slot02Texture02.state.setAnimation(1, 'win', true);
            slot03Texture05.state.setAnimation(1, 'win', true);
            win = win + data[18].response.results.win * bet;
            richTextWinAmount.text = win;   
        } else {
            winCondition3 = false;
        }
        }
        // indexes to include: 1 (5,4,0), 5(2,1,0), 9(5,4,1), 11(4,0,1), 13(1,2,3), 15(0,2,3) 17(0,2,4)
        // COMBINATION OF THREE
        // Index 1 check done
        if(!winCondition3){   
         if(dataReference[1].response.results.symbolIDs[0] === obj[0] && dataReference[1].response.results.symbolIDs[1] === obj[1] && dataReference[1].response.results.symbolIDs[2] === obj[2])
        {
            console.log("index 1 triggered, should be 5 4 0");
            winCondition3 = true;
            slot00Texture05.state.setAnimation(1, 'win', true);
            slot01Texture04.state.setAnimation(1, 'win', true);
            slot02Texture00.state.setAnimation(1, 'win', true);
            win = win + data[1].response.results.win * bet;
            richTextWinAmount.text = win; 
        }           
        }    
        // Index 5 check done 
        if (!winCondition3){    
        if(dataReference[5].response.results.symbolIDs[0] === obj[0] && dataReference[5].response.results.symbolIDs[1] === obj[1] && dataReference[5].response.results.symbolIDs[2] === obj[2]){
            console.log("index 5 triggered, should be 2 1 0");
            winCondition3 = true;
            slot00Texture02.state.setAnimation(1, 'win', true);
            slot01Texture01.state.setAnimation(1, 'win', true);
            slot02Texture00.state.setAnimation(1, 'win', true);
            win = win + data[5].response.results.win * bet;
            richTextWinAmount.text = win;   
        }
        }
        // Index 9 check done
        if(!winCondition3){    
        if(dataReference[9].response.results.symbolIDs[0] === obj[0] && dataReference[9].response.results.symbolIDs[1] === obj[1] && dataReference[9].response.results.symbolIDs[2] === obj[2])
        {
            console.log("index 9 triggered, should be 5 4 1");
            winCondition3 = true;
            slot00Texture05.state.setAnimation(1, 'win', true);
            slot01Texture04.state.setAnimation(1, 'win', true);
            slot02Texture01.state.setAnimation(1, 'win', true);
            win = win + data[9].response.results.win * bet;
            richTextWinAmount.text = win; 
        }
        }  
        // Index 11 check
        if(!winCondition3){   
        if(dataReference[11].response.results.symbolIDs[0] === obj[0] && dataReference[11].response.results.symbolIDs[1] === obj[1] && dataReference[11].response.results.symbolIDs[2] === obj[2])
        {  
            winCondition3 = true;
            console.log("index 11 triggered, should be 4 0 1");
            slot00Texture04.state.setAnimation(1, 'win', true);
            slot01Texture00.state.setAnimation(1, 'win', true);
            slot02Texture01.state.setAnimation(1, 'win', true);
            win = win + data[11].response.results.win * bet;
            richTextWinAmount.text = win;             
        }    
        }  
        // Index 13 check
        if(!winCondition3){
        if(dataReference[13].response.results.symbolIDs[0] === obj[0] && dataReference[13].response.results.symbolIDs[1] === obj[1] && dataReference[13].response.results.symbolIDs[2] === obj[2])
        {   
            winCondition3 = true;
            console.log("index 13 triggered, should be 1 2 3");
            slot00Texture01.state.setAnimation(1, 'win', true);
            slot01Texture02.state.setAnimation(1, 'win', true);
            //slot02Texture03.state.setAnimation(1, 'win', true);
            win = win + data[13].response.results.win * bet;
            richTextWinAmount.text = win;             
        } 
        }
        // Index 15 check  
        if(!winCondition3){
        if(dataReference[15].response.results.symbolIDs[0] === obj[0] && dataReference[15].response.results.symbolIDs[1] === obj[1] && dataReference[15].response.results.symbolIDs[2] === obj[2])
        {   
            winCondition3 = true;
            console.log("index 15 triggered, should be 0 , 2 , 3");
            slot00Texture00.state.setAnimation(1, 'win', true);
            slot01Texture02.state.setAnimation(1, 'win', true);
            //slot02Texture03.state.setAnimation(1, 'win', true);
            win = win + data[15].response.results.win * bet;           
            richTextWinAmount.text = win; 
        }
        }
        
        if(!winCondition3){    
        if(dataReference[17].response.results.symbolIDs[0] === obj[0] && dataReference[17].response.results.symbolIDs[1] === obj[1] && dataReference[17].response.results.symbolIDs[2] === obj[2])
        {
            console.log("index 17 triggered, should be 0 2 4");
            winCondition3 = true;
            slot00Texture00.state.setAnimation(1, 'win', true);
            slot01Texture02.state.setAnimation(1, 'win', true);
            slot02Texture04.state.setAnimation(1, 'win', true);
            win = win + data[17].response.results.win * bet;
            richTextWinAmount.text = win;             
        } else {
            winCondition2 = false;
        }
        }       
        // COMBINATION OF TWO
        
        // indexes to include: 4(1,0) , 7(2,0), both are correct
            
            
        if (!winCondition2){
        if(dataReference[4].response.results.symbolIDs[0] === obj[0] && dataReference[4].response.results.symbolIDs[1] === obj[1]){
            console.log("index 4 triggered, should be 1 0");
            winCondition2 = true;
            slot00Texture01.state.setAnimation(1, 'win', true);
            slot01Texture00.state.setAnimation(1, 'win', true);
            win = win + data[4].response.results.win * bet;

            richTextWinAmount.text = win;             
        }
        }
         
        if(!winCondition2){  
        if(dataReference[7].response.results.symbolIDs[0] === obj[0] && dataReference[7].response.results.symbolIDs[1] === obj[1]){
            console.log("index 7 triggered, should be 2 0");
            winCondition2 = true;
            slot00Texture02.state.setAnimation(1, 'win', true);
            slot01Texture00.state.setAnimation(1, 'win', true);
            win = win + data[7].response.results.win * bet;
            richTextWinAmount.text = win; 
        } else {
            winCondition1 = false;
        }
        }     
        
        
        // indexes to include: 2(0), 6(5), 12(1)
        // all included
        if(!winCondition1){   
        if (dataReference[2].response.results.symbolIDs[0] === obj[0]){
            winCondition1 = true;
            console.log("index 2 was triggered, it should be 2");
            slot00Texture00.state.setAnimation(1, 'win', true);
            win = win + data[2].response.results.win * bet;
            richTextWinAmount.text = win; 
        }
        }       
        
        if(!winCondition1){   
        if (dataReference[6].response.results.symbolIDs[0] === obj[0]){
            winCondition1 = true;
            console.log("index 6 was triggered, it should be 5");
            slot00Texture05.state.setAnimation(1, 'win', true);
            win = win + data[6].response.results.win * bet;
            richTextWinAmount.text = win;             
        }
        }
        if(!winCondition1){   
        if (dataReference[12].response.results.symbolIDs[0] === obj[0]){
            winCondition1 = true;
            console.log("index 12 was triggered, it should be 1");
            slot00Texture01.state.setAnimation(1, 'win', true);
            win = win + data[12].response.results.win * bet;
            richTextWinAmount.text = win;             
        } else {
            winCondition1 = true;
        }
        }

        }

        }
        


        win = win;
        // preventing to generate pictures if there are no money inside the machine
        if (credit >= bet && bet > 0 && !cashOutTrigger){
        if(credit >= bet){
        getContainer1();
        getContainer2();
        getContainer3();
        getContainer4();
        }
        }
        
        richTextBetIncrease.interactive = true;        
        richTextBetDecrease.interactive = true;
        
        // clearing out the obj values
        for (i = 0; i < obj.length; i++){
            obj[i] = 7;
        } 
        
    }
             
    function increaseBet(){
        if(credit > 0 && bet < credit){
        if (!cashOutTrigger){
                    bet++;
        richTextBetValue.text = bet;
        } else {
            console.log("not enough credit");
            }
        }

    }
        
    function decreaseBet(){
        if (bet > 0 && !cashOutTrigger){
        bet--;
        richTextBetValue.text = bet;
        }
    }

            
    function transferWinToCredit(){
        if (win > 0 && !cashOutTrigger) {
            credit = credit + win; 
            richTextCredit.text = credit;
            win = 0;
            richTextWinAmount.text = win;
            
        }
    }
        
    app.stage.addChild(richTextInsertCoin);  
    app.stage.addChild(richTextYourCredit);
    app.stage.addChild(richTextCredit);
    app.stage.addChild(richTextCashOut);
    app.stage.addChild(richTextWinToCredit);
    app.stage.addChild(richTextWIN);
    app.stage.addChild(richTextWinAmount);
    app.stage.addChild(richTextSPIN);
    app.stage.addChild(richTextBET);
    app.stage.addChild(richTextBetValue);
    app.stage.addChild(richTextBetIncrease);
    app.stage.addChild(richTextBetDecrease);
        
    app.start();   

    
});