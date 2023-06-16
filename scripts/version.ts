import inquirer from 'inquirer';
import semver from 'semver';
import fs from 'fs';
 interface PackageJson {
  version: string;
}
 // Read the package.json file
const packageJson: PackageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
 // Get the current version number
const currentVersion: string = packageJson.version;
 // Define the new version number options
const versionOptions: string[] = [
  incrementVersion(currentVersion, 'patch'),
  incrementVersion(currentVersion, 'minor'),
  incrementVersion(currentVersion, 'major'),
  incrementVersion(currentVersion, 'alpha'),
  incrementVersion(currentVersion, 'beta'),
  incrementVersion(currentVersion, 'rc')
];
 // Define the question
const questions = [
  {
    type: 'list',
    name: 'increment',
    message: 'Select the version increment:',
    choices: versionOptions
  }
];
 // Ask the question
inquirer.prompt(questions).then((answers: { increment: string }) => {
  const newVersion: string = answers.increment;
   // Update the version number in the package.json file
  packageJson.version = newVersion;
  fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
   console.log(`Version number updated to: ${newVersion}`);
});
 // Helper function: increment the version number
function incrementVersion(version: string, level: string): string {
  let newVersion: string;
   if (level === 'alpha') {
    newVersion = semver.inc(version, 'prerelease', 'alpha') as string;
  } else if (level === 'beta') {
    newVersion = semver.inc(version, 'prerelease', 'beta') as string;
  } else if (level === 'rc') {
    newVersion = semver.inc(version, 'prerelease', 'rc') as string;
  } else {
    newVersion = semver.inc(version, level as semver.ReleaseType) as string;
  }
   return newVersion;
}