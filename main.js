// RGB
const container = document.querySelector('.container')
const rgb = document.querySelector('.rgb')
const inputR = document.querySelector('.input-r')
const inputG = document.querySelector('.input-g')
const inputB = document.querySelector('.input-b')
const RNum = document.querySelectorAll('span')[1]
const GNum = document.querySelectorAll('span')[3]
const BNum = document.querySelectorAll('span')[5]
const hex = document.querySelector('.hex')

rgb.addEventListener('input', function (event) {
  let inputRValue = Number(inputR.value)
  let inputGValue = Number(inputG.value)
  let inputBValue = Number(inputB.value)
  if (event.target.tagName === "INPUT") {
    RNum.innerText = inputRValue
    GNum.innerText = inputGValue
    BNum.innerText = inputBValue   // 字串
  }
  let HevinputRValue = inputRValue.toString(16)
  let HevinputGValue = inputGValue.toString(16)
  let HevinputBValue = inputBValue.toString(16)
  if (inputRValue < 16) {
    HevinputRValue = '0' + HevinputRValue
  }
  if (inputGValue < 16) {
    HevinputGValue = '0' + HevinputGValue
  }
  if (inputBValue < 16) {
    HevinputBValue = '0' + HevinputBValue
  }
  hex.innerText = `#${HevinputRValue}${HevinputGValue}${HevinputBValue}`
  container.style.backgroundColor = `#${HevinputRValue}${HevinputGValue}${HevinputBValue}`
})