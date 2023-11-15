//turn pages when clicked next button

const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((e1, index) => {
    e1.onclick = () => {
        const pageTurnId = e1.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
            console.log(pageTurn)
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
            console.log(pageTurn)
        }
    }
})

//when clicked on contact me button

const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)
        }, (index - 1)* 200 + 100)
    })
}

//creating reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if(pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

//when click back profile come to first page
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((e2, index) => {
        setTimeout(() => {
            reverseIndex();
            e2.classList.remove('turn');

            setTimeout(() => {
                e2.style.zIndex = 10 - index;
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}

//opening portfolio
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

//cover right animation
setTimeout(() => {
    coverRight.classList.add('turn')
}, 2000)

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2700)

//profile page animation
setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200)

//cover open all pages
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)
    }, (index + 1) * 200 + 2000)
})
