

function clearError () {
    const displayError = document.getElementById('error')
    displayError.innerText = ''
}

clearError()


function generatePassword() {

    clearError()
    clearCopy()

    

    let len = document.getElementById('panjangPassword').value

    if(len < 3 ){
        let err = new Error('panjang password harus di isi dan tidak boleh kurang dari 3')
        const displayError = document.getElementById('error')
        displayError.innerText = err
    }


    let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    let uppperCase = lowerCase.toUpperCase()
    let numerik = '1234567890';
    let simbol = '!@#$%^&*_+-'

    let data = lowerCase + uppperCase + numerik + simbol;

    let password = '';

    for (let i = 0; i < len; i++) {
        password += data[Math.floor(Math.random() * data.length)]  
    }

    let Displaypassword = document.getElementById('password')
    Displaypassword.value = password

    document.getElementById('panjangPassword').value = ''

    return password

}


function copyPassword(){
    // cek apakah password sudah ada atau belum
    const NewPassword = document.getElementById('password').value

    console.log(NewPassword)
        
    navigator.clipboard.writeText(NewPassword)
    const copyEl = document.getElementById('copyEl')

    copyEl.innerText = 'berhasil di copy'

}

function clearCopy() {
    const copyEl = document.getElementById('copyEl')
    copyEl.innerText = ''   
}