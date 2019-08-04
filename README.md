# links-checker

Test automation task to check broken links in cypress.io homepage

## Getting Started

Follow the below mentioned steps for complated automated solution from setup, execution, reporting etc.

### Install Nodejs (if it's mot installed yet)

[Nodejs.org download link](https://nodejs.org/en/download/)

### Clone the repository

With `SSH`

```bash
git clone git@github.com:abidali7/links-checker.git
```

With `HTTPS`

```bash
git clone https://github.com/abidali7/links-checker.git
```

### NPM install

Once you have succefully done with cloning the repository then execute the following command in project root folder i.e. links-checker

```bash
npm install
```

### NPM Scripts

Excute the followings scripts to get done with execution of automated scripts.

```bash
npm run links
```

### Reports

Execute the following scripts to view the reprots & again these should be run from the root folder.

- `npm run pretest`: This commad will make sure already available reprots shouldn't be there inside the folder `allure-results`. This folder can be manualy delete as well. Exuting this command will execute the `rd /s /q allure-results` (for windows users only). If you are using linux then it should be `rm -rf allure-results`.
- `npm run posttest`: This command will generate the reports inside the another folder i.e. `allure-report`
- `index.html`: To view the reports, open the `index.html` (Ideally in Edge) from `links-checker\allure-report\index.html` there will you see all the details related to TEST RUN.
