// declare your functions here...
//$('parent-tag child-tag:first-child')
//$("img[alt='the beatles making faces']")
//$('div:last')
/*Write a function firstListItem that does not accept any parameters.
The function should use a first-child selector to return the first list item in the ul with the ID pic-list.
 */
 function firstListItem() {
   return $('ul#pic-list li:first-child');
 }
function paragraphSelector() {
  return $('p');
}
function lastImageSelector() {
  return $('img:last');
}
function ninjaBabySelector() {
  return $('img#baby-ninja');
}
function divSelector() {
  return $('div.pics');
}
