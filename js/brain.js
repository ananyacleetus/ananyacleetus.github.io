const region = document.getElementById('region');
const subRegion = document.getElementById('subRegion');
const thisPath = document.getElementById('layer1');


document.querySelector(".self-esteem").onmouseover = function(){getInfo('Memes', this.className.baseVal, this);};
document.querySelector(".approbativeness").onmouseover = function(){getInfo('Memes', this.className.baseVal)};
document.querySelector(".cautiousness").onmouseover = function(){getInfo('Memes', this.className.baseVal)};
document.querySelector(".firmness").onmouseover = function(){getInfo('Memes', this.className.baseVal)};
document.querySelector(".conscientiousness").onmouseover = function(){getInfo('Memes', this.className.baseVal)};
document.querySelector(".sublimity").onmouseover = function(){getInfo('Memes', this.className.baseVal)};
document.querySelector(".veneration").onmouseover = function(){getInfo('Too many Bollywood songs', this.className.baseVal)};
document.querySelector(".benevolence").onmouseover = function(){getInfo('Too many Bollywood songs', this.className.baseVal)};
document.querySelector(".hope").onmouseover = function(){getInfo('Too many Bollywood songs', this.className.baseVal)};
document.querySelector(".spirituality").onmouseover = function(){getInfo('Too many Bollywood songs', this.className.baseVal)};
document.querySelector(".imitation").onmouseover = function(){getInfo('Too many Bollywood songs', this.className.baseVal)};
document.querySelector(".human-nature").onmouseover = function(){getInfo('Robots', this.className.baseVal)};
document.querySelector(".agreeableness").onmouseover = function(){getInfo('Robots', this.className.baseVal)};
document.querySelector(".causality").onmouseover = function(){getInfo('Robots', this.className.baseVal)};
document.querySelector(".comparativeness").onmouseover = function(){getInfo('Robots', this.className.baseVal)};
document.querySelector(".bibativeness").onmouseover = function(){getInfo('Mental Health Advocacy', this.className.baseVal)};
document.querySelector(".tune").onmouseover = function(){getInfo('Mental Health Advocacy', this.className.baseVal)};
document.querySelector(".time").onmouseover = function(){getInfo('Mental Health Advocacy', this.className.baseVal)};
document.querySelector(".locality").onmouseover = function(){getInfo('Mental Health Advocacy', this.className.baseVal)};
document.querySelector(".eventuality").onmouseover = function(){getInfo('Mental Health Advocacy', this.className.baseVal)};
document.querySelector(".calculation").onmouseover = function(){getInfo('Mental Health Advocacy', this.className.baseVal)};
document.querySelector(".order").onmouseover = function(){getInfo('Mental Health Advocacy', this.className.baseVal)};
document.querySelector(".color").onmouseover = function(){getInfo('Mental Health Advocacy', this.className.baseVal)};
document.querySelector(".weight").onmouseover = function(){getInfo('Mental Health Advocacy', this.className.baseVal)};
document.querySelector(".size").onmouseover = function(){getInfo('Mental Health Advocacy', this.className.baseVal)};
document.querySelector(".individuality").onmouseover = function(){getInfo('Mental Health Advocacy', this.className.baseVal)};
document.querySelector(".mindfullness").onmouseover = function(){getInfo("Why won't this compile?", this.className.baseVal)};
document.querySelector(".mirthfulness").onmouseover = function(){getInfo("Why won't this compile?", this.className.baseVal)};
document.querySelector(".ideality").onmouseover = function(){getInfo("Why won't this compile?", this.className.baseVal)};
document.querySelector(".constructiveness").onmouseover = function(){getInfo("Why won't this compile?", this.className.baseVal)};
document.querySelector(".continuity").onmouseover = function(){getInfo('Baby Yoda', this.className.baseVal)};
document.querySelector(".freindship").onmouseover = function(){getInfo('Baby Yoda', this.className.baseVal)};
document.querySelector(".conjugality").onmouseover = function(){getInfo('Baby Yoda', this.className.baseVal)};
document.querySelector(".amativeness").onmouseover = function(){getInfo('Baby Yoda', this.className.baseVal)};
document.querySelector(".parental-love").onmouseover = function(){getInfo('Baby Yoda', this.className.baseVal)};
document.querySelector(".inhabitiveness").onmouseover = function(){getInfo('Baby Yoda', this.className.baseVal)};
document.querySelector(".vitativeness").onmouseover = function(){getInfo("70's Music", this.className.baseVal)};
document.querySelector(".combativeness").onmouseover = function(){getInfo("70's Music", this.className.baseVal)};
document.querySelector(".secretiveness").onmouseover = function(){getInfo("70's Music", this.className.baseVal)};
document.querySelector(".aquisitiveness").onmouseover = function(){getInfo("70's Music", this.className.baseVal)};
document.querySelector(".destructiveness").onmouseover = function(){getInfo("70's Music", this.className.baseVal)};
document.querySelector(".alimentiveness").onmouseover = function(){getInfo("70's Music", this.className.baseVal)};









function getInfo(regionName, classname, pathBrain){

  //newSvg = document.createElementNS("http://www.w3.org/1999/xhtml", "path");
  //newSvg.setAttribute("d", pathBrain.getAttribute('d'));

  //newSvg.setAttribute('id', "worksss");
  //newSvg.setAttribute('inkscape:connector-curvature', "0");


  //var x = '<path d="' + pathBrain.getAttribute('d') + '"/>';
  //node =  document.createElement("path")
  //console.log(node);

    //thisPath.appendChild(newSvg);

    region.innerHTML = regionName;
    subRegion.innerHTML = classname;
    this.onmouseout = function(){region.innerHTML = "Hover over a region"; subRegion.innerHTML = ""}

}
