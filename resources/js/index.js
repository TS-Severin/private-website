const posts = [
    {
        profilePicture: "./resources/spiced_portrait.jpg",
        profileUsername: "websites",
        postImages: ['./resources/sites_erinnerungsfutur.jpg', './resources/sites_gleamshard.jpg', './resources/sites_sgdn.jpg', './resources/sites_hs.jpg', './resources/sites_ck.jpg'],
        userName: "websites ",
        link: "https://github.com/TS-Severin",
        postText: "Seit dem Bootcamp bei Spiced sind die ersten Seiten fertig geworden. Ich habe mit mit allen möglichen Frameworks und CMS gearbeitet: Next.js natürlich, Grav, mit good old Wordpress und sogar bei Squarespace eine Landingpage gebaut. Bei Github findet ihr mehr, wen es interessiert. Danke an euch alle für das Vertrauen :) Und falls ihr was braucht: FirstAid für eure funktionierende Seite, eine einfache Portfolioseite oder in fancy, schreibt mir gern.",

    },
    {
        profilePicture: "./resources/spiced_classroom_portrait.jpg",
        profileUsername: "spiced academy",
        postImages: ['./resources/spiced1.jpg', './resources/spiced2.jpg', './resources/spiced3.jpg'],
        userName: "spiced academy ",
        link: "https://www.spiced-academy.com/de/program/full-stack-web-development",
        postText: "Am 1. März 2024 habe ich an der Spiced Academy mein Capstone Project 'Erinnerungsfutur' für das Web Development Bootcamp präsentiert - und wir haben mit unserer Coriander Cohort die Graduation gefeiert. Danke an alle großartigen teachers und die ganze cohort!",

    },
    {
        profilePicture: "./resources/portrait_bjoern.jpg",
        profileUsername: "msmdrsstrbndnmttlschcht",
        postImages: ['./resources/mdam.jpg'],
        userName: "msmdrsstrbndnmttlschcht ",
        link: "https://verlagshaus-berlin.de/programm/museum-der-aussterbenden-mittelschicht/",
        postText: "Das ist mein erster Gedichtband, ich bin sehr glücklich und allen dankbar, die für seine Entstehung wichtig waren! Ihr wisst, wer gemeint ist <3",
    },
    {
        profilePicture: "./resources/portrait_vhb.jpg",
        profileUsername: "verlagshaus",
        postImages: ['./resources/vhb.jpg'],
        userName: "verlagshaus ",
        link: "https://verlagshaus-berlin.de/",
        postText: "Seit 2019 bin ich Teil des Verleger:innenteams im Verlagshaus Berlin. Es ist großartig mit Andrea Schmidt und Jo Frank an Gedichtbänden zu arbeiten und neue Gedichte in die Welt zu bringen.",
    },
    {
        profilePicture: "./resources/portrait_talktalktalk.jpg",
        profileUsername: "talktalktalk",
        postImages: ['./resources/talktalktalk.jpg'],
        userName: "talktalktalk ",
        link: "https://www.lesereihen.org/",
        postText: "Lesungen liegen mir sehr am Herzen, als Gast und Autor sowieso, aber auch als Veranstalter und Moderator. 2023 habe ich mit Lara Sielmann drei Veranstaltungen in den Berliner Gegenwartsliteraturen in der Villa Oppenheim organisiert und moderiert.Wir hatten großartige Autor: innen, Übersetzer: innen und Expert: innen für verschiedene Themen auf der Bühne! In München habe ich eine ganze Weile eine der schönsten Lyrik-Lesereihen meine drei lyrischen ichs mitorganisiert und daraus ist das Netzwerk der Unabhängigen Lesereihen e.V. geworden, dem ich sehr nahe stehe und mit dem wir 2019 das ULF - Festival organisiert haben.Das Foto ist übrigens von Natalia Reich",
    },
    {
        profilePicture: "./resources/portrait_dll.jpg",
        profileUsername: "O0",
        postImages: ['./resources/O0.jpg'],
        userName: "O0 ",
        link: "https://verlagshaus-berlin.de/programm/o0/",
        postText: "– gesprochen O-Null – ist meine erste Buchveröffentlichung im Verlagshaus Berlin. Das Buch ist legendär, denn es ist in der wunderbaren E-Book-Reihe Edition Binaer erschienen, in der insgesamt nur vier Bücher herauskamen. Es ist eine Zusammenarbeit mit Lea Schneider und in der Ausstellung O0 von Sebastian Severin entstanden. Fun fact: Damals war ich Student am DLL und habe an einem postmodernen Roman mit dem Titel GO gearbeitet, in dem ich mich völlig verzettelt habe. Wenn etwas von der Sprache des Romans übrig ist, dann steckt sie in O0. Bei Erscheinen von O0 hätte ich niemals gedacht, dass ich mal so sehr zum Verlagshaus gehören würde, wie ich es heute tue: Als Autor und Verleger.",
    },
    {
        profilePicture: "./resources/portrait_cati.jpg",
        profileUsername: "mywhitemalebookshelf",
        postImages: ['./resources/mwmb.jpg'],
        userName: "mywhitemalebookshelf ",
        link: "https://literaturwissenschaft-berlin.de/my-white-male-bookshelf-tillmann-severin/",
        postText: "Es ist schon ein paar Jahre her, damals habe ich alle Bücher weißer männlicher Autoren in meinem Bücherregal umgedreht und keine Bücher von Männern mehr gelesen. Das hat wirklich viel verändert in meinem Lesen, meinem Schreiben und meinem Blick auf Literatur. In dem verlinkten Essay steht vieles, was ich dabei gelernt habe.",
    },
    {
        profilePicture: "./resources/portrait_back_to_school.jpg",
        profileUsername: "back_to_school",
        postImages: ['./resources/back_to_school.jpg'],
        userName: "back_to_school ",
        link: "https://en.wikipedia.org/wiki/Nokia_8210",
        postText: "  In letzter Zeit habe ich viel in Seminaren und Workshops über Schreiben und Verlegen gesprochen. An der UdK in der Illustrationsklasse von Henning Wagenbreth, mit Paula Fürstenberg zusammen an der Bayerischen Akademie des Schreibens, für einzelne Treffen online in Rutgers und Van der Bilt in den USA und im Verlagsarbeit-Seminar an der wunderbaren Uni Augsburg. Ich unterrichte gern und es ist einfach toll, dass man dabei selbst am meisten lernt.",
    },
    {
        profilePicture: "./resources/portrait_vhb_2.jpg",
        profileUsername: "impressum",
        postImages: ['./resources/impressum.jpg'],
        userName: "impressum ",
        link: "https://tillmann-severin.de/impressum.html",
        postText: "",
    }
];

function createPost(post) {

    // post container

    const postElement = document.createElement('div');
    postElement.className = 'post';

    // post header

    const postHeader = document.createElement('div');
    postHeader.className = 'post-header';
    postElement.appendChild(postHeader);

    // header profile image

    const profilePicture = document.createElement('img');
    profilePicture.className = 'profile-picture';
    profilePicture.src = post.profilePicture;
    postHeader.appendChild(profilePicture);

    // header profile name
    const profileUsername = document.createElement('div');
    profileUsername.className = 'profile-username';
    profileUsername.textContent = post.profileUsername;
    postHeader.appendChild(profileUsername);

    // image slider 

    const sliderWrapper = document.createElement('section');
    sliderWrapper.className = 'slider-wrapper';
    postElement.appendChild(sliderWrapper);


    // slide prev button

    const slideArrowPrev = document.createElement('button');
    slideArrowPrev.className = 'slide-arrow';
    slideArrowPrev.id = 'slide-arrow-prev';
    slideArrowPrev.addEventListener("click", () => {
        console.log("PREV");
        const slideWidth = slidesContainer.querySelector('.slide').clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
    });

    sliderWrapper.appendChild(slideArrowPrev);

    // slide next button

    const slideArrowNext = document.createElement('button');
    slideArrowNext.className = 'slide-arrow';
    slideArrowNext.id = 'slide-arrow-next';

    slideArrowNext.addEventListener("click", () => {
        console.log("NEXT");
        const slideWidth = slidesContainer.querySelector('.slide').clientWidth;
        slidesContainer.scrollLeft += slideWidth;
    });

    sliderWrapper.appendChild(slideArrowNext);

    // slides ul

    const slidesContainer = document.createElement('ul');
    slidesContainer.className = 'slides-container';
    slidesContainer.id = 'slides-container';
    sliderWrapper.appendChild(slidesContainer);

    post.postImages.forEach(imageUrl => {
        const slide = document.createElement('li');
        slide.className = 'slide';

        const postImage = document.createElement('img');
        postImage.src = imageUrl;
        postImage.className = 'post-image';
        slide.appendChild(postImage);

        slidesContainer.appendChild(slide);
    });


    // post footer

    const postFooter = document.createElement('div');
    postFooter.className = 'post-footer';

    const postParagraph = document.createElement('p');
    postFooter.appendChild(postParagraph);

    const postLink = document.createElement('a');
    postLink.href = post.link;
    postLink.target = "_blank";
    postParagraph.appendChild(postLink);

    const postName = document.createElement('strong');
    postName.textContent = post.userName;
    postLink.appendChild(postName);

    const postText = document.createElement('span');
    postText.textContent = post.postText;
    postParagraph.appendChild(postText);

    postElement.appendChild(postFooter);




    return postElement;

};

// Function to render all posts
function renderPosts(posts) {
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = ''; // Clear existing cards

    posts.forEach(post => {
        const postElement = createPost(post);
        postContainer.appendChild(postElement);
    });
}

// Initial render
renderPosts(posts);
