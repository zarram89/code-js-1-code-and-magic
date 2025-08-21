import {createWizards} from './data.js';

const similarElement = document.querySelector('.setup-similar');

const similarListElement = similarElement.querySelector('.setup-similar-list');
const similarWizardsTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

const similarWizards = createWizards();

export const renderSimilarList = () => {
  const similarListFragment = document.createDocumentFragment();

  similarWizards.forEach(({name, colorCoat, colorEyes}) => {
    const wizardElement = similarWizardsTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = name;
    wizardElement.querySelector('.wizard-coat').style.fill = colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = colorEyes;
    similarListFragment.append(wizardElement);
  });

  similarListElement.appendChild(similarListFragment);
  similarElement.classList.remove('hidden');
};

export const clearSimilarList = () => {
  similarListElement.innerHTML = '';
};

