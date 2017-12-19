// grab the importer
import imports from "./imports.js";

// export through the same pattern
export default new Promise(async $export => {
  // grab many modules at once
  const [a, b] = await imports(
    import("./extensions/PluginA/index.js"),
    import("./extensions/PluginB/index.js")
  );

  // export this module
  $export({ name: "myApp", a, b });
});
