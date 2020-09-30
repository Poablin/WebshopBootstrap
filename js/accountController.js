function updateContactInformation() {
    let stringified = JSON.stringify(model.users[searchUserIndex(model.currentUserId)]);
    let parsed = JSON.parse(stringified);
    model.users[model.currentUserId] = parsed;
    showContactInformation()
    alert('Informasjonen er lagra!')
}

function updatePassword() {
    const editPasswordInput = model.inputs.user.editPassword;
    if (editPasswordInput.newPassword.length < 3) return alert('Passordet er for kort!')
    if (editPasswordInput.newPassword != editPasswordInput.confirmPassword) return alert ('Bekreftet passord er ulikt!')
    if (editPasswordInput.oldPassword === model.users[model.currentUserId].password && editPasswordInput.newPassword === editPasswordInput.confirmPassword) {
        model.users[model.currentUserId].password = editPasswordInput.newPassword
        showChangePassword()
        return alert('Passord er bytta!') 
    }
    showChangePassword()
    alert('Gammelt passord er feil!')
}