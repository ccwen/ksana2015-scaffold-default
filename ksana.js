jsonp_handler({
"version": "1",
"build": 1,
"title":"_%name%_",
"minruntime": 1 ,
"baseurl":"_%rawgit%_",
"description":"",
 "browserify": {
  "external": [
   "react",
   "react/addons",
   "bootstrap"
  ]
 },
"files":
  ["index.html","index.css","react-bundle.js","bundle.js","jquery.js","ksana.js",
  "bootstrap.min.js","bootstrap.min.css"]
})