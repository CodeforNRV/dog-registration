import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'custom-sel',
  templateUrl: './my-form.component.html',
})
export class MyFormComponent {
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
      template: '<hr /><h2>Owner\'s name</h2>',
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
            label: 'First',
            placeholder: 'John',
            required: true,
          },
        },
        {
          className: 'col-3',
          key: 'name.middle',
          type: 'input',
          templateOptions: {
            label: 'Middle',
            placeholder: 'Edward',
          },
        },
        {
          className: 'col-5',
          key: 'name.last',
          type: 'input',
          templateOptions: {
            label: 'Last',
            placeholder: 'Hutchinson',
            required: true,
          },
        },
      ],
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
    // {
    //   key: 'custom',
    //   type: 'custom',
    //   templateOptions: {
    //     label: 'Custom inlined',
    //   },
    // },
  ];

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
