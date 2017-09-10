package main

import (
	"ProyectoTics2/fletes_backend/routes"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

func Database() *gorm.DB {
	//open a db connection
	db, err := gorm.Open("postgres", "postgres://bfvpxlvvinhrer:84d03a31a14e15c08cb38b2bdfe3e8b18b43da42f10341781ab7b37e1fe902b5@ec2-54-204-0-88.compute-1.amazonaws.com:5432/d5d3n2qe2mdubp")
	if err != nil {
		panic("Failed to connect database")
	}
	return db
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	db := Database()
	db.AutoMigrate()

	router := gin.Default()

	v1 := router.Group("/api")
	{
		v1.GET("/", routes.FetchAll)
		v1.GET("/getcustom", routes.GetCustomers)
	}

	router.Run(":" + port)
}
