'use strict';

function addItems() {
  $('#js-shopping-list-form').submit(function (event) {
    event.preventDefault();
    const userText = $(event.currentTarget).find('.js-shopping-list-entry');
    console.log('this is working');
        
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

$(addItems);