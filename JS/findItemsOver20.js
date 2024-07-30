export default function findItemsOver20(items) {
	return items.filter(function(item) {
    	return item.qty > 20;
    });
}
