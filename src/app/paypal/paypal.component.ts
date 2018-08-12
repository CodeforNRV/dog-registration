import { Component, OnInit, Input } from '@angular/core';

import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent implements OnInit {

	@Input() form: any;

	constructor() { }

	public payPalConfig?: PayPalConfig;

	ngOnInit(): void {
	  this.initConfig();
	}

	updateAmount(): void {
		let fee = this.form.get('fee').value
		this.payPalConfig.transactions = [{
      amount: {
        currency: 'USD',
        total: fee,
      },
    }]
  }

	private initConfig(): void {
	  this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox,
		  {
		    commit: true,
		    client: {
					// ClientID api credential of the business paypal account
					sandbox: 'AWd9JBIV7EIawjvRGY0YfOu80fBlDzukHVXiqsy0-wRuhsSejyqd6GF8pK1WI5bCezCTKUAZ7DgTaViR',
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
		    transactions: [], // we will add in the transaction later
			}
		);
	}

}
