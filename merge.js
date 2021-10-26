/**
 * el programa habla de un merge sort
 * @param {array} left  a sorted array
 * @param {array} right a sorted array
 * @returns the combined sorted array
 */
function merge(left, right) {
	let merge = [];
  let l = 0;
  let r = 0;
  
  while (merge.length < (left.length + right.length)) {
    const hasLeft = l < left.length;
    const hasRight = r < right.length;

    // si no hay mas elementos en la derecha o si hay elementos en la izquierda y izquierda sea menor a la derecha 
    if (!hasRight || (hasLeft && left[l] < right[r])) {
      merge.push(left[l]);
      l++;
    } else { 
      merge.push(right[r]);
      r++;
    }
  }
  return merge;
}

module.exports = merge;