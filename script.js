const bios = [
  { title: "~Britney Spears", age: "42", place: "Mississippi", realName: "Britney Jean Spears", image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Britney_Spears%2C_Roundhouse%2C_London_%28Apple_Music_Festival_2016%29_%2830072929931%29_%28cropped%29.jpg", text: "Best known as Britney Spears, she is a pop icon from the USA since the late 1990s." },
  { title: "~Shakira", age: "47", place: "Barranquilla", realName: "Shakira Isabel Mebarak Ripoll", image: "https://resize-elle.ladmedia.fr/r/300,,forcex/crop/300,386,center-middle,forcex,ffffff/img/var/plain_site/storage/images/personnalites/shakira/42391677-3-fre-FR/Shakira.jpg", text: "Best known as Shakira, a Colombian singer recognized for blending pop and Latin rhythms." },
  { title: "~Rihanna", age: "36", place: "Barbados", realName: "Robyn Rihanna Fenty", image: "https://cdn.britannica.com/83/243983-050-CCB4D69B/Rihanna-February-12th-2023-Glendale-Arizona.jpg", text: "Best known as Rihanna, a Barbadian singer and entrepreneur." },
  { title: "~Sia", age: "48", place: "Australia", realName: "Sia Kate Isobelle Furler", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Sia_at_Seattle.jpg/960px-Sia_at_Seattle.jpg", text: "Best known as Sia, an Australian singer-songwriter famous for her unique style." },
  { title: "~Zendaya", age: "27", place: "California", realName: "Zendaya Maree Stoermer Coleman", image: "https://media.cnn.com/api/v1/images/stellar/prod/211029165028-18-zendaya-style-evolution.jpg?q=w_1110,c_fill", text: "Best known as Zendaya, an American actress and singer." },
  { title: "~Tom Holland", age: "29", place: "London", realName: "Thomas Stanley Holland", image: "https://hips.hearstapps.com/hmg-prod/images/1-1612803665.jpg?resize=2048:*", text: "Best known as Tom Holland, a British actor known for playing Spider-Man." },
  { title: "~Aurora", age: "28", place: "Norway", realName: "Aurora Aksnes", image: "https://www.midtsiden.no/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fahcmq7tx%2Fproduction%2F782579c0edac1fde39be28229270bd278791e38f-1500x1001.jpg%3Ffit%3Dmax%26auto%3Dformat&w=1600&q=75", text: "Best known as Aurora, a Norwegian singer-songwriter known for her alternative style." },
  { title: "~Snoop Dogg", age: "52", place: "California", realName: "Calvin Cordozar Broadus Jr.", image: "https://i.scdn.co/image/ab6761610000e5ebc19a88576ebe6fcbb325c297", text: "Best known as Snoop Dogg, an American rapper and hip hop legend." },
  { title: "~The Weeknd", age: "34", place: "Toronto", realName: "Abel Makkonen Tesfaye", image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/03/20/11/the-weeknd.jpg", text: "Best known as The Weeknd, a Canadian singer known for his unique voice." },
  { title: "~Daft Punk", age: "50 and 51", place: "Paris", realName: "Guy-Manuel de Homem-Christo and Thomas Bangalter", image: "https://www.fsunews.com/gcdn/presto/2021/02/28/PFSU/2e1b4ddb-5617-47a0-a477-a6a4753de60a-daft-punk-helmets-press-photo-billboard-1548-compressed.jpg?crop=1547,871,x0,y74&width=1547&height=871&format=pjpg&auto=webp", text: "Best known as Daft Punk, a pioneering French electronic music duo." },
  { title: "~Shalom Harlow", age: "50", place: "Ontario", realName: "Shalom Harlow", image: "https://imgix.bustle.com/wmag/2018/12/17/5c1818c61bea14583460b2a9_45620896_357867024762047_6677841546241250374_n.jpg?w=414&h=495&fit=crop&crop=faces&dpr=2", text: "Best known as Shalom Harlow, a Canadian model and actress." },
  { title: "~Chico Lachowski", age: "32", place: "Brazil", realName: "Francisco Lachowski", image: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/21fc0337530703.5743b16db1699.jpg", text: "Best known as Chico Lachowski, an international Brazilian model." }
];

function openModal(index) {
  document.getElementById("bioTitle").innerHTML = `<strong>${bios[index].realName}</strong><br>${bios[index].title}`;
  document.getElementById("bioAge").textContent = "Age: " + bios[index].age;
  document.getElementById("bioPlace").textContent = "From: " + bios[index].place;
  document.getElementById("bioImage").src = bios[index].image;
  document.getElementById("bioText").textContent = bios[index].text;
  document.getElementById("bioModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("bioModal").style.display = "none";
}