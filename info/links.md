let's make it work nicely on phones/small screens.

include a js file into a ts file:
let checkout = require("./app/paypal/checkout.js");
in main.ts, or import 'require' and then use in specific file

paypal:
https://www.paypal.com/activation/businessSetup#payment

paypal developer reference:
https://developer.paypal.com/docs/classic/express-checkout/integration-guide/ECReference/

look at
ngx-paypal
at
https://github.com/Enngage/ngx-paypal
with documentation:
https://enngage.github.io/ngx-paypal/
sandbox site:
https://www.sandbox.paypal.com/
sandbox accounts:
https://developer.paypal.com/developer/accounts
create REST app for a sandbox account and get api key:
https://developer.paypal.com/developer/applications/

let's use formly for angular 2+:
https://github.com/formly-js/ngx-formly

dropdown css styling github issue:
https://github.com/formly-js/ngx-formly/issues/1100

this looks nice:
https://ngx-bootstrap-latest.surge.sh/#/

bootstrap themes w forms:
https://demos.creative-tim.com/argon-design-system/index
NOT UP TO DATE:
https://github.com/formly-js/angular-formly-templates-bootstrap
https://alligator.io/angular/formly/

dog tag landing page:
https://www.montgomerycountyva.gov/content/15987/16015/16816/default.aspx

dog tag order form:
https://www.montgomerycountyva.gov/filestorage/16277/16895/17504/dog-tag-order-form-2018.pdf

the next step is to add our images of dogs.  Then we can throw it up on GitHub.

the next step is to get bootstrap-formly properly configured.  Currently we have bootstrap, but we haven't hooked the css up to formly fully, so certain things like drop-downs are not normalized.

gameplan:
argon works, although it's annoying that the scss files have to sit in the src directory.  Perhaps that can be fixed.






Optional:
file upload
disable or hide fields

Formly links to all the formly form builders
https://github.com/formly-js

angular-Formly is for angular.  It has a bunch of examples on the left column:
http://angular-formly.com/#!/
features:
input -- yes
paragraph input -- yes
drop down -- yes
drop down with search
radio button (use drop down)
validate inputs with useful error messages next to the inputted thing -- yes
checkbox -- yes
file upload -- plugin
disable or hide fields -- yes

Vue-formly is basically the same thing but for Vue.js
https://github.com/formly-js/vue-formly

jQuery formbuilder: seems quite nice
https://formbuilder.online
