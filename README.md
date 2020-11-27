# DogBreedGallery

## Get started
### Clone the repo
```shell
git clone https://github.com/NadegeChambellant/DogBreedGallery.git
cd DogBreedGallery
```
### Install npm packages
Install the `npm` packages described in the `package.json` and start the project:
```shell
npm install
npm start
```
Project should start by defaut on `http://localhost:4200/`

## Thought Process
Since the instruction's introduction and task were not matching, I considered this project as if it were a new tab on the example design.

## Comments
- The task description was giving a lot of room for interpretation. On a real project I would have discussed with you to get a clearer picture of what you wanted, for example:
The random dog picture displayed on top feels out of place - making a banner similar to the design you shared would require a specific image format which is not handled by the API. Improvement proposals are listed on the improvement section of this document.
- Since it is meant to be part of a bigger website which is not included, the app routing automatically redirects you to the /dog-breeds page, where the dog breed finder would be. Additionally, I implemented lazy loading since I would expect other pages to be on other modules.
- I made the design so that the app may be used on any screen size.

## Improvements
Given more time, here are the improvements I would bring to this project:
### UI
- The banner with the random dog image displayed on top could be split in 2 columns : Picture | some Welcome text. We could also display several dog images to fill in the view width.
- Add a hamburger menu on the top nav-bar visible on mobiles to display a side-nav rather than having tabs on the top.
- The website's main color makes text rather difficult to see for visually impaired people, so I would propose a more appropriate and elegant color.
### UX
- The auto-complete is an Angular Material component that makes search for filter easier. However some tweaks could make it more enjoyable to use, like the ability to easily delete the content of the filter. Also, this component fires the search upon selection from the options, I would also fire it uppon hitting Enter. Finally, I would add an "All" option on top for both filters.
- On the main page under the filters I would rather display a gallery of dog breeds with the breed name and a random picture for each (in case the user would not be sure about the breed he is looking for). The filter would filter the dog breeds cards. Then upon clicking on a breed card, I would display a gallery of all the dog pictures fom the said breed. This would be up to discussion with the designer/stakeholder.
### Code
- Add unit tests and end to end tests !!