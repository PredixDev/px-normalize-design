/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Demo DOM module */
/* 6: Handle selectedOptions, update demo */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-sass-doc/px-sass-doc.js';
import '../css/px-normalize-design-demo-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <!-- 0: Import the styles-->
    <style include="px-normalize-design-demo-styles" is="custom-style"></style>

<!-- 1: Describe Module -->
<px-sass-doc module-name="px-normalize-design" description="The Predix UI Normalize module is based on normalize.css at version v3.0.2. Normalize.css makes browsers render all elements more consistently and in line with modern standards. It is developed and maintained by Nicolas Gallagher." layer="generic" dependencies="[
    &quot;http://github.com/PredixDev/px-defaults-design&quot;
  ]" selected-options="{{selectedOptions}}" hide-demo-container="true">

<!-- 2: Set Options -->
<!-- N/A -->

<!-- 3: Make HTML Demo -->
<!-- N/A -->

<!-- 4: Set Import Slot -->
<section slot="import">
@import "px-normalize-design/_generic.normalize.scss";
</section>

<!-- 5: Set Usage HTML -->
<!-- N/A -->

</px-sass-doc>
`,

  is: 'px-normalize-design-demo'
});
