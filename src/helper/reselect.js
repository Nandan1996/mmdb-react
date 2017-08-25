export const createSelector = (inputSelectors = [],transformFn) => {
	let lastArgs = [];
	let lastResult = null;
	if(typeof transformFn !== 'function')
		throw {message:"Atleast send your transform function."};
	const isNotEqual = (lastArgs,newArgs) => {
		return lastArgs.length == 0 || lastArgs.some((elem,idx) => elem !== newArgs[idx]);
	};
	let recomputations = 0;
	let selector = (state,props) => {
		let newArgs = [];
		if(inputSelectors.length !== 0){
			inputSelectors.forEach(fn => newArgs.push(fn(state,props)));
		}
		else{
			recomputations++;
			return transformFn(state,props);
		}
		if(isNotEqual(lastArgs,newArgs)){
			recomputations++;
			lastResult = transformFn(...newArgs);
			lastArgs = newArgs;
		}
		return lastResult;
	};
	selector.recomputations = () => recomputations;
	selector.resetComputations = () => recomputations = 0;
	return selector;
};