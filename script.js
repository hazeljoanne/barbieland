function goToPage(pageId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

function selectCharacter(character) {
    alert(`You selected ${character}!`);
}
