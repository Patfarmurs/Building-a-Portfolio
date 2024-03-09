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

const dataCards = [
  {
    id: 1,
    url: './img/Math-magician.png',
    title: 'Math Magician',
    description: `A calculator application created with React. Users can perform basic operations 
    such as addition, subtraction, multiplication, and division, as well as more advanced operations like modulo. `,
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
    url: './img/latter-days-temple.jpg',
    title: 'Fetch Some latter days Temples ',
    description: `Budget App: is a web-based rails application, designed to help users manage their finances and track their expenses. 
    It provides features such as user signup and login functionality to ensure secure access to personal budget information.
    The application allows users to create and manage categories. 
    Categories represent different types of expenses.`,

    tecnologies: {
      tech1: 'css',
      tech2: 'JavaScript',
      tech3: 'html',
      tech4: '',
    },
    linkVersion: 'https://patfarmurs.github.io/cse121b/w05-task.html',
    linkSource: 'https://github.com/Patfarmurs/cse121b/tree/feature',
  },

  {
    id: 2,
    url: './img/Space-Traveler-hub.png',
    title: 'Space Traveler Hub',
    description: `Space Traveler Hub: is a collaborative website that highlights the use of react/redux. 
    A user can join the mission, reserve a Rocket, and cancel the reservation.`,

    tecnologies: {
      tech1: 'React',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://space-hub-traveller.netlify.app',
    linkSource: 'https://github.com/Patfarmurs/react-group-project',
  },

  {
    id: 4,
    url: './img/Book-Store1.png',
    title: 'React Book Store',
    description: `React Book Store: is a comprehensive web platform designed to facilitate book browsing and selection. 
    It allows visitors to explore an extensive collection of books, manage their personal reading lists, and add their preferred books. `,

    tecnologies: {
      tech1: 'React',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://react-book-store-7nwr.onrender.com/',
    linkSource: 'https://github.com/Patfarmurs/react-book-store',
  },

  {
    id: 5,
    url: './img/Movie-List.png',
    title: 'Movie List',
    description: `Movie List: is a Microverce group project. It's an online entertainment streaming source for TV shows, and movies.
     All data is preserved thanks to the external Tv Maze API service. In this App a user can add comments and likes.`,

    tecnologies: {
      tech1: 'Webpack',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://bill7pearl.github.io/JS_Capstone/',
    linkSource: 'https://github.com/Patfarmurs/JS_Capstone',
  },

  {
    id: 6,
    url: './img/Onwart.png',
    title: 'Metrick WebApp',
    description: `metrick-webapp: is a mobile web application that allows the user to create a list of metrics by utilizing React and Redux. 
    The WebApp consists of two pages: the first page will display a list of items that can be filtered using the name, serving as the homepage. The second page will be for displaying the details of a particular item. `,

    tecnologies: {
      tech1: 'React',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://bejewelled-elf-f1e263.netlify.app',
    linkSource: 'https://github.com/Patfarmurs/metrics-webapp',
  },
];

const cardWorkDetailsMobile = (index) => `
  <article class="card-work-details-mobile">
          <button type="button" class="btn-close-details">
              <img src="./img/X-icon.svg" alt="X icon">
          </button>
          <div class="card-image-details-mobile">
              <img src=${dataCards[index].url} alt="Snapshoot Portfolio">
          </div>
          <h2 class="card-title-mobile">
              ${dataCards[index].title}
          </h2>
          <ul class="card-tags-mobile">
              <li class="tag-mobile">${dataCards[index].tecnologies.tech1}</li>
              <li class="tag-mobile">${dataCards[index].tecnologies.tech2}</li>
              <li class="tag-mobile">${dataCards[index].tecnologies.tech3}</li>
              <li class="tag-mobile">${dataCards[index].tecnologies.tech4}</li>
          </ul>
          <p class="card-paragraph-mobile">
            ${dataCards[index].description}
          </p>
          <div class="card-button-mobile">
                  <a href=${dataCards[index].linkVersion} class="btn-card-details-mobile" target= "_blank" >
                  See Live
                  <img src="./img/see_live_icon.svg" alt="live icon">
                  </a>
                  <a href=${dataCards[index].linkSource} class="btn-card-details-mobile" target= "_blank">
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
