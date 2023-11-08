# NuCamp Site

##### https://learn.nucamp.co/mod/book/view.php?id=5917&forceview=1

## Local Setup

- Run `npm install bootstrap@5.1.3 bootstrap-social@5.1.1 font-awesome@4.7.0 formik@2.2.9 react-router-dom@6.2.1 react-spring@9.4.5-beta.1 reactstrap@9.0.1 redux-logger@3.0.6 typeface-lobster@1.1.13 typeface-open-sans@1.1.13`

- Local json-server: Will require a localy running json server. Use local json-server file and run command:
  - `npm install json-server -g` to install json-server on your machine locally
  - open assets/json-server folder in terminal and run command to start: `json-server -H 0.0.0.0 --watch db.json -p 3001 -d 2000`
