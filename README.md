# dog-registration
Montgomery County requires that all dogs in the county be registered and this will help make that easier!

## Demo

Visit [learnnation.org/dogtags.html](http://learnnation.org/dogtags/index.html).

## Development server

  1. `git clone ...` the repo.
  2. `cd ...` into the repo.
  3. `npm install` to install all node dependencies.
  4. `npm install -g @angular/cli` to install the angular CLI. The `-g` option causes it to be installed globally, and this is recommended.
  5. `ng serve` for a dev server. Navigate to [localhost:4200](http://localhost:4200/). The app will automatically reload if you change any of the source files.

Most of your work will be done in files in the folder `src/app`.  The root html file is at `src/index.html`, the root javascript (actually typescript) file is at `src/main.ts`, and the root CSS (actually SCSS) file is at `src/styles.scss`.

## Production server

  1. `git clone ...` the repo.
  2. `cd ...` into the repo.
  3. `npm install` to install all node dependencies.
  4. `npm install -g @angular/cli` to install the angular CLI. The -g option causes it to be installed globally, and this is recommended.
  5. `ng build --prod`, or `ng build --prod --base-href baseplace` if the user is going to visit [domain.com/baseplace/index.html](http://domain.com/baseplace/index.html).  The build artifacts will be stored in the `dist` directory.
  6. Set up a static file server pointing to the directory `/path/to/dog-registration/dist/dogtags`.

See [stackoverflow](https://stackoverflow.com/questions/35721206/how-to-enable-production-mode-in-angular-2) if you get stuck.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Further help

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.  To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
