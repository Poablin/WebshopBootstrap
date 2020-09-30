function showError() {
    appDiv.innerHTML = `
    <div>
        <p>${model.currentUserId === null || model.users[model.currentUserId].isAdmin != true ? 'Du har ikke tilgang til denne siden' : 'Du er allerede logget inn'}</p>
    </div>
    <button onclick="showA()">Returner til Home?</button>
    `;
}