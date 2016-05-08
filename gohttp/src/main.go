package main

import (
	//"log"
	"net/http"
)

// func main() {
// 	fs := http.FileServer(http.Dir("/template/index.html"))
// 	http.Handle("/", fs)
//
// 	log.Println("Listening・・・・")
// 	http.ListenAndServe(":8080", nil)
// }

func init() {
	http.HandleFunc("/", static)
}

func static(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "template/"+r.URL.Path)
}
