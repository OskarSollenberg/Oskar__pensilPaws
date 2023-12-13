# PencilPaws
PencilPaws Game **If_This_Than_That(Javascript)**-module at Hyper Island

Hi, This is a beginner project myself together with a team created at Hyper Island where im currently studiying to become a Front End Developer. This was a game we worked on during 2 weeks and it is the first group-projet i have ever done in javascript. It was very fun but also challanging. Hope you like it! 

<img width="900" height="450" alt="Screenshot 2023-11-05 at 22 14 52" src="https://github.com/OskarSollenberg/Oskar__pensilPaws/assets/122973984/c2e68503-ffc1-4acc-bbf9-2e1b47fbe781">

<img width="450" height="400" alt="Screenshot 2023-11-05 at 22 14 52" src="https://github.com/OskarSollenberg/Oskar__pensilPaws/assets/122973984/7dbdad72-306d-4922-8329-058acd4987f9">
<img width="450" height="400" alt="Screenshot 2023-11-05 at 22 14 52" src="https://github.com/OskarSollenberg/Oskar__pensilPaws/assets/122973984/510f1f2f-d607-4836-8076-cb3afa932036">









### Languages and Tools:


<img align="left" alt="HTML5" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" style="padding-right:10px;" />
<img align="left" alt="CSS3" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" style="padding-right:10px;" />
<img align="left" alt="Javascript" width="26px" src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" style="padding-right:10px;" />
<img align="left" alt="Sass" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" style="padding-right:10px;" />
<img align="left" alt="Git" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" style="padding-right:10px;" />
<img align="left" alt="GitHub" width="26px" src="https://user-images.githubusercontent.com/3369400/139448065-39a229ba-4b06-434b-bc67-616e2ed80c8f.png" style="padding-right:10px;" />
<img align="left" alt="GitHub" width="26px" src="https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png" style="padding-right:10px;" />
<img align="left" alt="Visual Studio Code" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" style="padding-right:10px;" />

<br />

---
### What I learned:


<!--STRAT_SECTION:code-->

<br>

**A bit of code:**

- Creating an easily red and maintainable javascript structure.
```js
function setPage(pageId) {
    let pages = document.querySelectorAll(".page");
    for (let page of pages) {
        page.classList.remove("page--visible");
    }
    if (pageId === "welcomePage") {
        renderWelcomePage();
    } else if (pageId === "instructionsPage") {
        renderInstructionsPage();
    } else if (pageId === "animalPage") {
        renderRandAnimalPage();
    } else if (pageId === "gamePage") {
        renderGamePage();
    } else if (pageId === "inputPage") {
        renderInputPage();
    }
}
function renderWelcomePage() {
}
function renderInstructionsPage() {
}
function renderRandAnimalPage() {
}
function renderGamePage() {
}
}
function renderInputPage() {
}

```

- Using modules to devide the different functionalities into component-pages to make the code more readable and structured. 
```js

import * as api from "./script-components/api.js";
import * as canvas from "./script-components/canvas.js";
import * as timer from "./script-components/timer.js";
import * as imgGallery from "./script-components/imgGallery.js";
import * as answer from "./script-components/conditions.js";

```

- Staing consistant with bem-naming convention for all html classes as well as using camel-case for id, making it consistant with the naming in javascript (I dont use id's for styling). 
```html
<div class="page" id="welcomePage">
    <p class="page-information page-information--lg"></p>
    <p class="page-information"></p>
    <button class="btn btn__next-page"></button>
</div>
```

- Finding usecases for querySelectorAll to make the code DRY'er letting you select elements from an Array instead of induvidualy selecting them.
```js
function setPage(pageId) {
    let pages = document.querySelectorAll(".page");
    for (let page of pages) {
        page.classList.remove("page--visible");
    }
```
- Using a clear structure in HTML, reusing alot of classnames for same styling making it very easy to re-syle.
- Using a structure that makes it very easy to add new information or remove information. Each page is induvidualy rendered in javascript making it very easy to hide all page-elements in a page when it shouldn't be visable. This structure also makes it very easy to add another page if required, all you need is to render page in js and add the reusable clasnames in html to make it fit the style of the website.
<img width="835" alt="Screenshot 2023-12-13 at 13 05 33" src="https://github.com/OskarSollenberg/Oskar__pensilPaws/assets/122973984/0202e536-8181-4e62-a548-7e6c4e5dc3ff">



**💬 ask me about anything, i am happy to help**

<p>
<a href="https://github.com/thmsgbrt" target="_blank"><img alt="Github" src="https://img.shields.io/badge/GitHub-%2312100E.svg?&style=for-the-badge&logo=Github&logoColor=white" /></a> 
<a href="https://www.linkedin.com/in/thomas-guibert" target="_blank"><img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" /></a>
<a href="https://www.instagram.com/mokkapps/"><img src="https://img.shields.io/badge/instagram-%23E4405F.svg?&style=for-the-badge&logo=instagram&logoColor=white"></a>
</p>

