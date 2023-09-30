const menuBtn = document.querySelector('.menu-btn');
const headerNavMobile = document.querySelector('.header-nav-mobile');
const btnCloseNav = document.querySelector('.btn-close-nav');
const linkPortfolio = document.querySelector('.link-portfolio');
const linkAbout = document.querySelector('.link-about');
const linkContact = document.querySelector('.link-contact');
const arrayBtnPopup = document.querySelectorAll('.btn-popup');
const form = document.querySelector('.form-input');
const [fullName, firstName, lastName, email, textArea] = form.elements;
const mediaqueryList = window.matchMedia('(max-width: 768px)');

const screenTest = (e) => {
  if (e.matches) {
    fullName.required = true;
    firstName.required = false;
    lastName.required = false;
  } else {
    fullName.removeAttribute('required');
    firstName.required = true;
    lastName.required = true;
  }
};

screenTest(mediaqueryList);
mediaqueryList.addListener(screenTest);

let inputData = {};
if (localStorage.savedForm) {
  inputData = JSON.parse(localStorage.getItem('savedForm'));
}
fullName.addEventListener('change', () => {
  inputData.fullName = fullName.value;
});

firstName.addEventListener('change', () => {
  inputData.firstName = firstName.value;
});

lastName.addEventListener('change', () => {
  inputData.lastName = lastName.value;
});

email.addEventListener('change', () => {
  inputData.email = email.value;
});

textArea.addEventListener('change', () => {
  inputData.textArea = textArea.value;
});

const fillDataInput = () => {
  if (inputData.fullName) {
    fullName.value = inputData.fullName;
  }
  if (inputData.firstName) {
    firstName.value = inputData.firstName;
  }
  if (inputData.lastName) {
    lastName.value = inputData.lastName;
  }
  if (inputData.email) {
    email.value = inputData.email;
  }
  if (inputData.textArea) {
    textArea.value = inputData.textArea;
  }
};

const populateFields = () => {
  localStorage.setItem('savedForm', JSON.stringify(inputData));
  fillDataInput();
};

populateFields();
form.onchange = populateFields;
const errMsgEmail = document.querySelector('small');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.add('hidden');
  headerNavMobile.classList.remove('hidden');
});

btnCloseNav.addEventListener('click', () => {
  menuBtn.classList.remove('hidden');
  headerNavMobile.classList.add('hidden');
});

linkPortfolio.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

linkAbout.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

linkContact.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const regex = /[A-Z]/;
  if (!regex.test(email.value)) {
    form.submit();
  } else {
    errMsgEmail.innerText = 'Please the content of email field has to be in lower case';
  }
});

/* const dataCards = [
  {
    id: 1,
    url: './img/Math-magician.png',
    title: 'Math Magician',
    description: `A calculator application created with React.`,
    tecnologies: {
      tech1: 'React',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://math-magiciens.onrender.com/',
    linkSource: 'https://github.com/Patfarmurs/magiciens-math',
  },
  {
    id: 2,
    url: './img/expense-tracker-1.png',
    title: 'Budget App',
    description: `Budget App: is a web-based rails application.`
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://my-budget-3al3.onrender.com/',
    linkSource: 'https://github.com/Patfarmurs/budgetapp',
  },

  {
    id: 3,
    url: './img/Space Traveler-hub.png',
    title: 'Budget App',
    description: `Budget App: is a web-based rails application.`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://space-hub-traveller.netlify.app/',
    linkSource: 'https://github.com/Patfarmurs/react-group-project',
  },

  {
    id: 4,
    url: './img/Space Traveler-hub.png',
    title: 'Space-Hub Traveller',
    description: `A collaborative website that highlights the use of react/redux.`,
    tecnologies: {
      tech1: 'React',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: '',
    linkSource: 'https://github.com/Patfarmurs/react-group-project',
  },
];
*/
const cardWorkDetailsMobile = (index) => `
  <article class="card-work-details-mobile">
          <button type="button" class="btn-close-details">
              <img src="./img/X-icon.svg" alt="X icon">
          </button>
          <div class="card-image-details-mobile">
              <img src=${[index].url} alt="Snapshoot Portfolio">
          </div>
          <h2 class="card-title-mobile">
              ${[index].title}
          </h2>
          <ul class="card-tags-mobile">
              <li class="tag-mobile">${[index].tecnologies.tech1}</li>
              <li class="tag-mobile">${[index].tecnologies.tech2}</li>
              <li class="tag-mobile">${[index].tecnologies.tech3}</li>
              <li class="tag-mobile">${[index].tecnologies.tech4}</li>
          </ul>
          <p class="card-paragraph-mobile">
            ${[index].description}
          </p>
          <div class="card-button-mobile">
                  <a href=${[index].linkVersion} class="btn-card-details-mobile">
                  See Live
                  <img src="./img/see_live_icon.svg" alt="live icon">
                  </a>
                  <a href=${[index].linkSource} class="btn-card-details-mobile">
                  See Sources
                  <img src="./img/github.svg" alt="github icon">
                  </a>
         </div>
         <script src="index.js"></script>
     </article>
     `;

for (let i = 0; i < arrayBtnPopup.length; i += 1) {
  arrayBtnPopup[i].addEventListener('click', () => {
    const cardWork = document.createElement('div');
    cardWork.innerHTML = cardWorkDetailsMobile(i);
    document.body.appendChild(cardWork);
    const btnCloseDetailsMobile = document.querySelector('.btn-close-details');
    btnCloseDetailsMobile.addEventListener('click', async () => {
      document.body.removeChild(cardWork);
    });
  });
}
