import classNameService,{CLASS_NAME_HOOKS} from './classNameService'
import { createHooks } from '@wordpress/hooks';
let globalHooks = createHooks();




describe( 'classNameHooks', ()=> {
	it( 'filters work as expected',()=> {
		classNameService.addFilter('headerPath', CLASS_NAME_HOOKS, () => 'ALT!' );
		const headerPath = classNameService.applyFilters('headerPath', './Header' );
		expect( headerPath  ).toEqual( 'ALT!' )
	})
});
