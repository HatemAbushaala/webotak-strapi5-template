// read all ./seeds, execute one by one

const fs = require("fs")
const path = require("path")

module.exports = async (strapi) => {
  const seedsPath = path.join(__dirname, "./seeds")
  const files = fs.readdirSync(seedsPath)

  for (const file of files) {
    console.log("seeding", file)
    const seed = require(path.join(seedsPath, file))
    await seed(strapi)
    console.log("done seeding", file)
  }
}
