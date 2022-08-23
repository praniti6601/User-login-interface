const forgotUn = document.querySelector('.fun');
const forgotPw = document.querySelector('.fpw');
const submit = document.querySelector('.button');



forgotUn.addEventListener('click', () => {
    alert('Username is "pragya".');
});

forgotPw.addEventListener('click', () => {
    alert('Password is "yadav", and remember, tis case sensitive.');
});

submit.addEventListener('click', () => {
    const username = document.querySelector('#un').value
    const password = document.querySelector('#pw').value
    const firstPro = document.querySelector('.icon')
    const firstPro1 = document.querySelector('.iconimg')
    const success = document.querySelector('.icon2')
    const success1 = document.querySelector('.iconimg2')
    const welcome = document.querySelector('.wel')
    const loading = document.querySelector('.wel2')
    const time = document.querySelector('.load')
    const remove = document.querySelector('.textcon')
    
    if (username === 'pragya' && password === 'yadav') {
        loading.classList.add('show')
        remove.classList.add('none')
        welcome.classList.add('none')
        time.classList.add('show')
        document.body.style.cursor = 'wait'
        setInterval(() => {
        firstPro.classList.add('none')
        firstPro1.classList.add('none')
        success.classList.add('show')
        success1.classList.add('show')
        loading.classList.remove('show')
        welcome.classList.remove('none')
        welcome.innerText = 'Hello, Pragya Yadav'
        time.classList.remove('show')
        document.body.style.cursor = 'default'
        }, 3000)
    } else {
        alert('Wrong password and/or username.')
    }
});