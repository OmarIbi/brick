const backgroundColors = [0xC0392B, 0x884EA0, 0x2471A3, 0x17A589, 0xF39C12, 0xA6ACAF];

let app = new PIXI.Application({
    width: 240,
    height: 320,
    backgroundColor:  backgroundColors[Math.floor(Math.random()*backgroundColors.length)]

});

document.body.appendChild(app.view);


const firstTextStyle = new PIXI.TextStyle({
    align: "center",
    fill: "white",
    fontSize: 30,
   // wordWrap: true,
    //wordWrapWidth: 130
});
const firstText = new PIXI.Text('IBI', firstTextStyle);
firstText.anchor.set(0.5, 0.5);
firstText.x = 200;
firstText.y = 20;
app.stage.addChild(firstText);  

const titles = new PIXI.Sprite.from("/sprites/sasuki.png");
titles.anchor.set(0.5);
titles.scale.set(0.04, 0.04);
titles.x = 120;
titles.y = 60;

const titleSisui = new PIXI.Sprite.from("/sprites/sisui.png");
titleSisui.anchor.set(0.5);
titleSisui.scale.set(0.1, 0.1);
titleSisui.x = 200;
titleSisui.y = 140;

const rinigan = new PIXI.Sprite.from("/sprites/rinigan.png")
rinigan.anchor.set(0.5);
rinigan.scale.set(0.3, 0.3);
rinigan.x = 120;
rinigan.y = 140;

const titleObito = new PIXI.Sprite.from("/sprites/obito.png");
titleObito.anchor.set(0.5);
titleObito.scale.set(0.04, 0.04);
titleObito.x = 40;
titleObito.y = 140;

const title = new PIXI.Sprite.from("/sprites/Kakashi.png");
title.anchor.set(0.5);
title.scale.set(0.12, 0.12);
title.x = 120;
title.y = 220;

app.stage.addChild(titles,title,titleSisui,titleObito,rinigan);


app.ticker.add((delta) => {
    title.rotation += 0.06 * delta;
    titles.rotation += 0.06 * delta;
    titleSisui.rotation += 0.06 * delta;
    titleObito.rotation += 0.06 * delta;
    rinigan.rotation -= 0.06 * delta;
    //rinigan.width += 0.05;
    //rinigan.height += 0.05;
});



const TextStyle = new PIXI.TextStyle({
    align: "center",
    fill: "white",
    fontSize: 20,
   // wordWrap: true,
    //wordWrapWidth: 130
});
const Text = new PIXI.Text('Press any key to play', TextStyle);
Text.anchor.set(0.5, 0.5);
Text.x = 120;
Text.y = 280;
app.stage.addChild(Text);

document.addEventListener("keydown", handleKeyDown);
function handleKeyDown(et) {
    
    if (et) {
        startGame();
    }
    

};

function startGame() {
    window.open("index.html", "_self");
}