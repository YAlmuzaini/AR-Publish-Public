var builders = [],
  tools = [];

function ARModel(name, dialogue) {
  //we can make name link to the el id to find it on click?
  this.name = name;
  this.dialogue = dialogue;
}

ARModel.prototype.speak = function () {
  return this.dialogue;
};

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
      name: "male",
      dialogue:
        "يلا نلعب !, حل اللغز واجمع المفاتيح عشان تفوز , ديربالك من الالغام<br/> Clue 1: يا وردتي يا ندية،، روحي لخلي هديه",
    },
    {
      name: "giftBox",
      dialogue: "هاك هديه 🎁🎁 <br/>مفتاح : M <br/> Clue 2: بغيناه عون صار....",
    },
    {
      name: "pharaoh",
      dialogue:
        "لقيت فرعون <br/>مفتاح : A <br/> Clue 3: جاك الموت يا تارك ......",
    },
    {
      name: "praying",
      dialogue:
        "روح صل 🤲🙏<br/>مفتاح : J <br/> Clue 4: حط فلوسك بال ..... واقعد بالظلال",
    },
    {
      name: "sun",
      dialogue:
        "صباح الخير 🌞🌞<br/>مفتاح : O <br/> Clue 5: اذا طاح الجمل كثرت ...",
    },
    {
      name: "knife",
      dialogue:
        "لا تجرح نفسك 🔪🔪! <br/>مفتاح : N <br/> برافووو !! فزتوا باللعبه",
    },

    {
      name: "female",
      dialogue:
        "❌❌ لغم",
    },
    {
      name: "doctor",
      dialogue:
        "❌❌ لغم",
    },
    {
      name: "sleep",
      dialogue:
        "❌❌ لغم",
    },
    {
      name: "horse",
      dialogue:
        "❌❌ لغم",
    },
    {
      name: "eagle",
      dialogue:
        "❌❌ لغم",
    },
    {
      name: "spatula",
      dialogue:
        "❌❌ لغم",
    },

  ];

  buildersArray.forEach(function (builder) {
    builders.push(
      new Builder(
        builder.name,
        builder.dialogue,
        builder.tool,
        builder.successDialogue
      )
    );
    if (builder.tool) tools.push(builder.tool);
  });

  console.log("builders", builders);
  console.log("tools", tools);
}

initiateModels();
