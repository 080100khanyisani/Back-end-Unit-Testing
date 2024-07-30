export default function countAllPaarl(reg_no) {
	var reg_noArrays = reg_no.split(", ");
  	var countPaarl = 0;
  	for(var i = 0; i < reg_noArrays.length; i++) {
    	if(reg_noArrays[i].startsWith("CJ")) {
        	countPaarl++;
        }
    }
  	return countPaarl;
}