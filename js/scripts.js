$(document).ready(function(){
  $("#JS").click(function() {
    $(".JSWord").toggle();
    $(".JSDefinition").toggle();
  });
  $("#Operators").click(function() {
    $(".OperatorsWord").toggle();
    $(".OperatorsDefinition").toggle();
  });
  $("#Variables").click(function() {
    $(".VariablesWord").toggle();
    $(".VariablesDefinition").toggle();
  });
  $("#Variable-naming-conventions").click(function() {
    $(".Variable-naming-conventionsWord").toggle();
    $(".Variable-naming-conventionsDefinition").toggle();
  });
});
