# COVID-VACCINE-FINDER

This is a small web-app made for the people who were struggling to find a vaccine slot on the official website cowin.gov just because "not so clean UI".
https://itsanishmv.github.io/vaccine-finder-app/

# HOW IT WORKS

To start with the functionality of the web app there's a form where you input the desired date and the pincode of your/friends location and then clicking on the search button will make an API call to the endpoints provided by the official Cowin website and show you the availability of vaccine slots (DOSE 1 and DOSE 2 ) along with the centers name , address ,type of vaccine , fee etc..
there is also a green (available) and red (booked) tag provided so that users can easily get the information and move on to the next search.

## API Reference

#### Get data

Api to get all the state , districts​ , pincode

```http
  GET ​/v2​/appointment​/sessions​/public​/findByPin
                   OR
  GET /v2​/appointment​/sessions​/public​/findByDistrict
                   OR
  GET ​/v2​/admin​/location​/districts​/{state_id}
```

## Documentation

API
[Documentation](https://apisetu.gov.in/public/marketplace/api/cowin#/Metadata%20APIs/districts)

## Tech Stack

**Client:** HTML ,CSS , React JS

**Dependencies**: Styled-components

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
