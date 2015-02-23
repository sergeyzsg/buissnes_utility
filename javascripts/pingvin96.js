$(function() {
// Begin

$('body').on('click', '.cart.select_variant', function() {
  yaCounter27482889.reachGoal('Cart_Click_Product_List');
});

$('body').on('click', '.cart:not(.select_variant)', function() {
  alert(3);
  yaCounter27482889.reachGoal('Drop_In_Cart');
});

// End
});
