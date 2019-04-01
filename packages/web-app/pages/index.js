import {Message} from "@calderawp/components";

export default () => (
  <div>
    Imported modules from another workspace:
    <Message
        message={'Component from @calderawp/components'}
        error={false}
    />
  </div>
)
