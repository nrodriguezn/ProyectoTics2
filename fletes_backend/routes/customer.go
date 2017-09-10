package routes

import (
	"ProyectoTics2/fletes_backend/model"
	"net/http"

	"github.com/gin-gonic/gin"
)

//FetchAll Trae todos los usuarios?
func FetchAll(c *gin.Context) {
	response := gin.H{
		"status":  "success",
		"data":    nil,
		"message": "pasaste la prueba",
	}
	c.JSON(http.StatusOK, response)
}

func GetCustomers(c *gin.Context) {
	//Asking to model
	customers := model.GetCustomers()
	response := gin.H{
		"status":  "success",
		"data":    customers,
		"message": nil,
	}
	c.JSON(http.StatusOK, response)
}
