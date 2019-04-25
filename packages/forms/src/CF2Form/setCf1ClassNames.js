import classNameService, {
	cf1ClassNames,
} from '@calderajs/components';



Object.keys(cf1ClassNames).map( filterName => {
	classNameService.resetq();
	classNameService.addFilter(filterName, 'cf1-classes', () => {
		return cf1ClassNames[filterName]
	});

});
