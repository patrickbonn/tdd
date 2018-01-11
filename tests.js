const checkUsername = (user) => {
  return /^[a-zA-Z]+$/.test(user)
}
const checkEmail = (user) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user)
}
//console.log("Username is just letters: ",  checkUsername("Tommy"))
// hallo

const checkPassword = (user) => {
	return /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,}))/.test(user)

}

const checkAge = (user) => {
	//return /^(?:[1-9]\d{2,}+|[2-9]\d|1[89])$/.test(user)
}//EINS SUCHEN DAS GEHT REGEX OVER 18


// so das hier unten weil es länger wird 
// das hinter dem return bedeutet er prüft
// die dort stehenden bedingungen auf ihre
// richtigkeit, z.B. checkPassword muss
// 1 Großbuchstaben, 1 Zahl, 1 Sonderzeichen(!)
// und es muss mindestens 8 Zeichen lang sein 