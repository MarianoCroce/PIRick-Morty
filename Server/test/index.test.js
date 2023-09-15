const app = require("../src/app");
const session = require("supertest");

const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET / /rickandmorty/character/:id", () => {
    it("Responde con el status 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });

    it("Si hay un error responde con esl status 500", async () => {
      await agent.get("/rickandmorty/character/3312").expect(500);
    });

    it('Responde con un objetgo con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const { body } = await agent.get("/rickandmorty/character/1");

      const propiedades = [
        "id",
        "name",
        "species",
        "gender",
        "status",
        "origin",
        "image",
      ];

      const keys = Object.keys(body); // devuelve las keys extraidas de body en un array []

      propiedades.forEach((prop) => {
        expect(keys).toContain(prop);
      });
    });
  });

  describe("GET / rickandmorty/login", () => {
    it("Informacion correcta pase usted", async () => {
      const { body } = await agent.get(
        "/rickandmorty/login?email=mariano@gmail.com&password=123456a"
      );

      expect(body.access).toEqual(true);
    });
    it("Informacion incorrecta 'You shall not pass'", async () => {
      const { body } = await agent.get(
        "/rickandmorty/login?email=marino@gmail.com&password=123999a"
      );

      expect(body.access).toEqual(false);
    });
  });

  describe("POST /rickandmorty/fav", () => {
    const testCharacterA = { id: 1, name: "TEST A" };
    const testCharacterB = { id: 2, name: "TEST B" };

    it("Devuelve un array con la informacion enviada", async () => {
      const { body } = await agent.post("rickandmorty/fav").send(
        testCharacterA
      );

      expect(body).toContainEqual(testCharacterA);
    });

    it("Devuelve un array con la informacion enviada B", async () => {
      const { body } = await agent.post("rickandmorty/fav").send(
        testCharacterB
      );

      expect(body).toContainEqual(testCharacterA);
      expect(body).toContainEqual(testCharacterB);
    });
  });

  describe("DELETE / rickandmorty/fav/:id" , () => {
    const testCharacterA = { id: 1, name: "TEST A" };
    const testCharacterB = { id: 2, name: "TEST B" };

    it("Si no se elimina el personaje devuelve el mismo array", async () => {
        const { body } = await agent.delete("rickandmorty/fav/3312")
    
          expect(body).toContainEqual(testCharacterA);
          expect(body).toContainEqual(testCharacterB);
    })

    it("Elimina al personaje recibido por ID", async () => {
        const { body } = await agent.delete("rickandmorty/fav/2")
    
          expect(body).not.toContainEqual(testCharacterB)
    })


  })
});
