'use strict';
/*eslint-env jquery*/

function addItems() {
  $('#js-shopping-list-form').submit(function (event) {
    event.preventDefault();
    const userText = this.find('.js-shopping-list-entry');
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
  $('ul').on('click', '.shopping-item-toggle', function(event){
    this.parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
  });
}

function deleteItems(){
  $('ul').on('click', '.shopping-item-delete', function(event) {
    this.closest('li').remove();
  });
}



$(addItems);
$(deleteItems);
$(checkAndUncheckItems);