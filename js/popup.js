import {createWizards} from './data.js';

const userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

userDialog.querySelector('.setup-similar').classList.remove('hidden');

const similarListElement = userDialog.querySelector('.setup-similar-list');
const similarWizardsTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

const similarWizards = createWizards();

similarWizards.forEach(({name, coatColor, eyesColor}) => {
  const wizardElement = similarWizardsTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = name;
  wizardElement.querySelector('.wizard-coat').style.fill = coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = eyesColor;
  similarListElement.append(wizardElement);
});

