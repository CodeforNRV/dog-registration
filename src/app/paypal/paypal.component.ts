import { Component, OnInit } from '@angular/core';

import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';

import { FormService } from '../form.service';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent implements OnInit {

	constructor(private formService: FormService) { }

	public payPalConfig?: PayPalConfig;

	ngOnInit(): void {
	  this.initConfig();
	}

	updateAmount(): void {
		console.log(this.formService)
		console.log(this.formService.info)
		let fee = this.formService.info.fee
		console.log(`got fee ${fee}.`)
		this.payPalConfig.transactions = [{
      amount: {
        currency: 'USD',
        total: fee,
      },
    }]
    console.log('updated paypal transaction amount')
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
