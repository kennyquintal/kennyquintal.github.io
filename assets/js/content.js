// require ('dotenv').config();

// const { response } = require("express");

// const api_url_info = process.env.API_URL_INFO;

//Inicio de Inserciones en los Datos Personales
function insertDataInfo(idHTML, dataAPI) {
  // fetch(`${api_url_info}`)
  fetch("http://localhost:1337/api/informacion-personals")
  .then(response => response.json())
  .then(data => {
    // obtenemos el elemento <a> del HTML
    var element = document.getElementById(idHTML);
    // asignamos el nombre del pokémon a la etiqueta <a>
    element.innerHTML = data.data[0].attributes[dataAPI];
  });
}

insertDataInfo("fullName", "FullName");
insertDataInfo("profession", "Profession")
insertDataInfo("slogan", "Slogan");
insertDataInfo("website", "Website");
insertDataInfo("email", "Email");
insertDataInfo("age", "Age");
insertDataInfo("city", "City");
insertDataInfo("degree", "Degree");
insertDataInfo("phone", "Phone");
insertDataInfo("freelance", "Freelance");

//Fin de Inserts en Datos Personales

// Descripcion de Index, carrera profesional o lo que ejerces

fetch("http://localhost:1337/api/acerca-de-ti")
  .then(response => response.json())
  .then(data => {
    // obtenemos el elemento <a> del HTML
    var element = document.getElementById("about-me");
    // asignamos el nombre del pokémon a la etiqueta <a>
    element.innerHTML = data.data.attributes.AboutMe;
  });

//Introduccion a ti

fetch("http://localhost:1337/api/introduccion-personal")
  .then(response => response.json())
  .then(data => {
    // obtenemos el elemento <a> del HTML
    var element = document.getElementById("introduccion");
    // asignamos el nombre del pokémon a la etiqueta <a>
    element.innerHTML = data.data.attributes.Introduction;
  });

  // Se actualiza la imagen de manera dinámica del background

  fetch("http://localhost:1337/uploads/bg_dac566fdf5.jpg")
  .then(response => {
    console.log(response)
    document.documentElement.style.setProperty('--bg-image-url', `url("${response.url}")`);
  })
  //Se actualiza la imagen de perfil dinamicamente

  fetch("http://localhost:1337/uploads/me_0a0843c14b.jpg")
  .then(response => response.blob())
  .then(image => {
    const imageURL = URL.createObjectURL(image);
    const img = document.getElementById("profileIMG");
    img.src = imageURL;
  });

  //Llenado de experiencia profesional
    fetch("http://localhost:1337/api/experiencia-profesionals")
    .then(response => response.json())
    .then(data =>{ 
      data.data.forEach(function(item) {
        var job = document.getElementById("job").cloneNode(true);
        var workPlace = document.getElementById("work-place").cloneNode(true);
        var workDate = document.getElementById("work-date").cloneNode(true);
        var description = document.getElementById("description").cloneNode(true);
        //Asigno los datos obtenidos en el 
        job.innerHTML = item.attributes.Job;
        workPlace.innerHTML = item.attributes.WorkPlace + '<br>' + '<br>';
        workDate.innerHTML = item.attributes.WorkDate;
        description.innerHTML = item.attributes.Description;
        document.getElementById("resume-item").appendChild(job);
        document.getElementById("resume-item").appendChild(workPlace);
        document.getElementById("resume-item").appendChild(workDate);
        document.getElementById("resume-item").appendChild(description);
    });
    document.getElementById("job").style.display = "none";
    document.getElementById("work-place").style.display = "none";
    document.getElementById("work-date").style.display = "none";
    document.getElementById("description").style.display = "none";
  })

  //Consulta a la api de experiencia escolar
  fetch("http://localhost:1337/api/experiencia-escolars")
    .then(response => response.json())
    .then(dataExp => {
      dataExp.data.forEach(function(itemEscolar) {
        console.log(dataExp)
        var project = document.getElementById("project").cloneNode(true);
        var university = document.getElementById("university").cloneNode(true);
        var dateUniversity = document.getElementById("date-university").cloneNode(true);
        var projectDescription = document.getElementById("project-description").cloneNode(true);
        var usedTechs = document.getElementById("used-techs").cloneNode(true)
        //Asigno los datos obtenidos en el 
        project.innerHTML = itemEscolar.attributes.Project;
        university.innerHTML = itemEscolar.attributes.University + '<br>' + '<br>';
        dateUniversity.innerHTML = itemEscolar.attributes.Date;
        projectDescription.innerHTML = itemEscolar.attributes.Description;
        usedTechs.innerHTML = itemEscolar.attributes.UsedTechs;
        document.getElementById("resume-escolar").appendChild(project);
        document.getElementById("resume-escolar").appendChild(university);
        document.getElementById("resume-escolar").appendChild(dateUniversity);
        document.getElementById("resume-escolar").appendChild(projectDescription);
        document.getElementById("resume-escolar").appendChild(usedTechs);
    });
    document.getElementById("project").style.display = "none";
    document.getElementById("university").style.display = "none";
    document.getElementById("date-university").style.display = "none";
    document.getElementById("project-description").style.display = "none";
    document.getElementById("used-techs").style.display = "none";
    document.getElementById("resume-escolar").classList("resume-item")
    document.getElementById("project").classList("resume-item")
    document.getElementById("university").classList("resume-item")
    document.getElementById("date-university").classList("resume-item")
    document.getElementById("project-description").classList("resume-item")
    document.getElementById("used-techs").classList("resume-item")

  })




