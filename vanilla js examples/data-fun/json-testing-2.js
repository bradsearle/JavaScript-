// Orig tutorial https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

var superData = {
  squadName: 'The Super Squad',
  homeTown: 'Metro City',
  formed: 2016,
  secretBase: 'Bat Cave',
  active: true,
  members: [
    {
      name: 'Molecule Man',
      age: 29,
      pronoun: 'his',
      secretIdentity: 'Danny Jukes',
      powers: ['Radiation resistance', ' Turning tiny', ' Radiation blast']
    },
    {
      name: 'Madame Haymaker',
      age: 39,
      pronoun: 'her',
      secretIdentity: 'Jane Wilson',
      powers: ['Mean right hook', ' Super strength', ' Superhuman reflexes']
    },
    {
      name: 'Eternal Flame',
      age: 77,
      pronoun: 'her',
      secretIdentity: 'Jenny Block',
      powers: [
        'Immortality',
        ' Heat Immunity',
        ' Inferno Punch',
        ' Interdimensional travel'
      ]
    },
    {
      name: 'Penelope Power',
      age: 1342,
      pronoun: 'their',
      secretIdentity: 'The People',
      powers: [
        'Morality',
        ' Compassion',
        ' Empathy',
        ' Togetherness',
        ' Community'
      ]
    }
  ]
};

const colorButton = document.getElementById('changeColor');
const contentYo = document.getElementById('content');
console.log('what is value of ', contentYo);

function changeColor() {
  colorButton.onclick = function() {
    contentYo.classList.add('change-color');
  };
}

function displayContent() {
  for (i = 0; i < superData.members.length; i++) {
    content.innerHTML += `
      <p>The super hero ${superData.members[i].secretIdentity} just flew in from ${superData.homeTown}</p>
  `;
  }
}

displayContent();

changeColor();
