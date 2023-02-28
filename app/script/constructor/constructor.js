const minSum = 86000;
const optionValue = 1000;


const slider = document.querySelector('.slider__input');
const totalLengthElement = document.querySelector('.constructor__length-result-value');
const totalSumElement = document.querySelector('.constructor__price');
const configurationElement = document.querySelector('.constructor__configuration-wrapper');

const formData = {
  element: document.querySelector('#constructor-form'),
  lengthValue: slider.value,
  optionsValue: 0,
  totalSum: 0,
}

setOptionsValue(formData);
setTotalSum(formData);

updateValues(formData)

configurationElement.addEventListener('input', (e) => {
  if (e.target.classList.contains('slider__input')) {
    const lengthCoeff = e.target.value
    formData.lengthValue = lengthCoeff;
    formData.totalSum = minSum + (lengthCoeff * 2000) + formData.optionsValue;
  }
  if (e.target.classList.contains('checkbox__input')) {
    if (e.target.checked)  {
      formData.optionsValue = formData.optionsValue + optionValue
      formData.totalSum = formData.totalSum + optionValue
    } else {
      formData.optionsValue = formData.optionsValue - optionValue
      formData.totalSum = formData.totalSum - optionValue
    }
  }

  updateValues(formData)
});

function updateValues(formData) {
  totalLengthElement.innerHTML = `${formData.lengthValue} м`;
  totalSumElement.innerHTML = `${formData.totalSum.toLocaleString('ru-RU')} &#8381;`;
}

function setOptionsValue(form) {
  const checkboxNodeList = form.element.querySelectorAll('.checkbox__input')
  const checkboxArr =  Array.from(checkboxNodeList);

   const result = checkboxArr.reduce(
    (sum, currentItem) => {
      if (currentItem.checked) {
        sum = sum + 1000;  
      }
      return sum;
    },0);

   formData.optionsValue = result;
}

function setTotalSum(form) {
  form.totalSum = minSum + (form.lengthValue * 2000) + form.optionsValue;
}