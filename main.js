//$('#choiceOption').change(changeOptions);
document.getElementById('choiceOption').onchange = changeOptions();

function changeOptions () {
  //$('#random').prop('checked', true);
  document.getElementById('random').checked = true;
}
