import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { takeUntil, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent {

  constructor() { }

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }

  form = new FormGroup({});

  model: any = {};

  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };

  fields: FormlyFieldConfig[] = [
    // see https://formly-js.github.io/ngx-formly/examples/form-options/reset-model for field examples
    {
      className: 'section-label',
      template: '<hr /><h2>Owner</h2>',
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        // there are 12 columns in total
        {
          className: 'col-4',
          key: 'name.first',
          type: 'input',
          templateOptions: {
            label: 'First name',
            placeholder: 'John',
            required: true,
          },
        },
        {
          className: 'col-3',
          key: 'name.middle',
          type: 'input',
          templateOptions: {
            label: 'Middle name',
            placeholder: 'Edward',
          },
        },
        {
          className: 'col-5',
          key: 'name.last',
          type: 'input',
          templateOptions: {
            label: 'Last name',
            placeholder: 'Hutchinson',
            required: true,
          },
        },
      ],
    },
    {
      key: 'phone',
      type: 'input',
      templateOptions: {
        label: 'Phone number',
        placeholder: '(555)-555-5555',
        pattern: /^\s*(?:\d{3}|\(\d{3}\))[- ]?\d{3}[- ]?\d{4}\s*$/, // remember to trim in code!
        required: true,
      },
      validation: {
        messages: {
          pattern: 'You must input a 10-digit phone number in a common format, such as ###-###-####.',
        },
      },
    },
    {
      className: 'section-label',
      template: '<hr /><h2>Address</h2><small class="text-muted">Your new dog tag(s) and a receipt will be mailed here.  Must be a valid Montgomery County address.</small>',
    },
    {
      key: 'address.street.1',
      type: 'input',
      templateOptions: {
        label: 'Street',
        placeholder: 'Street and number',
        required: true,
      },
    },
    {
      key: 'address.street.2',
      type: 'input',
      templateOptions: {
        placeholder: 'Apartment, suite, unit, building, floor, etc.',
      },
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-8',
          key: 'address.city',
          type: 'select',
          templateOptions: {
            label: 'City',
            options: [
              { label: 'Blacksburg', value: '24060', },
              { label: 'Christiansburg', value: '24073', },
            ],
            customSelect: true, // makes dropdown arrow uniform across browsers
            required: true,
          },
        },
        {
          className: 'col-4',
          key: 'address.zip',
          type: 'input',
          templateOptions: {
            label: 'Zip code',
            placeholder: '',
            description: 'In the future, this may be automatically populated when you input the \'City\'.',
            pattern: /^\s*(24060|24073)\s*$/, // remember to trim in code!
            required: true,
          },
          validation: {
            messages: {
              pattern: (error, field: FormlyFieldConfig) => `"${field.formControl.value}" is not a recognized zip code for Montgomery County, VA.`,
            },
          },
        },
      ],
    },
    {
      className: 'section-label',
      template: '<hr /><h2>Number of dogs</h2>',
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-4',
          key: 'unsexed',
          type: 'input',
          defaultValue: 0,
          templateOptions: {
            label: 'Unsexed',
            pattern: /^\s*\d+\s*$/, // remember to trim in code!
            description: 'Spayed females and neutered males',
            min: 0,
            change: this.updateFee.bind(this),
          },
          validation: {
            messages: {
              pattern: 'Must be a natural number',
            },
          },
          modelOptions: {
            updateOn: 'blur',
          },
        },
        {
          className: 'col-4',
          key: 'female',
          type: 'input',
          defaultValue: 0,
          templateOptions: {
            type: 'number',
            label: 'Female',
            description: 'Females NOT spayed',
            min: 0,
          },
        },
        {
          className: 'col-4',
          key: 'male',
          type: 'input',
          defaultValue: 0,
          templateOptions: {
            type: 'number',
            label: 'Male',
            description: 'Males NOT neutered',
            min: 0,
          },
        },
      ],
    },
    {
      key: 'kennel',
      type: 'input',
      defaultValue: 0,
      templateOptions: {
        type: 'number',
        label: '20-dog kennel',
        placeholder: '0',
        description: 'If you are applying for a dog kennel license, you must purchase 1 license per 20 dogs.  For example, if your kennel capacity is 60, put a 3 in this box.',
        min: 0,
      },
    },
    {
      key: 'fee',
      type: 'input',
      defaultValue: 0,
      templateOptions: {
        label: 'Fee',
        addonLeft: {
          text: '$',
        },
        description: 'The total remitted fee of the dog licenses you are requesting appears here.',
      },
      expressionProperties: {
        'templateOptions.disabled': 'true',
      },
    },
  ];

  updateFee(): void {
    let total = parseInt(this.form.get('unsexed').value) * 5 +
                parseInt(this.form.get('female').value) * 10 +
                parseInt(this.form.get('male').value) * 10 +
                parseInt(this.form.get('kennel').value) * 50;
    this.form.get('fee').setValue(total);
  }

}
