$(function() {
// Begin

$('body').on('click', '.cart.select_variant', function() {
  yaCounter27482889.reachGoal('Cart_Click_Product_List');
});

$('body').on('click', '.cart:not(.select_variant)', function() {
  yaCounter27482889.reachGoal('Drop_In_Cart');
});

$('.block_info .b_pr_tabs').before(
'<div class="form" style="padding: 0; margin: 0; padding-bottom: 10px;">' +
  '<button class="js-ask-question"><span>Задать вопрос</span></button>' +
'</div>'
);

$('.js-ask-question').click(function() {
  window.assign('/feedback/');
});

// End
});
