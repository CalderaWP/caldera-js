import {fractionToWidth} from "./fractionToWidth";

//This seems like a silly test, also I wrote it to fix a silly mistake.
it( 'Finds valid widths', () => {
	expect(fractionToWidth(1)).toBe(12);
	expect(fractionToWidth('11/12')).toBe(11);
	expect(fractionToWidth('10/12')).toBe(10);
	expect(fractionToWidth('4/8')).toBe(10);
	expect(fractionToWidth('9/12')).toBe(9);
	expect(fractionToWidth('2/3')).toBe(9);
	expect(fractionToWidth('8/12')).toBe(8);
	expect(fractionToWidth('3/4')).toBe(8);
	expect(fractionToWidth('7/12')).toBe(7);
	expect(fractionToWidth('6/12')).toBe(6);
	expect(fractionToWidth('1/2')).toBe(6);
	expect(fractionToWidth('2/4')).toBe(6);
	expect(fractionToWidth('5/12')).toBe(5);
	expect(fractionToWidth('4/12')).toBe(4);
	expect(fractionToWidth('1/4')).toBe(4);
	expect(fractionToWidth('3/12')).toBe(3);
	expect(fractionToWidth('1/3')).toBe(3);
	expect(fractionToWidth('2/12')).toBe(2);
	expect(fractionToWidth('1/12')).toBe(1);
});
