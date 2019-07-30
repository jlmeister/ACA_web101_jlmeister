const projectsList = [
  {
    name: 'Project1',
    description: 'a lil description',
    url: 'https://picsum.photos/200?random=1',
    tags: '#css, #html, #bootstrap'
  },
  {
    name: 'Project2',
    description: 'a lil description',
    url: 'https://picsum.photos/200?random=2',
    tags: '#css, #html, #bootstrap'
  },
  {
    name: 'Project3',
    description: 'a lil description',
    url: 'https://picsum.photos/200?random=3',
    tags: '#css, #html, #bootstrap'
  },
  {
    name: 'Project4',
    description: 'a lil description',
    url: 'https://picsum.photos/200?random=4',
    tags: '#css, #html, #bootstrap'
  },
  {
    name: 'Project5',
    description: 'a lil description',
    url: 'https://picsum.photos/200?random=5',
    tags: '#css, #html, #bootstrap'
  },
  {
    name: 'Project6',
    description: 'a lil description',
    url: 'https://picsum.photos/200?random=6',
    tags: '#css, #html, #bootstrap'
  }
]

let rowDiv = document.querySelector('.row')
console.log('rowDiv', rowDiv)

projectsList.forEach(project => {
  //console.log('project', project)
  let cardTemplate = `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${ project.url }" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${ project.name }</h5>
    <p class="card-text">${ project.description }</p>
    <p class="card-text">${ project.tags }</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
  rowDiv.insertAdjacentHTML('beforeend', cardTemplate)
});