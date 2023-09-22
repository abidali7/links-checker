# links-checker
This repository is dedicated to crawl and check if there's any broken link exist at a web page.
Stack: Protractor, Allure (reporting framework)

## Getting Started
Follow the below mentioned steps for complete automated solution from setup, execution, reporting etc.

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

Execute the following scripts to view the reports & again these should be run from the root folder.

- `npm run pretest`: This will make sure that already available reports shouldn't be there inside the folder `allure-results`. This folder can be manualy delete as well. This will execute `rd /s /q allure-results` (for windows users only). If you are using linux then it should be `rm -rf allure-results`.
- `npm run posttest`: This command will generate the reports inside the another folder i.e. `allure-report`
- `index.html`: To view the reports, open the `index.html` (Ideally in Edge) from `links-checker\allure-report\index.html` there will you see all the details related to TEST RUN.
