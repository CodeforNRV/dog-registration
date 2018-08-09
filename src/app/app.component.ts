import { Component } from '@angular/core';

import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

	public payPalConfig?: PayPalConfig;

	ngOnInit(): void {
	  this.initConfig();
	}

	private initConfig(): void {
	  this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox,
		  {
		    commit: true,
		    client: {
		    	// your sandbox key below (ClientID)
		    	sandbox: 'AWd9JBIV7EIawjvRGY0YfOu80fBlDzukHVXiqsy0-wRuhsSejyqd6GF8pK1WI5bCezCTKUAZ7DgTaViR',
		      // sandbox: 'ASDkF1xliRvr7ozJerVc9X6QyfvvAiQ3bNzYtgFkqZmaWeX9rVBYeV7F',
		    },
		    button: {
		      label: 'paypal', // can be 'paypal', 'venmo', 'credit', ...
		    },
		    onPaymentComplete: (data, actions) => {
		      console.log('OnPaymentComplete');
		      alert('congrats!  you are the new owner of a dog tag!');
		    },
		    onCancel: (data, actions) => {
		      console.log('OnCancel');
		    },
		    onError: (err) => {
		      console.log('OnError');
		    },
		    transactions: [{
		      amount: {
		        currency: 'USD',
		        total: 9,
		      },
		    }],
			}
		);
	}
}
