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

how to get the price to update:
https://github.com/formly-js/ngx-formly/issues/1116

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

Formly links to all the formly form builders
https://github.com/formly-js

file upload -- plugin

the next step is to get bootstrap-formly properly configured.  Currently we have bootstrap, but we haven't hooked the css up to formly fully, so certain things like drop-downs are not normalized.

gameplan:
clone the repo onto my server and figure out how to put angular in production mode so that we can serve a demo.

