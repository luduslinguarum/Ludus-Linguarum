let xp = 0;

function answer(selected) {
  if (selected === 'Salve') {
    xp += 10;
    document.getElementById('xp').innerText = xp;
    alert('Bravo ! Vous avez gagné 10 écus d’or.');
  } else {
    alert('Non, essaie encore !');
  }
}