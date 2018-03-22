
import Generator from './generator'; 
import RadixSort from './radixsort';
 
let generator = new Generator();
let sortalg = new RadixSort();
let ages = generator.generate(1000000, 0, 130);
let sortedAges = sortalg.sort(ages, 3);

console.log(JSON.stringify(sortedAges));
