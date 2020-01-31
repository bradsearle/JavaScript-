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

function displayContent() {
  for (i = 0; i < superData.members.length; i++) {
    feedMeContent.innerHTML += `
    
      <p>${superData.members[i].secretIdentity}</p>
  `;
  }
}

displayContent();

// <p>Watch out for ${superData.members[i].pronoun} ${superData.members[i].powers}</p>

// function displayContent() {
//   for (i = 0; i < superData.members.length; i++) {
//     feedMeContent.innerHTML += `

//  Seriously lets do that. Want to meet out this weekend, maybe The Natural Gardener or a coffee shop?

//       <p>${superData.members[i].secretIdentity}</p>
//   `;
//   }
// }

var numbers = [29, 39, 77, 1342];

var totalSum = 0;
