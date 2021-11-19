package router

import (
	"encoding/json"
	"fmt"

	"github.com/gofiber/fiber/v2"
	"gitlab.clirisgroup.com/templates/typescript-JWT/Api/packages/auth"
)

func Login(c *fiber.Ctx) error {

	body := c.Body()

	var formulaire auth.Form

	err := json.Unmarshal(body, &formulaire)

	fmt.Println("aaaaaa")

	if err != nil {
		return c.SendStatus(500)
	}

	fmt.Println(formulaire)

	res, err := auth.Login(formulaire)

	if err != nil {

		fmt.Println(err)

		return c.Status(401).JSON(map[string]string{
			"access_token":  "",
			"refresh_token": "",
		})
	}

	if res.Connect {
		token := auth.GenerateToken(formulaire)
		return c.Status(200).JSON(token)
	}

	return c.Status(401).JSON(map[string]string{
		"access_token":  "",
		"refresh_token": "",
	})
}
