package main

import (
	"ProyectoTics2/fletes_backend/routes"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	router := gin.Default()

	v1 := router.Group("/api")
	{
		v1.GET("/", routes.FetchAll)
	}

	router.Run(":" + port)
}
