function loadData ()
{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => displayData(data.data.tools))

}


function displayData (tools)
{

    let tollsContainer = document.getElementById('tools-container')
    let i = 0;
    tools.forEach(function (tool)
    {
        console.log(tool);

        const id = tool.id;

        const toolDiv = document.createElement('div');
        toolDiv.classList.add("col-lg-4", "col-md-6", "tool");



        if (i < 6) {
            toolDiv.innerHTML = `
        <div class="card">
        <img src="${tool.image}" alt="">
        <h4>Features</h4>
        <ol>
        <li>${tool.features[0]}</li>
        <li>${tool.features[1]}</li>
        <li>${tool.features[2]}</li>
        </ol>
        <div class="card-footer">
        <h6>${tool.name}</h6>
        <div class="text-end">
        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal${id}">
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    
      <div class="modal fade" id="exampleModal${id}" tabindex="-1" aria-labelledby="exampleModal${id}Label" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModal${id}Label"></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-start">
            <div class="row">
            <div class="col-6 description-modal">
            ${descriptionReturn(tool.description)}
                <div class="row">
                    <div class="col-3 price-card ">
                        <p>Free of Cost / Basic</p>
                    </div>
                    <div class="col-3  price-card">
                        <p>Free of Cost / Professional</p>
                    </div>
                    <div class="col-3  price-card">
                        <p>Contract us / Enterprise</p>
                    </div>
                </div>
        
                <div class="row">
                    <div class="col-6">
                        <p>Features</p>
                        <ul>
                            <li>${tool.features[0]}</li>
                            <li>${tool.features[1]}</li>
                            <li>${tool.features[2]}</li>
                        
                        </ul>
                    </div>
                    <div class="col-6">
                        <p>Integration</p>
                        <ul>
                            <li>No Data Found</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <img class="img-fluid" src="${tool.image}" alt="img">
                <div class="text-center">
                <h4>Can You Give Any Example</h4>
                <p>NO! Not Yet. Take a Break</p>
            </div>
            </div>
        </div>
        
            </div>
        
          </div>
        </div>
      </div>
            </div>
        <p><i class="fa-solid fa-calendar-days"></i> ${tool.published_in}</p>
        </div>
    </div>`

            tollsContainer.appendChild(toolDiv)
        }

        else {

            const seeMoreBtn = document.getElementById('more-btn');
            seeMoreBtn.addEventListener("click", () =>
            {
                loaderStart()

                toolDiv.innerHTML = `
                <div class="card">
                <img src="${tool.image}" alt="">
                <h4>Features</h4>
                <ol>
                <li>${tool.features[0]}</li>
                <li>${tool.features[1]}</li>
                <li>${tool.features[2]}</li>
                </ol>
                <div class="card-footer">
                <h6>${tool.name}</h6>
                <div class="text-end">
                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal${id}">
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            
              <div class="modal fade" id="exampleModal${id}" tabindex="-1" aria-labelledby="exampleModal${id}Label" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModal${id}Label"></h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-start">
                    <div class="row">
                    <div class="col-6 description-modal">
                        ${descriptionReturn(tool.description)}
                        <div class="row">
                            <div class="col-3 price-card ">
                                <p>Free of Cost / Basic</p>
                            </div>
                            <div class="col-3  price-card">
                                <p>Free of Cost / Professional</p>
                            </div>
                            <div class="col-3  price-card">
                                <p>Contract us / Enterprise</p>
                            </div>
                        </div>
                
                        <div class="row">
                            <div class="col-6">
                                <p>Features</p>
                                <ul>
                                    <li>${tool.features[0]}</li>
                                    <li>${tool.features[1]}</li>
                                    <li>${tool.features[2]}</li>
                                
                                </ul>
                            </div>
                            <div class="col-6">
                                <p>Integration</p>
                                <ul>
                                    <li>No Data Found</li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <img class="img-fluid" src="${tool.image}" alt="img">
                        <div class="text-center">
                        <h4>Can You Give Any Example</h4>
                        <p>NO! Not Yet. Take a Break</p>
                    </div>
                    </div>
                </div>
                
                    </div>
                
                  </div>
                </div>
              </div>
                    </div>
                <p><i class="fa-solid fa-calendar-days"></i> ${tool.published_in}</p>
                </div>
            </div>`

                tollsContainer.appendChild(toolDiv);
                
                seeMoreBtn.classList.add('more-btn');

                
                


            })
            
        }
        i++;

       

     
       

    });


    loadderStop();

    

   




}



function loaderStart(){
    document.getElementById('loader').classList.remove('d-none')
   
    }


    function loadderStop(){
        document.getElementById('loader').classList.add('stop-loader')
    }
    



function descriptionReturn(description){
if(description=== null){
    return `No Description Data Found!`
}
else{
    return description
}
}

loadData()




