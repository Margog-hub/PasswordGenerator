// создать input
// добавить class
// добавить placeholder
// сбросить стандартное поведение input
// добавить обработчик по нажатию
//
// добавить кнопку скопировать
// добавить кнопку сгенерировать
// создать функцию генерации паролей

const mainEl = document.querySelector(".main");

const passwordEl = document.createElement("input");
passwordEl.classList.add("password");
passwordEl.setAttribute("placeholder", "Сгенерировать пароль");
passwordEl.addEventListener("keypress" , (e) => {
  e.preventDefault();
});
passwordEl.addEventListener("focus", (e) => {
  navigator.clipboard.writeText(passwordEl.value);
});


const copyBtn  = document.createElement("button");
copyBtn.classList.add("password-button");
copyBtn.innerText ="Скопировать";
copyBtn.addEventListener("click", (e) => {
  passwordEl.select();
  passwordEl.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(passwordEl.value);
});


const generateBtn = document.createElement("button");
generateBtn.classList.add("password-button");
generateBtn.innerText ="Сгенерировать";
generateBtn.addEventListener("click", (e) => {
 let password =generatePassword(12);
 passwordEl.value = password;
});
//функция генерация пароля

// вариант 1
// function generatePassword(passwordLength) {
//   const numberChars = "0123456789";
//   const unnerChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const lowerChars = "abcdefghijklmnopqrstuvwxyz";
//   const symbolChars = "!@#$%^&*()_+";
//   const allChars = numberChars + unnerChars + lowerChars + symbolChars;
  
//    let randomString = "";
//    for( let i = 0; i < passwordLength; i++) {
//           let randomNumber = Math.floor(Math.random() * allChars.length);
//           randomString += allChars[randomNumber];
//    }
//    return randomString;
// }


// 
// вариант 2
function generatePassword(length = 12) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let password = "";
  
  for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
  }
  return password;
}

mainEl.appendChild(passwordEl);
mainEl.appendChild(copyBtn);
mainEl.appendChild(generateBtn);

