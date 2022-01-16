var builders = [],
    tools = [];

function ARModel(name, dialogue) {
    //we can make name link to the el id to find it on click?
    this.name = name;
    this.dialogue = dialogue;
}

ARModel.prototype.speak = function() {
    return this.dialogue;   
}

//Builder model
function Builder(name, dialogue, tool, successDialogue) {
    ARModel.call(this, name, dialogue);
    this.tool = tool;
    this.successDialogue = successDialogue;
}

Builder.prototype = Object.create(ARModel.prototype);

//Tool model
function Tool(name, dialogue) {
    ARModel.call(this, name, dialogue);
}

Tool.prototype = Object.create(ARModel.prototype);

function initiateModels() {
    var buildersArray = [
      {
        name: 'papa-smurf',
        dialogue: 'شرشبيل بايق السنافر و لازم نرجعهم! لازم نجمع ٥ اشياء مهمة عشان نقدر ننقذهم بس ماقدر اقولكم شنو الاشياء عشان محد يسمعنا 👀 انا بلمح و انتوا لازم تفهمونها 😁بس حطو فبالكم ان ما نقدر نجمع غرض قبل الثاني،، الحقني لاب 227\n',
      },
      {
        name: 'papa-smurf1',
        dialogue: 'Clue 1: يا وردتي يا ندية،، روحي لخلي....',
        tool: new Tool('giftBox', '🎁🎁'),
        successDialogue: 'مبروك لقيت الهديه 🎁!،، روح لاب 225'
      },
      {
        name: 'papa-smurf2',
        dialogue: 'Clue 2: يا شين السرج على...',
        tool: new Tool('cow', '🐮🐄'),
        successDialogue: 'مووووووو 🐄🐮 لقيتها!،، اللغز الثالث قريب من المي'
      },
      {
        name: 'papa-smurf3',
        dialogue: 'Clue 3: الطول طول ؟',
        tool: new Tool('palmTree', '🌴🌴'),
        successDialogue: 'شكلك محترف 🌴🌴!،، دور بين الكتب على اللغز الرابع'
      },
      {
        name: 'papa-smurf4',
        dialogue: 'Clue 4: و العقل عقل؟',
        tool: new Tool('goat', '🐐🐐'),
        successDialogue: 'يا سيد العاقلين 🧠🐐!،، اللغز الاخير عند البدايه ...'
      },
      {
        name: 'papa-smurf5',
        dialogue: 'Clue 5: اذا طاح الجمل كثرت سجاجينة',
        tool: new Tool('knife', '🔪🗡'),
        successDialogue: 'مبروووك!🎉،، كلمة السر هي: سنفور المفكر'
      },
    ];

    buildersArray.forEach(function(builder){
        builders.push(new Builder(builder.name, builder.dialogue, builder.tool, builder.successDialogue));
        if (builder.tool) tools.push(builder.tool);
    });

    console.log('builders', builders);
    console.log('tools', tools)
}

initiateModels();
