export default function findItemsOver(items, threshold) {
	return items.filter(function(item) {
    	return item.qty > threshold;
    });
}