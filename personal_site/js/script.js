if (window.innerWidth <= 1024) {
    window.location = "mobile/index.html";
}

function resize() {
    if (window.innerWidth <= 1024) {
        window.location = "mobile/index.html";
    }
}

window.onresize = resize;

function about() {
    let checkbtn = !!document.getElementById('btn-check');
    let checklist = !!document.getElementById('list-check');

    console.log(checkbtn);
    console.log(checklist);

    document.getElementById('content').textContent = "I am a Frontend Developer, proficient in HTML, CSS, JavaScript and JS Frameworks. Residing in the north of the Netherlands, I'm used to traveling and working remote. I've aqcuired ample experience in digital marketing, social and community management over the last decade for both small and large companies, which pairs very well with my skills as a developer.";

    if(checkbtn) {
            let btn = document.getElementById('btn-check');
            btn.remove();
        };

    if(checklist) {
        let list = document.getElementById('list-check');
        list.remove();
    };
};

function hiring() {
    let checkbtn = !!document.getElementById('btn-check');
    let checklist = !!document.getElementById('list-check');
  
    console.log(checkbtn);
    console.log(checklist);

    document.getElementById('content').textContent = "Planning a new digital project, website, webshop or app and looking for a freelance developer to team up with? Let me know what you're looking for and let's see if we're a match!";

    if(!checkbtn){
    let btn = document.createElement('button');
    btn.setAttribute('class', 'btn-contact btn btn-outline-light');
    btn.setAttribute('id', 'btn-check');
    btn.innerHTML = "Contact me";
    document.getElementById('wrap-content').appendChild(btn);
    };

    if(!checklist) {
    let perks = ['Competitive rates','Travel or work remote','Small teams, large teams or individually','Developer with digital marketing skills'];
    let ul = document.createElement('ul');
    ul.setAttribute('class', 'list-hire');
    ul.setAttribute('id', 'list-check');
    document.getElementById('wrap-content').appendChild(ul);

    perks.forEach(function(perk){
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += perk;
    });
  };
};