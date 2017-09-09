package routes

import (
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
