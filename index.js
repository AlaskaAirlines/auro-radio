import { AuroRadio } from '../src/auro-radio.js';
import { AuroRadioGroup } from '../src/auro-radio-group.js';

import * as RuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

RuntimeUtils.default.prototype.registerComponent('custom-radio', AuroRadio);
RuntimeUtils.default.prototype.registerComponent('custom-radio-group', AuroRadioGroup);
