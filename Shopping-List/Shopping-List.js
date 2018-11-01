'use strict';

function addItems() {
  $('#js-shopping-list-form').submit(function (event) {
    event.preventDefault();
    const userText = $(event.currentTarget).find('.js-shopping-list-entry');
    $('ul').append(`
        <li>
        <span class="shopping-item">${userText.val()}</span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
            </div>
      </li>
        `);

    userText.val('');
  });
}

function checkAndUncheckItems (){
  $('.shopping-item-toggle').click(function(event){
    console.log('this worked');
    const itemText = $(event.currentTarget).parent().prev();
    console.log(itemText);
    itemText.toggleClass('shopping-item__checked');
  });
}



function deleteItems(){
  $();
}



$(addItems);
$(deleteItems);
$(checkAndUncheckItems);