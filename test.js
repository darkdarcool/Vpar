import test from 'ava';
import VPar from "./index.js"

test("It removes trailing chars", (t) => {
	let myVPar = new VPar("v18.9.0");
	t.is(myVPar, "18.6.0");
});
