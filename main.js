let str = `
010-1234-5678
thesecond@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록

`

//const regexp =new RegExp('the','gi')
const regexp= /the/gi
console.log(str.match(regexp))

const regexpTest = /fox/gi
console.log(regexpTest.test(str))


// str = str.replace(regexpTest,'dog')
// console.log(str)

const regexp2= /the/
console.log(str.match(regexp2))

const regexp3= /the/g
console.log(str.match(regexp3))

const regexp4= /the/gi
console.log(str.match(regexp4))


const regexp5 =  /\.$/gi
console.log(str.match(regexp5))

const regexp6 =  /\.$/gim
console.log(str.match(regexp6))

console.log('05. 패턴 \n\n\n')

console.log(
  str.match(/d$/gm)
)
console.log(
  str.match(/^d/gm)
)
console.log(
  str.match(/^t/gm)
)

console.log(
  str.match(/./g)
)

console.log(
  str.match(/h..p/g)
)
console.log(
  str.match(/fox|dog/g)
)
console.log(
  str.match(/https?/g)
)
console.log(
  str.match(/d{2}/g)
)
console.log(
  str.match(/d{2,}/)
)
console.log(
  str.match(/d{2,3}/)
)
console.log(
  str.match(/\w{2,3}/g)
)
console.log(
  str.match(/\b\w{2,3}\b/g)
)

console.log(
  str.match(/[fox]/g)
)
console.log(
  str.match(/[0-9]{1,}/g)
)
console.log(
  str.match(/[가-힣]{1,}/g)
)
console.log('06. 패턴 \n\n\n')

console.log(
  str.match(/\w/g)
)


console.log(
  str.match(/\bf\w{1,}\b/g)
)
console.log(
  str.match(/\d{1,}/g)
)

console.log(
  str.match(/\s/g)
)
let h = ` the  hello  world    !`

console.log(
  h.match(/\s/g)
)
console.log(h)

h= h.replace(/\s{2,}/g,' ')
console.log(h)

console.log(
  str.match(/.{1,}(?=@)/g)
)
console.log(
  str.match(/(?<=@).{1,}/g)
)