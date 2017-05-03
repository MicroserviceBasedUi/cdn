#addin Cake.Yarn

var target = Argument("target", "Default");

var sourcesBasePath = "./src";

Task("Restore")
  .Does(() =>
{
  Yarn.FromPath(sourcesBasePath).Install();
});

Task("Build")
  .IsDependentOn("Restore")
  .Does(() =>
{
  Yarn.FromPath(sourcesBasePath).RunScript("build");
});

Task("Start")
  .IsDependentOn("Build")
  .Does(() =>
{
  Yarn.FromPath(sourcesBasePath).RunScript("start");
});

Task("Default")
  .IsDependentOn("Build")
  .Does(() =>
{
});

RunTarget(target);