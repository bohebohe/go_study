## This is Simple Static Page by go and react

### process

- you have to install Google App Engine SDK for Go
 - Download the Google App Engine SDK - App Engine — Google Cloud Platform https://cloud.google.com/appengine/downloads#Google_App_Engine_SDK_for_Go

- run local

```
/path/to/google_appengine/dev_appserver.py gohttp
```

- Open http://localhost:8080 in your browser.

- deploy to your project

```
/path/to/google_appengine/appcfg.py update gohttp
```

### directory

```
[GOPATH]
├── bin
├── pkg
└── src
    ├── github.com
    │   ├── bohebohe
    │   │   ├── gohttp

```
