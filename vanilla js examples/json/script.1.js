//Create variable for json data
const requestURL = "https://ecn1.eshop2.macsales.com/api/used-macs/config/?item=UAQA1JS6XXX10XI";
//
const requestMac = new XMLHttpRequest();
requestMac.open("GET", requestURL);
requestMac.responseType = "text";
requestMac.send();
//
requestMac.onload = function() {
  const usedMacRepsonse = requestMac.response;
  const systemInfo = JSON.parse(usedMacRepsonse);
  usedMac(systemInfo);
};
//
function usedMac(jsonObj) {
  const systemInfo = jsonObj;
  usedMacs.innerHTML +=`
  <div class="hero">
    <h1>${systemInfo.machineHeadline}</h1>
    <p>${systemInfo.systems[0].systemDetails}</p>
  </div>
  `;
  //
  var  optionsLabel = '';
  var  optionValues = '';
  var  sectionContent  = '';
  for (let i = 0; i < systemInfo.systems.length; i++) {

    for (let j = 0; j < systemInfo.systems[i].options.length; j++) {

    //
    optionsLabel += '<p>' + systemInfo.systems[i].options[j].optionGroupLabel + '<br>' + systemInfo.systems[i].options[j].optionGroupDetails + '</p>';

    for (let k = 0; k < systemInfo.systems[i].options[j].optionValues.length; k++) {
      console.log('line 35 = ', systemInfo.systems[i].options[j].optionValues[k]);
      optionsLabel +=  '<li>' + systemInfo.systems[i].options[j].optionValues[k].label + '</li>';
  }
}
}
sectionContent = optionsLabel + optionValues;

//
  usedMacs.innerHTML +=`
  ${sectionContent}
  `;
  //
}
