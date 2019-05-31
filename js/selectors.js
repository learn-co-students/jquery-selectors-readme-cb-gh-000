// declare your functions here...
function paragraphSelector() {
  return $('p');
}

function lastImageSelector() {
  return $('img:last');
}

function ninjaBabySelector() {
  return $('#baby-ninja');
}

function divSelector() {
  let divs = $('div');
  return divs.slice(0, 2);
}

function firstListItem() {
  return $('ul li:first-child');
}
