## This is Google go tutorial Hello Google+

### Lesson page

- Hello Google+ - Go — Google Cloud Platform
 - https://cloud.google.com/appengine/training/go-plus-appengine/hello-plus


### process

- you have to install Google App Engine SDK for Go
 - Download the Google App Engine SDK - App Engine — Google Cloud Platform https://cloud.google.com/appengine/downloads#Google_App_Engine_SDK_for_Go

- write tutorial

- run local

```
/path/to/google_appengine/dev_appserver.py goplus
```

- Open http://localhost:8080 in your browser.

- prepare your project on Google Console and get Google API+ API KEY.

- deploy to your project

```
/path/to/google_appengine/appcfg.py update goplus
```

### directory

```
[GOPATH]
├── bin
├── pkg
└── src
    ├── github.com
    │   ├── bohebohe
    │   │   ├── goplus

```
