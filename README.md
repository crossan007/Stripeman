# WhY!? 

This is a minification/bundling of the Stripe Webhook API (specifically `webhooks.generateTestHeaderString`) for usage as a Postman Pre-Request Script.

Stripe's docs *STRONGLY SUGGEST* using `stripe-cli` for generating / mocking sample webhooks; however, usage of `stripe-cli` requires access to your organization's Stripe account.  In some cases it is not desireable to grant Developers access to a stripe account.

The Postman sandbox doesn't allow inclusion of local libraries, but lots of folks have pointed out that you can "include" code (using `eval()`) from an environment variable or from an external URL:
*  https://blog.postman.com/api-testing-tips-from-a-postman-professional/
*  https://community.postman.com/t/use-external-javascript-library-within-pre-request-script/3773/2


# Usage
1) run `npx webpack --config webpack.config.js` to bundle this code
2) Create a Postman Environment variable called `Stripe`
3) Paste `./dist/main.js` into the body of the Postman `Stripe` variable
4) 