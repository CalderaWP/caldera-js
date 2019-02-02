import foo from 'foo'
import Bar from 'bar'
import {A1,A2} from 'components';
export default () => (
  <div>
    Imported modules from another workspace:
    <pre>{foo}</pre>
        <A1 /><A2 />
    <Bar />
  </div>
)
