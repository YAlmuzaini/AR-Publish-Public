var builders = [],
  tools = [];

function ARModel(name, dialogue) {
  //we can make name link to the el id to find it on click?
  this.name = name;
  this.dialogue = dialogue;
}

ARModel.prototype.speak = function () {
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
      name: 'male',
      dialogue: 'يلا نلعب !',
      successDialogue: 'Clue 0: يا وردتي يا ندية،، روحي لخلي....'
    },
    {
      name: 'female',
      dialogue: 'يلا نلعب !',
      successDialogue: 'Clue 0: يا وردتي يا ندية،، روحي لخلي....'
    },
    {
      name: 'doctor',
      dialogue: 'Clue 1: يا وردتي يا ندية،، روحي لخلي....',
      successDialogue: 'Clue 120: يا وردتي يا ندية،، روحي لخلي....'
    },    
    {
      name: 'eagle',
      dialogue: 'Clue 2: يا وردتي يا ندية،، روحي لخلي....',
    },    
    {
      name: 'giftBox',
      dialogue: 'Clue 3: يا وردتي يا ندية،، روحي لخلي....',
    },    
    {
      name: 'horse',
      dialogue: 'Clue 4: يا وردتي يا ندية،، روحي لخلي....',
    },    
    {
      name: 'kinfe',
      dialogue: 'Clue 5: يا وردتي يا ندية،، روحي لخلي....',
    },    
    {
      name: 'pharaoh',
      dialogue: 'Clue 6: يا وردتي يا ندية،، روحي لخلي....',
    },    
    {
      name: 'praying',
      dialogue: 'Clue 7: يا وردتي يا ندية،، روحي لخلي....',
    },    
    {
      name: 'sleep',
      dialogue: 'Clue 8: يا وردتي يا ندية،، روحي لخلي....',
    },    
    {
      name: 'spatula',
      dialogue: 'Clue 9: يا وردتي يا ندية،، روحي لخلي....',
    },
    {
      name: 'sun',
      dialogue: 'Clue 10: اذا طاح الجمل كثرت سجاجينة',
    },
  ];

  buildersArray.forEach(function (builder) {
    builders.push(new Builder(builder.name, builder.dialogue, builder.tool, builder.successDialogue));
    if (builder.tool) tools.push(builder.tool);
  });

  console.log('builders', builders);
  console.log('tools', tools)
}

initiateModels();
