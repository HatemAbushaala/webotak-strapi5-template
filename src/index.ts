// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {
    setTimeout(() => {
      checkEnvConsistency()
    }, 3000)
  },
}

function checkEnvConsistency() {
  // this function checks if the .env and .env.example files are consistent, so we can avoid issues with missing environment variables
  if (process.env.NODE_ENV !== "development") return

  const fs = require("fs")
  const path = require("path")

  function parseEnvFile(filePath) {
    if (!fs.existsSync(filePath)) return {}
    const content = fs.readFileSync(filePath, "utf-8")
    return Object.fromEntries(
      content
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith("#"))
        .map((line) => {
          const [key] = line.split("=")
          return [key.trim(), true]
        })
    )
  }

  const envPath = path.resolve(process.cwd(), ".env")
  const envExamplePath = path.resolve(process.cwd(), ".env.example")
  const envVars = parseEnvFile(envPath)
  const envExampleVars = parseEnvFile(envExamplePath)

  const missingInExample = Object.keys(envVars).filter((key) => !(key in envExampleVars))
  const missingInEnv = Object.keys(envExampleVars).filter((key) => !(key in envVars))

  if (missingInExample.length > 0) {
    console.warn("[.env] contains variables missing from [.env.example]:", missingInExample.join(", "))
  }
  if (missingInEnv.length > 0) {
    console.warn("[.env.example] contains variables missing from [.env]:", missingInEnv.join(", "))
  }
}
