//$('#choiceOption').change(changeOptions);
var box = document.getElementById('choiceOption');   // Get the checkbox
var att = document.createAttribute("onchange");       // Create a "onchange" attribute
att.value = "changeOptions()";                           // Set the value of the onchange attribute
box.setAttributeNode(att);                          // Add the onchange attribute to the checkbox

function changeOptions () {
  //$('#random').prop('checked', true);
  document.getElementById('random').checked = true;
}
