
const servicesMod = (svcPicture, svcTitle, svcParagraph) => {
  const svcModMn = document.querySelector('.services-module')
  const article = document.createElement('article')
  svcModMn.appendChild(article).classList.add('svcModules')

  const picture = document.createElement('img')
  article.appendChild(picture)
  picture.src = `images/${svcPicture}`

  const title = document.createElement('h2')
  article.appendChild(title)
  title.innerText = svcTitle

  const paragraph = document.createElement('p')
  article.appendChild(paragraph)
  paragraph.innerText = svcParagraph

  const button = document.createElement('button')
  article.appendChild(button)
  button.innerText = 'Get Started'
}

const servicesChtcs = (svcPicture, svcTitle, svcParagraph) => {
  const svcChtcsMn = document.querySelector('.services-characteristics')
  const article = document.createElement('article')
  svcChtcsMn.appendChild(article).classList.add('svcCharacteristics')

  const picture = document.createElement('img')
  article.appendChild(picture)
  picture.src = `images/${svcPicture}`

  const title = document.createElement('span')
  article.appendChild(title)
  title.innerText = svcTitle

  const paragraph = document.createElement('p')
  article.appendChild(paragraph)
  paragraph.innerText = svcParagraph
}

const servicesRvws = (svcPicture, svcNombre, svcPuesto, svcOpinion) => {
  const svcRvws = document.querySelector('.services-reviews')
  const cntRvwsPlp = document.createElement('div')
  svcRvws.appendChild(cntRvwsPlp).classList.add('services-reviews-contenedor', svcNombre.split(' ')[0])

  const opinionRvws = document.createElement('p')
  cntRvwsPlp.appendChild(opinionRvws)
  opinionRvws.innerText = svcOpinion

  const perfilRvws = document.createElement('div')
  cntRvwsPlp.appendChild(perfilRvws)

  const pictureRvws = document.createElement('img')
  perfilRvws.appendChild(pictureRvws)
  pictureRvws.src = `images/${svcPicture}`

  const nombreRvws = document.createElement('p')
  perfilRvws.appendChild(nombreRvws)
  nombreRvws.innerText = svcNombre

  const puestoRvws = document.createElement('span')
  perfilRvws.appendChild(puestoRvws)
  puestoRvws.innerText = svcPuesto

}


const servicesModItems = {
  svcUno: {
    "picture": "illustration-intro.png",
    "title": "All your files in one secure location, accessible anywhere.",
    "parrafo" : "Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers."
  }
};

const servicesChtcsItems = {
  svcUno: {
    "picture": "icon-access-anywhere.svg",
    "title": "Access your files, anywhere",
    "parrafo" : "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
  },
  svcDos: {
    "picture": "icon-security.svg",
    "title": "Security you can trust",
    "parrafo" : "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
  },
  svcTres: {
    "picture": "icon-collaboration.svg",
    "title": "Real-time collaboration",
    "parrafo" : "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
  },
  svcCuatro: {
    "picture": "icon-any-file.svg",
    "title": "Store any type of file",
    "parrafo" : "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
  }
};

const servicesReviews = {
  svcUno: {
    "picture": "profile-1.jpg",
    "nombre": "Satish Patel",
    "puesto": "Founder & CEO, Huddle",
    "reseña" : "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
  },
  svcDos: {
    "picture": "profile-2.jpg",
    "nombre": "Bruce McKenzie",
    "puesto": "Founder & CEO, Huddle",
    "reseña" : "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
  },
  svcTres: {
    "picture": "profile-3.jpg",
    "nombre": "Iva Boyd",
    "puesto": "Founder & CEO, Huddle",
    "reseña" : "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
  }
};


for(const [key,value] of Object.entries(servicesModItems)) {
  servicesMod(value.picture, value.title, value.parrafo)
}

for(const [key,value] of Object.entries(servicesChtcsItems)) {
  servicesChtcs(value.picture, value.title, value.parrafo)
}

for(const [key,value] of Object.entries(servicesReviews)) {
  servicesRvws(value.picture, value.nombre, value.puesto, value.reseña)
}

// servicesChtcs(servicesChtcsItems.svcUno.picture, servicesChtcsItems.svcUno.title, servicesChtcsItems.svcUno.parrafo)
