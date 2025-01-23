// eslint-disable-next-line import/no-anonymous-default-export
export default function (plop) {
  plop.setGenerator("feature", {
    description: "Generate a new feature",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "feature name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/features/{{name}}/index.ts",
        templateFile: ".plop/feature/index.ts.hbs",
      },
    ],
  })
}
